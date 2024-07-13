import { cartQuantityAction, cartDeleteAction } from "@/lib/actions";
import {
  CartDeleteButton,
  CartQuantityButton,
} from "@/components/store/layout/header/cart/cart-form/cart-form-button";

export const CartQuantitySelector = ({
  quantity,
  slug,
}: {
  quantity: number;
  slug: string;
}) => {
  return (
    <div className="-ml-2 flex items-center gap-3 rounded-lg px-2 py-1">
      <form action={cartQuantityAction} className="flex items-center gap-2">
        <input type="hidden" name="slug" value={slug} />
        <CartQuantityButton variant="minus" quantity={quantity} />
        <p className="w-5 text-center text-foreground">{quantity}</p>
        <CartQuantityButton variant="plus" />
      </form>
    </div>
  );
};

export const CartDelete = ({ slug }: { slug: string }) => {
  return (
    <form className="self-start" action={cartDeleteAction}>
      <input type="hidden" name="slug" value={slug} />
      <CartDeleteButton />
    </form>
  );
};
