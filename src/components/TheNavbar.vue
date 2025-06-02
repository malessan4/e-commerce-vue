<template>
    <nav>
        <router-link to="/">Productos</router-link>
        <router-link to="/cart">
            🛒 Carrito ({{ cartStore.totalItems }})
        </router-link>
    </nav>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
</script>