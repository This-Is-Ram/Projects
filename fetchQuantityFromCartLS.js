import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCartProductFromLS();
  let existingProd = cartProducts.find((carProd) => carProd.id === id);
  let quantity = 1;
  if (existingProd) {
    quantity = existingProd.quantity;
    price = existingProd.price;
  }
  return { quantity, price };
};
