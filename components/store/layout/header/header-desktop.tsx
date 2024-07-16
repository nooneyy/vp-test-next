import { Button } from "@/components/ui/button";
import { type Button as ButtonProps } from "@/components/store/layout/header/header";
import { Separator } from "@/components/ui/separator";
import { DesktopCartTrigger } from "@/components/store/layout/header/cart/cart-triggers";
import { getCart } from "@/lib/db/queries";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import { LoaderCircle, ShoppingBasket } from "lucide-react";

export const HeaderDesktop = ({ buttons }: { buttons: ButtonProps[] }) => {
  return (
    <>
      <Button variant={buttons[0].variant} className="font-semibold">
        {buttons[0].icon}
        {buttons[0].content}
      </Button>
      <div className="ml-auto hidden items-center gap-6 md:flex">
        <Button variant={buttons[1].variant} className="font-medium">
          {buttons[1].icon}
          {buttons[1].content}
        </Button>
        <Separator orientation="vertical" className="h-8" />
        <div className="flex items-center gap-4">
          <Button variant={buttons[2].variant} className="font-medium">
            {buttons[2].icon}
            {buttons[2].content}
          </Button>
          <Suspense fallback={<CartButtonFallback />}>
            <CartButtonWithData />
          </Suspense>
        </div>
      </div>
    </>
  );
};

const CartButtonWithData = async () => {
  unstable_noStore();
  const cartData = await getCart();
  return <DesktopCartTrigger cartData={cartData} />;
};

const CartButtonFallback = () => {
  return (
    <Button className="font-medium">
      <ShoppingBasket className="mr-2 size-5" />
      <LoaderCircle className="mx-[26.445px] size-5 animate-spin" />
    </Button>
  );
};

export default HeaderDesktop;
