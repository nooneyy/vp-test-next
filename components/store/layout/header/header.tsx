import { Search, ShoppingBag, ShoppingBasket, User } from "lucide-react";
import HeaderLogo from "@/components/store/layout/header/header-logo";
import HeaderDesktop from "@/components/store/layout/header/header-desktop";
import { ButtonProps } from "@/components/ui/button";

export type Button = {
  content: string;
  icon: React.ReactNode;
  variant: NonNullable<ButtonProps["variant"]>;
};

const buttons: Button[] = [
  {
    content: "Obchod",
    icon: <ShoppingBag className="size-5 mr-2" />,
    variant: "ghost",
  },
  {
    content: "Hledat",
    icon: <Search className="size-5 mr-2" />,
    variant: "outline",
  },
  {
    content: "Účet",
    icon: <User className="size-5 mr-2" />,
    variant: "outline",
  },
  {
    content: "Košík",
    icon: <ShoppingBasket className="size-5 mr-2" />,
    variant: "default",
  },
];

const Header = () => {
  return (
    <header className="flex items-center p-3 gap-12 md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%] border-b-2 border-border/40">
      <HeaderLogo className="ml-auto -mr-[5.5rem] md:-mr-0 md:ml-0" />
      <HeaderDesktop buttons={buttons} />
    </header>
  );
};

export default Header;
