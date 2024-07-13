"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { Cart } from "@/lib/db/queries";
import { Context, createContext, useContext, useState } from "react";
import CartItem from "./cart-item";

export const CartSheet = ({ cartData }: { cartData: Cart }) => {
  const [open, setOpen] = useContext(CartContext);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Košík</SheetTitle>
          <SheetDescription hidden>Shrnutí přidaného zboží</SheetDescription>
        </SheetHeader>
        <section className="mt-2 flex flex-col items-center gap-y-5 overflow-y-auto overflow-x-hidden">
          {cartData.contents.length ? (
            cartData.contents.map((cartItem) => (
              <CartItem key={cartItem.product.slug} itemInfo={cartItem} />
            ))
          ) : (
            <p className="py-9 text-center">Košík je prázdný</p>
          )}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export const CartContext: Context<[boolean, (_: boolean) => void]> =
  createContext([false as boolean, (_: boolean) => {}]);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const cartState = useState(false);
  return (
    <>
      <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
    </>
  );
};
