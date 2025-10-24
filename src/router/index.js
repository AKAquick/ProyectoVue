// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Location from '../components/Location.vue';
import Contact from '../components/Contact.vue';
import Cart from '../components/Cart.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ubicacion', name: 'Location', component: Location },
    { path: '/contacto', name: 'Contact', component: Contact },
    { path: '/carrito', name: 'Cart', component: Cart },
];

const router = createRouter({
    history: createWebHistory('/ProyectoVue/'),
    routes,
});

export default router;
