// src/App.vue
<script setup>
import { computed } from 'vue';
import { store } from './store';

const cartCount = computed(() => store.cartCount);
</script>

<template>
    <div class="top-banner"></div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #E4007C;">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">ArteMisa</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><router-link class="nav-link" to="/">Inicio</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/ubicacion">Ubicación</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/contacto">Contacto</router-link></li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/carrito">
                            Carrito <span class="badge bg-secondary">{{ cartCount }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <router-view></router-view>

    <footer class="text-center mt-5 py-3 bg-light">
        <p>&copy; 2025 ArteMisa. Todos los derechos reservados.</p>
    </footer>
</template>

<style>
.router-link-active {
    font-weight: bold;
}
</style>
