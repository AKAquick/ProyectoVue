// src/components/Home.vue
<script setup>
import { store, products } from '../store';

function formatCurrency(value) {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
}
</script>

<template>
    <header class="container text-center my-5">
        <h1>Bienvenido a ArteMisa</h1>
        <p class="lead">Donde cada pieza cuenta una historia. Descubre la belleza de la artesanía mexicana.</p>
    </header>

    <main class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="product in products" :key="product.id">
                <div class="card h-100 product-card">
                    <img :src="product.image" class="card-img-top" :alt="product.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ formatCurrency(product.price) }}</p>
                        <button class="btn btn-custom" @click="store.addToCart(product.id)">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
