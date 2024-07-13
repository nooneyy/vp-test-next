import { SheetClose } from "@/components/ui/sheet";
import type { CartProduct } from "@/lib/db/queries";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  CartDelete,
  CartQuantitySelector,
} from "@/components/store/layout/header/cart/cart-form/cart-form";

const CartItem = ({ itemInfo }: { itemInfo: CartProduct }) => {
  return (
    <article className="mr-3 flex w-full items-center justify-end gap-4 px-2 py-1">
      <Link
        href={`/produkty/${itemInfo.product.slug}`}
        className="mr-auto shrink-0 pt-[6px]"
      >
        <SheetClose>
          <Image
            src={itemInfo.product.picturePath}
            alt={`Fotka pro ${itemInfo.product.name}`}
            height={70}
            width={70}
            priority
            className="size-16 rounded-lg md:size-[70px]"
          />
        </SheetClose>
      </Link>
      <div className="flex grow items-center">
        <div className="flex grow flex-col items-start gap-1">
          <a href={`/produkty/${itemInfo.product.slug}`}>
            <SheetClose>
              <p className="w-[170px] text-start font-semibold tracking-tight hover:underline md:w-[180px]">
                {itemInfo.product.name}
              </p>
            </SheetClose>
          </a>
          <Separator />
          <div className="flex w-full">
            <CartQuantitySelector
              quantity={itemInfo.quantity}
              slug={itemInfo.product.slug}
            />
            <div className="flex grow flex-col tracking-tight">
              <p className="self-end text-xs text-secondary-foreground">
                {itemInfo.product.taxedPrice} Kč / ks
              </p>
              <p className="self-end font-semibold">
                {itemInfo.product.taxedPrice * itemInfo.quantity} Kč
              </p>
            </div>
          </div>
        </div>
        <CartDelete slug={itemInfo.product.slug} />
      </div>
    </article>
  );
};

export default CartItem;
