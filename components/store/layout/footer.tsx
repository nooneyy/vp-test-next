import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Facebook, Mail, ExternalLink as ExternalLinkIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 border-t-2 border-border/40 p-5 text-sm md:flex-row md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%]">
      <section className="order-3 flex flex-col items-center gap-2 md:order-1">
        <p className="order-3 mt-2 text-[15px] font-semibold tracking-tight md:order-1 md:mt-0">
          © Vinařství Plchut {new Date().getFullYear()}
        </p>
        <Separator className="order-2 mt-1 md:mt-2" />
        <div className="order-1 flex h-8 items-center space-x-4 font-medium md:order-3">
          <InternalLink href="/Publicita-projektu_Plchut.pdf">
            Program rozvoje venkova
          </InternalLink>
          <Separator orientation="vertical" />
          <InternalLink href="/ochrana-osobnich-udaju">
            Ochrana osobních údajů
          </InternalLink>
        </div>
      </section>
      <section className="order-1 flex flex-col items-center gap-2 md:order-2 md:ml-auto">
        <p className="text-[15px] font-semibold tracking-tight">Kontakt</p>
        <Separator className="mt-1" />
        <div className="flex flex-col items-center gap-5 md:gap-2">
          <ExternalLink
            href="https://www.facebook.com/profile.php?id=100057543485202"
            target="_blank"
            rel="external"
            className="mt-2 md:mt-0"
          >
            <Facebook size="20px" />
            Vinařství Plchut
          </ExternalLink>
          <ExternalLink href="mailto:vinarstviplchut@seznam.cz">
            <Mail className="mr-2 size-5" />
            vinarstviplchut@seznam.cz
          </ExternalLink>
          <ExternalLink href="https://vinarstviplchut.cz" target="_blank">
            <ExternalLinkIcon className="mr-2 size-5" />
            vinarstviplchut.cz
          </ExternalLink>
        </div>
      </section>
    </footer>
  );
};

const linkClasses =
  "text-muted-foreground hover:text-foreground hover:underline transition-colors";

const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};

const ExternalLink = ({
  href,
  target,
  rel,
  children,
  className,
}: {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(linkClasses, "flex items-center font-semibold", className)}
    >
      {children}
    </a>
  );
};
