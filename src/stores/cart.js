import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cart')) || [], // Carga inicial desde localStorage
    }),
    getters: {
        totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
        totalPrice: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
    },
    actions: {
        addToCart(product) {
            const existingItem = this.items.find(item => item._id === product._id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
            this.saveToLocalStorage(); // Guarda en localStorage después de modificar
        },
        removeFromCart(productId) {
            this.items = this.items.filter(item => item._id !== productId);
            this.saveToLocalStorage(); // Guarda en localStorage después de modificar
        },
        updateQuantity(productId, newQuantity) {
            const item = this.items.find(item => item._id === productId);
            if (item) {
                item.quantity = newQuantity;
                this.saveToLocalStorage(); // Guarda en localStorage después de modificar
            }
        },
        // 👇 Nueva acción para guardar en localStorage
        saveToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.items));
        },
    },
});