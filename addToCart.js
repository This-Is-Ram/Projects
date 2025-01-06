import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currrentProdElem = document.querySelector(`#card${id}`);
  console.log(currrentProdElem);
  let quantity = currrentProdElem.querySelector(".productQuantity").innerText;
  let price = currrentProdElem.querySelector(".productPrice").innerText;
  price = price.replace("₹", "");
  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );
  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);
    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    showToast("add", id);
  }
  if (existingProd) {
    return false;
  }
  quantity = Number(quantity);
  price = price * quantity;
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem(
    "cartProductsLS",
    JSON.stringify(arrLocalStorageProduct)
  );
  updateCartValue(arrLocalStorageProduct);
  //   console.log(quantity, price);
  //   console.log(arrLocalStorageProduct.length);
  showToast("add", id);
};
