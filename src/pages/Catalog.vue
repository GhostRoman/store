<template>
  <div class="container">
    <h1 class="text-h4 q-mb-lg">Популярні товари</h1>
    
    <div v-if="products.length > 0" class="row q-col-gutter-md">
      <div 
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>

    <div v-else class="text-h6 text-grey text-center q-mt-md">
      Товари не знайдені
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

// Данные товаров (можно заменить на API-запрос в будущем)
const products = ref([
  {
    id: 1,
    name: 'Смартфон Xiaomi Redmi Note 12 Pro 8/256GB',
    price: 12999,
    image: 'https://content2.rozetka.com.ua/goods/images/big/494756319.jpg',
    discount: 10
  },
  {
    id: 2,
    name: 'Ноутбук ASUS Vivobook 15 F1500EA-EX348',
    price: 23999,
    image: 'https://content2.rozetka.com.ua/goods/images/big/457343316.jpg',
    discount: 5
  },
  {
    id: 3,
    name: 'Фотоапарат Canon EOS 250D Kit',
    price: 28999,
    image: 'https://content.rozetka.com.ua/goods/images/big/16275684.jpg'
  },
])
</script>
