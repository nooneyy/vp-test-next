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
    <main className="-mt-10 flex h-screen flex-col items-center justify-center gap-8 lg:flex-row lg:gap-24">
      <Image
        src={errorImg}
        alt="Error"
        className="pointer-events-none select-none px-4 lg:px-0"
        height={320}
        width={240}
        priority
      />
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <p className="text-center text-5xl font-bold lg:text-start lg:text-7xl">
          Stránka nenalezena
        </p>
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "text-lg font-semibold",
          )}
          href="/"
        >
          <CornerDownRight className="mr-2 size-6" />
          Vrátit se na domovskou stránku
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
