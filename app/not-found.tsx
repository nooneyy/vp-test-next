import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import errorImg from "@/lib/assets/error.webp";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CornerDownRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Error | Vinařství Plchut",
};

const NotFound = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 h-screen -mt-10">
      <Image
        src={errorImg}
        alt="Error"
        className="pointer-events-none"
        height={320}
        width={240}
      />
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <p className="text-5xl lg:text-7xl font-bold text-center lg:text-start">
          Stránka nenalezena
        </p>
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "text-lg font-semibold",
          )}
          href="/"
        >
          <CornerDownRight className="size-6 mr-2" />
          Vrátit se na domovskou stránku
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
