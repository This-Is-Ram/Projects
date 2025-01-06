import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal = () => {
  let ProductSubTotal = document.querySelector(".productSubTotal");
  let ProductFinalTotal = document.querySelector(".productFinalTotal");
  let localCartProducts = getCartProductFromLS();
  let initialValue = 0;
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);
  console.log(totalProductPrice);

  ProductSubTotal.textContent = `₹${totalProductPrice}`;
  ProductFinalTotal.textContent = `₹${totalProductPrice + 50}`;
};
