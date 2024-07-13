"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle, Minus, Plus, X } from "lucide-react";
import { useFormStatus } from "react-dom";

interface PlusProps {
  variant: "plus";
  quantity?: never;
}

interface MinusProps {
  variant: "minus";
  quantity: number;
}

export const CartQuantityButton = ({
  variant,
  quantity,
}: PlusProps | MinusProps) => {
  const { pending, data } = useFormStatus();
  if (variant === "plus") {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7"
        aria-label="Přidat kus"
        disabled={pending}
        name="action"
        value="add"
      >
        {pending && data.get("action")?.toString() === "add" ? (
          <LoaderCircle className="size-4 animate-spin" />
        ) : (
          <Plus className="size-5" />
        )}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-7 w-7"
      aria-label="Odebrat kus"
      disabled={pending || quantity === 1}
      name="action"
      value="remove"
    >
      {pending && data.get("action")?.toString() === "remove" ? (
        <LoaderCircle className="size-4 animate-spin" />
      ) : (
        <Minus className="size-5" />
      )}
    </Button>
  );
};

export const CartDeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="outline"
      size="icon"
      className="-ml-3 -mr-3 size-7 shrink-0 md:ml-3 md:size-8"
      disabled={pending}
    >
      {pending ? (
        <LoaderCircle className="size-4 animate-spin" />
      ) : (
        <X className="size-5" />
      )}
    </Button>
  );
};
