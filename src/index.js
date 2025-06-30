import createItem from "./services/item.mjs";

const cart = [];

const item1 = await createItem("Produto 1", 20.99, 1);
const item2 = await createItem("Produto 2", 15.99, 3);

console.log(item2.subtotal());