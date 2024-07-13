import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/db/schema";
import { cn, getBadgeClasses, getBadgeName } from "@/lib/utils";
import Image from "next/image";
import ProductForm from "@/components/store/product-page/product-form";
import Description from "@/components/store/product-page/description";

type LargeProduct = Omit<
  typeof products.$inferSelect,
  "id" | "createdAt" | "visible" | "sales"
>;

const ProductArticle = ({ productInfo }: { productInfo: LargeProduct }) => {
  return (
    <article className="flex flex-col items-center justify-center gap-5 px-6 py-8 md:flex-row md:gap-24 md:px-[4%] md:py-12 lg:px-[7%] xl:px-[10%]">
      <div className="max-w-[340px] overflow-hidden rounded-xl md:min-w-[340px] md:self-start">
        <Image
          src={productInfo.picturePath}
          width={400}
          height={400}
          priority={true}
          alt={`Foto vína ${productInfo.name}`}
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-[2]"
        />
      </div>
      <div className="flex flex-col items-center gap-4 self-center md:items-start md:gap-3">
        <div className="flex max-w-xs items-center justify-between gap-4 px-4 md:max-w-none md:px-0">
          <p className="-ml-1 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
            {productInfo.name}
          </p>
          <div
            className={cn(
              "flex select-none items-center gap-2",
              productInfo.badges.length > 1 &&
                "rounded-full border-2 border-muted p-1",
            )}
          >
            {productInfo.badges.map((badge, idx) => (
              <Badge className={getBadgeClasses(badge)} key={idx}>
                {getBadgeName(badge)}
              </Badge>
            ))}
          </div>
        </div>
        <div className="-mt-2 flex items-center gap-2 self-start pl-3 text-lg font-semibold md:self-auto md:pl-0">
          <p>{productInfo.descriptionBig}</p>
          {productInfo.inStock ? (
            <>
              <p className="select-none text-[#008A00]">•</p>
              <p className="text-[#008A00]">Skladem</p>
            </>
          ) : (
            <>
              <p className="select-none text-[#EE0000]">•</p>
              <p className="text-[#EE0000]">Není skladem</p>
            </>
          )}
        </div>
        <div className="-mt-3 flex items-center gap-1 self-start pl-3 md:-mt-0 md:self-auto md:pl-0">
          <p className="text-lg font-semibold tracking-tight">
            {productInfo.taxedPrice} Kč
          </p>
          <p className="font-medium tracking-tight">(Vč. DPH)</p>
        </div>
        <div className="-mt-4 flex items-center gap-1 self-start pl-3 text-sm tracking-tight md:-mt-3 md:self-auto md:pl-0">
          <p>{productInfo.price} Kč</p>
          <p>(bez DPH)</p>
        </div>
        <ProductForm slug={productInfo.slug} inStock={productInfo.inStock} />
        {productInfo.description.length && (
          <Description data={productInfo.description} />
        )}
      </div>
    </article>
  );
};

export default ProductArticle;
