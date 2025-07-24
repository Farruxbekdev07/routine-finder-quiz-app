import type { Product } from "../types/product";
import type { ANSWER_PROPS } from "../types/answer";

export const FILTER_PRODUCTS = (
  products: Product[],
  answers: ANSWER_PROPS[],
  wishlist: Product[]
) => {
  const keywords = answers.map((a) => a.answer.toLowerCase());

  const filtered = products.filter((product) => {
    const text = `${product.title} ${product.body_html} ${product.tags.join(
      " "
    )}`.toLowerCase();

    return keywords.some((key) => text.includes(key));
  });

  const sorted = filtered.sort((a, b) => {
    const aLiked = wishlist.some((item) => item.id === a.id);
    const bLiked = wishlist.some((item) => item.id === b.id);

    return Number(bLiked) - Number(aLiked);
  });

  return sorted;
};
