"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/components/store/layout/header/cart/cart";

export const DesktopCartTrigger = ({
  cartData,
}: {
  cartData: { totalPrice: number; totalQuantity: number };
}) => {
  const [_, setCartOpen] = useContext(CartContext);
  return (
    <Button className="font-medium" onClick={() => setCartOpen(true)}>
      <ShoppingBasket className="mr-2 size-5" />
      {`${cartData.totalPrice} Kč • ${cartData.totalQuantity} ks`}
    </Button>
  );
};
