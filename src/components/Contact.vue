// src/components/Contact.vue
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function handleSubmit() {
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    router.push('/');
}
</script>

<template>
    <main class="container my-5">
        <h1 class="text-center mb-4">Contáctanos</h1>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <p class="text-center">¿Tienes alguna pregunta o un pedido especial? Llena el formulario y nos pondremos en contacto contigo.</p>
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Teléfono</label>
                        <input type="tel" class="form-control" id="phone">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-custom w-100">Enviar</button>
                </form>
            </div>
        </div>
    </main>
</template>
