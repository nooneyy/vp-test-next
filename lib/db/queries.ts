import "server-only";
import { db } from "@/lib/db/client";
import { carts, products } from "@/lib/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { cookies } from "next/headers";
import { cache } from "react";
import { randomUUID } from "crypto";

export const getNewestProducts = () =>
  db.query.products.findMany({
    columns: {
      name: true,
      taxedPrice: true,
      slug: true,
      picturePath: true,
      firstBadge: true,
    },
    where: (products, { eq }) => eq(products.visible, true),
    orderBy: (products, { desc }) => [
      desc(products.createdAt),
      desc(products.id),
    ],
    limit: 4,
  });

export const getMostPopularProducts = () =>
  db.query.products.findMany({
    columns: {
      name: true,
      taxedPrice: true,
      slug: true,
      picturePath: true,
      firstBadge: true,
    },
    where: (products, { eq }) => eq(products.visible, true),
    orderBy: (products, { desc }) => [desc(products.sales)],
    limit: 4,
  });

export const getProductInfo = cache(async (slug: string) => {
  return await db.query.products.findFirst({
    columns: { id: false, createdAt: false, visible: false, sales: false },
    where: (products, { eq }) =>
      and(eq(products.slug, slug), eq(products.visible, true)),
  });
});

export const getRelatedProducts = (slug: string, badge: string) =>
  db.query.products.findMany({
    where: (products, { eq, and, ne }) =>
      and(ne(products.slug, slug), eq(products.visible, true)),
    orderBy: (products) =>
      sql`CASE WHEN ${products.firstBadge} = ${badge} THEN 0 ELSE 1 END, id DESC`,
    limit: 4,
  });

export type CartProduct = {
  quantity: number;
  product: Pick<
    typeof products.$inferSelect,
    "inStock" | "slug" | "taxedPrice" | "price" | "picturePath" | "name"
  >;
};

export type Cart = {
  totalUntaxedPrice: number;
  totalPrice: number;
  totalQuantity: number;
  contents: CartProduct[];
};

const getCartItem = (slug: string) =>
  db.query.products.findFirst({
    columns: {
      name: true,
      inStock: true,
      picturePath: true,
      slug: true,
      taxedPrice: true,
      price: true,
    },
    where: (products, { eq }) => eq(products.slug, slug),
  });

export const getCart = cache(async () => {
  const cart: Cart = {
    totalUntaxedPrice: 0,
    totalPrice: 0,
    totalQuantity: 0,
    contents: [],
  };
  const cookieStore = cookies();
  const cartCookie = cookieStore.get("cart");

  if (!cartCookie) {
    return cart;
  }

  const cartQuery = await db.query.carts.findFirst({
    columns: { contents: true },
    where: (carts, { eq }) => eq(carts.id, cartCookie.value),
  });

  if (!cartQuery) {
    cookies().delete("cart");
    return cart;
  }

  for (const [slug, quantity] of cartQuery.contents) {
    const productQuery = await getCartItem(slug);
    if (productQuery) {
      cart.totalPrice += productQuery.taxedPrice * quantity;
      cart.totalUntaxedPrice += productQuery.price * quantity;
      cart.totalQuantity += quantity;
      cart.contents.push({ quantity, product: productQuery });
    }
  }
  return cart;
});

export const getCartContents = async () => {
  const cookieStore = cookies();
  const cartCookie = cookieStore.get("cart");
  if (cartCookie) {
    const cartQuery = await db.query.carts.findFirst({
      columns: { contents: true },
      where: (carts, { eq }) => eq(carts.id, cartCookie.value),
    });
    if (cartQuery) {
      return cartQuery.contents;
    }
  }
};

export const updateCartContents = async (cartMap: Map<string, number>) => {
  const cartCookie = cookies().get("cart");
  if (cartCookie) {
    await db
      .update(carts)
      .set({
        modifiedAt: sql`CURRENT_TIMESTAMP`,
        contents: Array.from(cartMap.entries()),
      })
      .where(eq(carts.id, cartCookie.value));
  } else throw new Error("Cookie disappeared while updating cart!");
};

export const createCart = async (slug: string, quantity: number) => {
  const uuid = randomUUID();

  const result = await db.insert(carts).values({
    id: uuid,
    contents: [[slug, quantity]],
  });

  if (result.rowsAffected > 0) {
    cookies().set("cart", uuid, {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 5,
      secure: true,
      httpOnly: true,
      sameSite: "strict",
    });
  }
};
