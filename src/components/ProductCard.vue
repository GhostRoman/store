<template>
  <q-card class="product-card shadow-3">
    <router-link :to="`/product/${product.id}`" class="product-link">
      <q-img 
        :src="product.image || defaultImage" 
        :ratio="16/9"
        class="product-image"
        spinner-color="primary"
      >
        <template v-slot:loading>
          <q-spinner-gears color="primary" />
        </template>
      </q-img>
    </router-link>

    <q-card-section class="product-info">
      <div class="product-title text-subtitle1">{{ product.name }}</div>
      <div class="product-price text-h6 text-primary">{{ formattedPrice }} ₴</div>
      
      <div class="product-actions q-mt-md">
        <q-btn 
          color="primary" 
          class="full-width"
          label="Купить"
          icon="add_shopping_cart"
          @click="addToCart"
        />
      </div>
    </q-card-section>

    <q-badge v-if="product.discount" color="red" class="discount-badge">
      -{{ product.discount }}%
    </q-badge>
  </q-card>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

// Заглушка на случай отсутствия изображения
const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image'

// Безопасное форматирование цены
const formattedPrice = computed(() => {
  return props.product.price ? props.product.price.toLocaleString('uk-UA') : '0'
})

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.product-link {
  text-decoration: none;
  color: inherit;
}

.product-image {
  border-radius: 8px 8px 0 0;
}

.product-info {
  padding: 16px;
}

.product-title {
  height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  margin: 12px 0;
  font-weight: 700;
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
}
</style>
