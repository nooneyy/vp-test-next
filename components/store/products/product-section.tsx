import {
  Product,
  ProductSkeleton,
  type SmallProduct,
} from "@/components/store/products/product";
import { SquarePlus, TrendingUp } from "lucide-react";

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
    <section className="flex flex-col items-center justify-center pt-10 space-y-10 md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%]">
      <p className="text-3xl lg:text-4xl font-semibold tracking-tight lg:self-start flex items-center gap-2 lg:ml-4">
        {productSectionBadge(name)}{name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-16 lg:gap-12 xl:gap-16">
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
    default: return null;
  }
}