import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('2246a634-069f-4bf6-9bd6-e56a0b4edd7f');
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            title="Featured Products"
            items={products}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
