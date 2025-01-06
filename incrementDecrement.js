import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const curentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = curentCardElement.querySelector(".productQuantity");
  const productPrice = curentCardElement.querySelector(".productPrice");
  let quantity = 1;
  let localStoragePrice = 0;
  // geting data from ls
  let localCartProducts = getCartProductFromLS();
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);
  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = quantity * price;
    }
  }
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;

  let updatedCart = { id, quantity, price: localStoragePrice };
  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });
  console.log(updatedCart);
  localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice.toFixed(2);
  updateCartProductTotal();
};
