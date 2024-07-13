import {
  Product,
  ProductSkeleton,
  type SmallProduct,
} from "@/components/store/products/product";
import { Route, SquarePlus, TrendingUp } from "lucide-react";

export const ProductSection = ({
  name,
  products,
  priority,
}: {
  name: string;
  products: SmallProduct[];
  priority?: boolean;
}) => {
  return (
    <ProductSectionWrapper name={name}>
      {products.map((product) => (
        <Product key={product.slug} productInfo={product} priority={priority} />
      ))}
    </ProductSectionWrapper>
  );
};

export const ProductSectionSkeleton = ({ name }: { name: string }) => {
  return (
    <ProductSectionWrapper name={name}>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </ProductSectionWrapper>
  );
};

const ProductSectionWrapper = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-6 pt-10 md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%]">
      <p className="flex items-center gap-2 text-3xl font-semibold tracking-tight lg:self-start lg:text-4xl">
        {productSectionBadge(name)}
        {name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:w-full lg:grid-cols-4 lg:gap-12 xl:gap-16">
        {children}
      </div>
    </section>
  );
};

const productSectionBadge = (name: string) => {
  switch (name) {
    case "Novinky": {
      return <SquarePlus className="size-7" />;
    }
    case "Nejprodávanější": {
      return <TrendingUp className="size-7" />;
    }
    case "Související produkty": {
      return <Route className="size-7" />;
    }
    default:
      return null;
  }
};
