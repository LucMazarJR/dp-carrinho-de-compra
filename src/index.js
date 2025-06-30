import createItem from "./services/item.mjs";
import * as cartService from "./services/cart.mjs";

const myCart = [];

const item1 = await createItem("Produto 1", 20.99, 1);
const item2 = await createItem("Produto 2", 15.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

const total = await cartService.calculateTotal(myCart);
console.log("Total do carrinho: " + total);