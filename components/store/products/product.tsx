import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/db/schema";
import { Badge } from "@/components/ui/badge";
import { getBadgeClasses, getBadgeName } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export type SmallProduct = Pick<
  typeof products.$inferSelect,
  "slug" | "taxedPrice" | "name" | "picturePath" | "badges"
>;

export const Product = ({
  productInfo,
  priority,
}: {
  productInfo: SmallProduct;
  priority?: boolean;
}) => {
  return (
    <Link href={`/produkty/${productInfo.slug}`}>
      <article className="group flex flex-col items-center px-6 md:px-0">
        <Image
          src={productInfo.picturePath}
          width={320}
          height={320}
          priority={priority}
          alt={`Fotka pro ${productInfo.name}`}
          className="rounded-2xl transition-transform group-hover:scale-105"
        />
        <div className="flex w-full flex-col items-start justify-center gap-2 px-1 pb-8 pt-4 transition-transform group-hover:translate-y-1 md:pb-4">
          <div className="flex w-full items-center gap-4">
            <p className="scroll-m-20 font-semibold tracking-tight group-hover:underline">
              {productInfo.name}
            </p>
            <div className="ml-auto mr-2 flex items-center gap-4">
              <Badge
                variant="destructive"
                className={`${getBadgeClasses(productInfo.badges[0])}`}
              >
                {getBadgeName(productInfo.badges[0])}
              </Badge>
            </div>
          </div>
          <Separator />
          <p className="leading-7">{productInfo.taxedPrice} Kč</p>
        </div>
      </article>
    </Link>
  );
};

export const ProductSkeleton = () => {
  return (
    <article className="flex flex-col items-center">
      <Skeleton className="aspect-square h-full w-full rounded-2xl" />
      <div className="flex w-full flex-col items-start justify-center gap-2 px-1 pb-8 pt-4 md:pb-4">
        <div className="flex w-full items-center gap-4">
          <div className="mr-4 flex h-full flex-col gap-4">
            <Skeleton className="h-[18px] w-[135.77px]" />
            <Skeleton className="h-[18px] w-[120px]" />
          </div>
          <div className="ml-auto mr-2 flex items-center gap-4">
            <Skeleton className="h-[22px] w-[71.23px] rounded-full" />
          </div>
        </div>
        <Separator />
        <Skeleton className="h-[28px] w-[53.53px] rounded-full" />
      </div>
    </article>
  );
};
