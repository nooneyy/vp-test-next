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
};

const Index = () => {
  return (
    <main>
      <VideoCard />
      <Suspense fallback={<ProductSectionsFallback />}>
        <ProductSections />
      </Suspense>
    </main>
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
    <section className="py-3 md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%] flex items-center justify-center md:justify-between md:gap-5 lg:gap-12">
      <Link
        href="/vse"
        className="flex gap-1 absolute px-12 py-2 rounded-xl bg-white md:static md:p-0 md:flex-col md:bg-none hover:underline hover:bg-white/90 md:hover:bg-none z-10 items-center md:items-start transition-colors"
      >
        <p className="text-lg md:text-4xl font-bold md:font-extrabold tracking-tight lg:text-5xl text-foreground">
          Nakupovat
        </p>
        <div className="flex md:gap-1 items-center">
          <p className="text-lg md:text-4xl font-bold md:font-extrabold tracking-tight lg:text-5xl text-foreground">
            vše
          </p>
          <ChevronRight className="h-8 w-8 lg:h-10 lg:w-10 self-end" />
        </div>
      </Link>
      <video
        autoPlay
        muted
        playsInline
        className="rounded-2xl object-cover mx-6 md:mx-0 md:w-[80%] h-[500px] min-w-0"
      >
        <source
          src="https://gsphznnnvwsheneigodw.supabase.co/storage/v1/object/public/video/indexvideo.mp4"
          type="video/mp4"
        />
        <track kind="captions" />
      </video>
    </section>
  );
};

export default Index;
