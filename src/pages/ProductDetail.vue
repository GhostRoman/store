<template>
  <div class="product-detail container">
    <h1>Деталі товару</h1>
    
    <div v-if="product">
      <div class="detail-image-container">
        <q-img :src="product.image" :alt="product.name" class="detail-image" />
      </div>

      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Ціна: {{ product.price.toLocaleString('uk-UA') }} грн</p>

      <q-btn color="primary" @click="addToCart">Додати в кошик</q-btn>
    </div>

    <div v-else>
      <p>Товар не знайдено</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const cartStore = useCartStore()

// Пример данных (будет заменено на API)
const products = [
  { id: 1, name: 'Товар 1', price: 12999, image: 'https://content2.rozetka.com.ua/goods/images/big/494749340.jpg', description: 'Опис товару 1' },
  { id: 2, name: 'Товар 2', price: 23999, image: 'https://content2.rozetka.com.ua/goods/images/big/457343320.jpg', description: 'Опис товару 2' },
  { id: 3, name: 'Товар 3', price: 28999, image: 'https://content2.rozetka.com.ua/goods/images/big/16275629.jpg', description: 'Опис товару 3' }
]

// Поиск товара по ID
const product = computed(() => {
  const productId = parseInt(route.params.id, 10)
  return isNaN(productId) ? null : products.find(p => p.id === productId)
})

// Добавление в корзину
const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
  }
}
</script>

<style lang="scss" scoped>
.product-detail {
  padding: 30px 0;
  text-align: center;
}

.detail-image-container {
  max-width: 25%;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.detail-image {
  width: 100%;
  height: auto;
  max-height: 500px;  /* Ограничение максимальной высоты */
  object-fit: contain;
}

@media (max-width: 768px) {
  .detail-image {
    max-height: 300px;  /* Для мобильных устройств ограничиваем максимальную высоту */
  }
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
