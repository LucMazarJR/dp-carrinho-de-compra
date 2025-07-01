//Adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//Tirar o item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    } 
}

//Calcular o valor total do carrinho
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

async function displayCart(userCart) {
    console.log("\nItens no carrinho de Compras:");
    userCart.forEach((item, i) => {
        console.log(`Item ${i + 1}: ${item.name}, Preço: ${item.price}, Quantidade: ${item.quantity}, Subtotal: ${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    displayCart,
    calculateTotal
}