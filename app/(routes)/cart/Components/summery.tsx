'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

const Summery = () => {
  const [items, removeAll] = useCart(state => [state.items, state.removeAll]);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Order Placed Successfully');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map(item => item.id),
      },
    );
    window.location = res.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summery</h2>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summery;
