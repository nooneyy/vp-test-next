import ProductArticle from "@/components/store/product-page/product-article";
import {
  RelatedProducts,
  RelatedProductsFallback,
} from "@/components/store/product-page/related-products";
import { getProductInfo } from "@/lib/db/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const productInfo = await getProductInfo(params.slug);
  if (!productInfo) {
    notFound();
  }
  const title = `${productInfo.name} | Vinařství Plchut`;
  return {
    title,
    description: productInfo.descriptionBig,
    openGraph: {
      title,
      description: productInfo.descriptionBig,
      url: `https://obchod.vinarstviplchut.cz/produkty/${productInfo.slug}`,
      siteName: "Vinařství Plchut",
      images: [
        {
          url: productInfo.picturePath,
          width: 1920,
          height: 1920,
        },
      ],
      locale: "cs_CZ",
      type: "website",
    },
  };
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const productInfo = await getProductInfo(params.slug);

  if (!productInfo) {
    return notFound();
  }

  return (
    <>
      <ProductArticle productInfo={productInfo} />
      <Suspense fallback={<RelatedProductsFallback />}>
        <RelatedProducts
          slug={productInfo.slug}
          badge={productInfo.badges[0]}
        />
      </Suspense>
    </>
  );
};

export default ProductPage;
