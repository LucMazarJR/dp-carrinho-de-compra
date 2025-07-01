import createItem from "./services/item.mjs";
import * as cartService from "./services/cart.mjs";
import promptSync from 'prompt-sync';

const prompt = promptSync();
let myCart = [];
let escolha;

console.log("Carrinho de Compras:");
do{
    console.log("Opções:\n1 - Adicionar item ao carrinho\n2 - Remover item do carrinho\n3 - Ver carrinho\n4 - Visualizar total do carrinho\n5 - Sair");
    escolha = prompt("Escolha uma opção: ");
    switch(escolha) {
        case "1":
            let itemName = prompt("Digite o nome do item: ");
            let itemPrice = parseFloat(prompt("Digite o preço do item: "));
            let itemQuantity = parseInt(prompt("Digite a quantidade do item: "));
            let newItem = await createItem(itemName, itemPrice, itemQuantity);
            cartService.addItem(myCart, newItem);
            break;
        case "2":
            let itemToRemove = prompt("Digite o nome do item a ser removido: ");
            cartService.removeItem(myCart, itemToRemove);
            break;
        case "3":
            cartService.displayCart(myCart);
            break;
        case "4":
            let total = await cartService.calculateTotal(myCart);
            console.log(`Total do carrinho: ${total}`);
            break;
        case "5":
            console.log("Saindo do carrinho de compras...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}while(escolha !== "5");