'use client';

import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';

const CartPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white">
      <Container></Container>
    </div>
  );
};

export default CartPage;
