import Image from "next/image";
import Link from "next/link";
import logo from "@/lib/assets/logo.svg";
import { cn } from "@/lib/utils";

const HeaderLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "shrink-0 justify-self-center md:justify-self-auto",
        className,
      )}
    >
      <Image src={logo} alt="Vinařství Plchut" width={72} priority />
    </Link>
  );
};

export default HeaderLogo;
