<template>
    <div>
        <h2>Tu Carrito ({{ cartStore.totalItems }} items)</h2>
        <div v-if="cartStore.items.length === 0">El carrito está vacío.</div>
        <ul v-else>
            <li v-for="item in cartStore.items" :key="item._id">
                {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
                <button @click="cartStore.removeFromCart(item._id)">🗑️</button>
                <input type="number" v-model.number="item.quantity" min="1"
                    @change="cartStore.updateQuantity(item._id, item.quantity)">
            </li>
        </ul>
        <p>Total: ${{ cartStore.totalPrice }}</p>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
</script>