const cartList = document.getElementById('cart-list');
const clearCartButton = document.getElementById('clear-cart');
const buyCard = document.querySelector('.buy-card');

let cartItems = [];

// Función para agregar un producto al carrito
function addToCart(name, price) {
    cartItems.push({ name, price });
    renderCart();
}

// Función para renderizar el carrito
function renderCart() {
    cartList.innerHTML = ''; // Limpiar la lista actual
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} `;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    // Mostrar el carrito si hay elementos
    buyCard.classList.toggle('visible', cartItems.length > 0);
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}

// Función para vaciar el carrito
clearCartButton.onclick = () => {
    cartItems = [];
    renderCart();
};

// Agregar evento a los botones de "Agregar al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        addToCart(name, price);
    });
});