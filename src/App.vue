<template>
  <q-layout class="layout">
    <q-header elevated class="header">
      <q-toolbar>
        <q-toolbar-title>
          <img 
            src="https://content.rozetka.com.ua/mb_logo/image_site_light_theme/original/345645615.svg" 
            alt="Logo" 
            style="height: 40px"
          >
        </q-toolbar-title>

        <!-- Кнопка корзины -->
        <q-btn flat round icon="shopping_cart" @click="isCartOpen = true">
          <q-badge v-if="cartStore.totalItems > 0" color="red" floating :label="cartStore.totalItems" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Попап корзины, передача состояния через v-model -->
    <CartPopup v-model="isCartOpen" />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import CartPopup from '@/components/CartPopup.vue'

const cartStore = useCartStore()
const isCartOpen = ref(false)
</script>

<style lang="scss">
.layout {
  background-color: $accent;
}
</style>
