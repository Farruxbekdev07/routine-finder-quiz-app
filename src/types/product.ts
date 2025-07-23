type Images = {
  id: number;
  src: string;
  width: number;
  height: number;
  position: number;
  created_at: string;
  updated_at: string;
  product_id: number;
  variant_ids: number[];
};
export interface Product {
  id: string;
  title: string;
  tags: string[];
  body_html: string;
  images: Images[];
  variants: { price: string }[];
}
