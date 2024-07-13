import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  ProductSection,
  ProductSectionSkeleton,
} from "@/components/store/products/product-section";
import {
  queryMostPopularProducts,
  queryNewestProducts,
} from "@/lib/db/queries";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obchod | Vinařství Plchut",
  description: "Stránka obchodu Vinařství Plchut",
};

const Index = () => {
  return (
    <>
      <VideoCard />
      <Suspense fallback={<ProductSectionsFallback />}>
        <ProductSections />
      </Suspense>
    </>
  );
};

const ProductSections = async () => {
  unstable_noStore();
  const [newestProducts, mostPopularProducts] = await Promise.all([
    queryNewestProducts(),
    queryMostPopularProducts(),
  ]);
  return (
    <>
      <ProductSection name="Novinky" products={newestProducts} priority />
      <ProductSection name="Nejprodávanější" products={mostPopularProducts} />
    </>
  );
};

const ProductSectionsFallback = () => (
  <>
    <ProductSectionSkeleton name="Novinky" />
    <ProductSectionSkeleton name="Nejprodávanější" />
  </>
);

const VideoCard = () => {
  return (
    <section className="flex items-center justify-center py-3 md:justify-between md:gap-5 md:px-[4%] lg:gap-12 lg:px-[7%] xl:px-[8%] 2xl:px-[10%]">
      <Link
        href="/vse"
        className="absolute z-10 flex items-center gap-1 rounded-xl bg-white px-12 py-2 transition-colors hover:bg-white/90 hover:underline md:static md:flex-col md:items-start md:bg-none md:p-0 md:hover:bg-none"
      >
        <p className="text-lg font-bold tracking-tight text-foreground md:text-4xl md:font-extrabold lg:text-5xl">
          Nakupovat
        </p>
        <div className="flex items-center md:gap-1">
          <p className="text-lg font-bold tracking-tight text-foreground md:text-4xl md:font-extrabold lg:text-5xl">
            vše
          </p>
          <ChevronRight className="h-8 w-8 self-end lg:h-10 lg:w-10" />
        </div>
      </Link>
      <video
        autoPlay
        muted
        playsInline
        className="mx-6 h-[500px] min-w-0 rounded-2xl object-cover md:mx-0 md:w-[80%]"
      >
        <source
          src="https://res.cloudinary.com/dxcy1njpq/video/upload/f_auto:video,q_auto/v1/video/indexvideo"
          type="video/mp4"
        />
        <track kind="captions" />
      </video>
    </section>
  );
};

export default Index;
