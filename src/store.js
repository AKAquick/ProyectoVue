// src/store.js
import { reactive, computed } from 'vue';

const products = [
    { id: 1, name: "Corazón de Talavera", price: 350.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+1" },
    { id: 2, name: "Árbol de la Vida", price: 800.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+2" },
    { id: 3, name: "Juego de Alebrijes", price: 550.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+3" },
    { id: 4, name: "Textil Otomí", price: 1200.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+4" },
    { id: 5, name: "Cráneo Huichol", price: 2500.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+5" },
    { id: 6, name: "Jarrón de Barro Negro", price: 450.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+6" },
    { id: 7, name: "Muñeca Lele", price: 250.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+7" },
    { id: 8, name: "Plato de Cerámica", price: 300.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+8" },
    { id: 9, name: "Rebozo de Seda", price: 950.00, image: "https://placehold.co/600x400/E4007C/white?text=Artesan%C3%ADa+9" }
];

export const store = reactive({
    cart: JSON.parse(localStorage.getItem('cart')) || [],

    addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = this.cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.saveCart();
        alert(`${product.name} ha sido agregado al carrito.`);
    },

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
    },

    clearCart() {
        this.cart = [];
        this.saveCart();
    },

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    },

    get cartCount() {
        return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    
    get cartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
});

export { products };
