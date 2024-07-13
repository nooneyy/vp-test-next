"use client";

import { Button } from "@/components/ui/button";
import { productFormAction } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { LoaderCircle, Minus, Plus, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const ProductForm = ({ slug, inStock }: { slug: string; inStock: boolean }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <form className="flex items-center gap-4" action={productFormAction}>
      <QuantitySelector
        quantity={quantity}
        setQuantity={setQuantity}
        disabled={!inStock}
      />
      <AddToCartButton />
      <input type="hidden" name="quantity" value={quantity} />
      <input type="hidden" name="slug" value={slug} />
    </form>
  );
};

const QuantitySelector = ({
  quantity,
  setQuantity,
  disabled,
}: {
  quantity: number;
  setQuantity: (value: number | ((value: number) => number)) => void;
  disabled: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full px-2 py-[6px]",
        disabled ? "bg-[#8B8B8B]" : "bg-primary",
      )}
    >
      <button
        disabled={disabled}
        type="button"
        className="rounded-full p-1 transition-colors"
        onClick={() => {
          if (quantity > 1) {
            setQuantity((q) => (q -= 1));
          }
        }}
        aria-label="Odebrat kus"
      >
        <Minus className="size-5" color="white" />
      </button>
      <p className="w-5 text-center text-white">{quantity}</p>
      <button
        disabled={disabled}
        type="button"
        className="rounded-full p-1 transition-colors"
        onClick={() => setQuantity((q) => (q += 1))}
        aria-label="Přidat kus"
      >
        <Plus className="size-5" color="white" />
      </button>
    </div>
  );
};

const AddToCartButton = () => {
  const status = useFormStatus();
  return (
    <Button
      className={cn("w-fit shrink-0", status.pending && "pointer-events-none")}
    >
      {status.pending ? (
        <LoaderCircle className="size-5 animate-spin" />
      ) : (
        <>
          <ShoppingBasket className="mr-2 size-5" />
          <p>Vložit do košíku</p>
        </>
      )}
    </Button>
  );
};

export default ProductForm;
