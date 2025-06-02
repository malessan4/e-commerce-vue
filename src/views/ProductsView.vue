<template>
    <div>
        <h1>Productos</h1>
        <div v-if="loading">Cargando...</div>
        <div v-else class="row"> <!-- Usa Bootstrap (o cambia a tu sistema de grilla) -->
            <div v-for="product in products" :key="product._id" class="col-md-4 mb-4">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getProducts } from '@/services/api';
import ProductCard from '@/components/ProductCard.vue';

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await getProducts();
        products.value = response.data;
    } catch (error) {
        console.error("Error cargando productos:", error);
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
/* Opcional: Si no usas Bootstrap, define tus estilos aquí */
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.col-md-4 {
    flex: 0 0 calc(33.333% - 1rem);
}
</style>