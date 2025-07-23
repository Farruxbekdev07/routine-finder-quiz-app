const url = import.meta.env.VITE_BACKEND_URL;

export const FETCH_PRODUCTS = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.products;
};
