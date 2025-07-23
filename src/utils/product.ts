import type { Product } from "../types/product";
import type { ANSWER_PROPS } from "../types/answer";

export const FILTER_PRODUCTS = (
  products: Product[],
  answers: ANSWER_PROPS[],
  wishlist: Product[]
) => {
  const keywords = answers.map((a) => a.answer.toLowerCase());

  // 1. Filtrlash
  const filtered = products.filter((product) => {
    const text = `${product.title} ${product.body_html} ${product.tags.join(
      " "
    )}`.toLowerCase();

    return keywords.some((key) => text.includes(key));
  });

  // 2. Wishlistda borlarini oldinga olish
  const sorted = filtered.sort((a, b) => {
    const aLiked = wishlist.some((item) => item.id === a.id);
    const bLiked = wishlist.some((item) => item.id === b.id);

    // `true` > `false`, shuning uchun `b - a`
    return Number(bLiked) - Number(aLiked);
  });

  return sorted;
};
