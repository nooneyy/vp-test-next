import { Search, ShoppingBag, User } from "lucide-react";
import HeaderLogo from "@/components/store/layout/header/header-logo";
import HeaderDesktop from "@/components/store/layout/header/header-desktop";
import { ButtonProps } from "@/components/ui/button";
import {
  CartProvider,
  CartSheet,
} from "@/components/store/layout/header/cart/cart";
import { getCart } from "@/lib/db/queries";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

export type Button = {
  content: string;
  icon: React.ReactNode;
  variant: NonNullable<ButtonProps["variant"]>;
};

const buttons: Button[] = [
  {
    content: "Obchod",
    icon: <ShoppingBag className="mr-2 size-5" />,
    variant: "ghost",
  },
  {
    content: "Hledat",
    icon: <Search className="mr-2 size-5" />,
    variant: "outline",
  },
  {
    content: "Účet",
    icon: <User className="mr-2 size-5" />,
    variant: "outline",
  },
];

const Header = () => {
  return (
    <header className="flex items-center gap-12 border-b-2 border-border/40 p-3 md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%]">
      <HeaderLogo className="-mr-[5.5rem] ml-auto md:-mr-0 md:ml-0" />
      <CartProvider>
        <HeaderDesktop buttons={buttons} />
        <Suspense fallback={null}>
          <CartWithData />
        </Suspense>
      </CartProvider>
    </header>
  );
};

const CartWithData = async () => {
  unstable_noStore();
  const cartData = await getCart();
  return <CartSheet cartData={cartData} />;
};

export default Header;
