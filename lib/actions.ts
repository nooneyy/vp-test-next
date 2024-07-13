"use server";

import {
  createCart,
  getCartContents,
  updateCartContents,
} from "@/lib/db/queries";
import { revalidatePath } from "next/cache";

export const productFormAction = async (formData: FormData) => {
  const slug = formData.get("slug")?.toString();
  const quantity = formData.get("quantity")?.toString();

  if (slug && quantity) {
    const parsedQuantity = parseInt(quantity);
    const cartContents = await getCartContents();

    if (cartContents) {
      const cartMap = new Map(cartContents);
      cartMap.set(slug, (cartMap.get(slug) ?? 0) + parsedQuantity);
      await updateCartContents(cartMap);
    } else {
      await createCart(slug, parsedQuantity);
    }
    revalidatePath("/");
  } else {
    throw new Error("Slug and quantity not found while updating cart!");
  }
};

export const cartQuantityAction = async (formData: FormData) => {
  const slug = formData.get("slug")?.toString();
  const action = formData.get("action")?.toString();

  if (slug && action) {
    const cartContents = await getCartContents();

    if (cartContents) {
      const cartMap = new Map(cartContents);
      if (action === "add") {
        cartMap.set(slug, (cartMap.get(slug) ?? 0) + 1);
      } else if (action === "remove") {
        cartMap.set(slug, (cartMap.get(slug) ?? 1) - 1);
      } else {
        throw new Error("Wrong action supplied!");
      }
      await updateCartContents(cartMap);
      revalidatePath("/");
    } else {
      throw new Error("No cart found while updating cart item!");
    }
  } else {
    throw new Error("Slug and action not found while updating cart!");
  }
};

export const cartDeleteAction = async (formData: FormData) => {
  const slug = formData.get("slug")?.toString();

  if (slug) {
    const cartContents = await getCartContents();

    if (cartContents) {
      const cartMap = new Map(cartContents);
      cartMap.delete(slug);
      await updateCartContents(cartMap);
      revalidatePath("/");
    } else {
      throw new Error("No cart found while deleting cart item!");
    }
  } else {
    throw new Error("Slug not found while deleting cart item!");
  }
};
