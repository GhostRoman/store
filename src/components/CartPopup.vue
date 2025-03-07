<template>
    <q-dialog v-model="isCartOpen">
      <q-card>
        <q-card-section>
          <div class="text-h6">Корзина</div>
        </q-card-section>
        <q-card-section>
          <div v-if="cartItems.length === 0">Корзина пуста</div>
          <div v-else>
            <q-list>
              <q-item v-for="item in cartItems" :key="item.id">
                <q-item-section>
                  <q-item-label>{{ item.name }}</q-item-label>
                  <q-item-label caption>{{ item.price }} грн x {{ item.quantity }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn icon="delete" @click="removeFromCart(item.id)" />
                </q-item-section>
              </q-item>
            </q-list>
            <div class="text-h6">Итого: {{ totalPrice }} грн</div>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Закрыть" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue'
  import { useCartStore } from '../stores/cart'
  
  const cartStore = useCartStore()
  
  const cartItems = computed(() => cartStore.items)
  const totalPrice = computed(() => cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0))
  
  const isCartOpen = ref(false)
  
  const removeFromCart = (productId) => {
    cartStore.removeFromCart(productId)
  }
  </script>