import procucts from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
let cartProducts = getCartProductFromLS();
const filterProducts = procucts.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;
    let procuctClone = document.importNode(templateContainer.content, true);
    let lSActualData = fetchQuantityFromCartLS(id, price);
    procuctClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    procuctClone.querySelector(".category").textContent = category;
    procuctClone.querySelector(".productImage").src = image;
    procuctClone.querySelector(".productImage").alt = name;
    procuctClone.querySelector(".productName").textContent = name;
    procuctClone.querySelector(".productPrice").textContent =
      lSActualData.price;
    procuctClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;

    procuctClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    procuctClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    cartElement.appendChild(procuctClone);
  });
};

showCartProduct();

updateCartProductTotal();
