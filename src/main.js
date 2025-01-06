import "./style.css";

import products from "../api/products.json";
import { showProductContainer } from "../homeProductCards";
// console.log(products);
// let { brand, category, description, id, image, name, price, stock } = products;
// calling a function to show card values etc..
showProductContainer(products);
