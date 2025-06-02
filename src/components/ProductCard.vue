<template>
    <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>${{ product.price }}</p>
    <button @click="addToCart">Añadir al carrito</button>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';

  // Props: Recibe los datos del producto desde el componente padre (ej: ProductsView.vue)
const props = defineProps({
    product: {
    type: Object,
    required: true,
    },
});

const cartStore = useCartStore();

const addToCart = () => {
    cartStore.addToCart(props.product); // Llama a la acción de Pinia
};
</script>

<style scoped>
.product-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
}
</style>