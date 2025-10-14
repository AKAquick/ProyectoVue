// src/components/Cart.vue
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const router = useRouter();
const cart = computed(() => store.cart);
const subtotal = computed(() => store.cartTotal);
const shippingCost = 150; // Costo de envío fijo
const iva = computed(() => subtotal.value * 0.16);
const discount = 0; // Sin descuento por ahora

const total = computed(() => subtotal.value + iva.value + shippingCost - discount);


function formatCurrency(value) {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
}

function handleCheckout() {
    alert('¡Gracias por tu compra! Tu pedido ha sido procesado.');
    store.clearCart();
    router.push('/');
}
</script>

<template>
    <main class="container my-5">
        <h1 class="text-center mb-4">Carrito de Compras</h1>
        <div v-if="cart.length > 0">
            <div class="card mb-3" v-for="item in cart" :key="item.id">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img :src="item.image" class="img-fluid rounded-start" :alt="item.name">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">Cantidad: {{ item.quantity }}</p>
                            <p class="card-text"><small class="text-muted">Precio: {{ formatCurrency(item.price) }}</small></p>
                            <button class="btn btn-danger btn-sm" @click="store.removeFromCart(item.id)">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-end">
                <div class="col-md-4">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Subtotal
                            <span>{{ formatCurrency(subtotal) }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Costo de Envío
                            <span>{{ formatCurrency(shippingCost) }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            IVA (16%)
                            <span>{{ formatCurrency(iva) }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
                            Total
                            <span>{{ formatCurrency(total) }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <h2 class="my-4">Información de Envío y Pago</h2>
            <form @submit.prevent="handleCheckout">
                <div class="row">
                    <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Dirección" required></div>
                    <div class="col-md-4 mb-3"><input type="text" class="form-control" placeholder="Ciudad" required></div>
                    <div class="col-md-2 mb-3"><input type="text" class="form-control" placeholder="C.P." required></div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Nombre en la Tarjeta" required></div>
                    <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Número de Tarjeta" required></div>
                </div>
                <button type="submit" class="btn btn-custom w-100 mt-3">Realizar Pago</button>
            </form>
        </div>
        <div v-else>
            <p class="text-center">Tu carrito está vacío.</p>
        </div>
    </main>
</template>
