import { unstable_noStore } from "next/cache";
import {
  ProductSection,
  ProductSectionSkeleton,
} from "@/components/store/products/product-section";
import { getRelatedProducts } from "@/lib/db/queries";

export const RelatedProducts = async ({
  slug,
  badge,
}: {
  slug: string;
  badge: string;
}) => {
  unstable_noStore();
  const relatedProducts = await getRelatedProducts(slug, badge);

  return (
    <ProductSection name="Související produkty" products={relatedProducts} />
  );
};

export const RelatedProductsFallback = () => {
  return <ProductSectionSkeleton name="Související produkty" />;
};
