import { defineStore } from 'pinia'

// Определяем хранилище для корзины
export const useCartStore = defineStore('cart', {
  // Состояние корзины
  state: () => ({
    items: []  // Массив для хранения товаров в корзине
  }),

  // Действия для добавления и удаления товаров из корзины
  actions: {
    // Добавить товар в корзину
    addToCart(product) {
      // Проверяем, есть ли уже товар в корзине
      const existingItem = this.items.find(item => item.id === product.id)
      
      // Если товар уже есть, увеличиваем его количество
      if (existingItem) {
        existingItem.quantity++
      } else {
        // Если товара нет, добавляем его с количеством 1
        this.items.push({ ...product, quantity: 1 })
      }
    },
    
    // Удалить товар из корзины по ID
    removeFromCart(productId) {
      // Фильтруем массив и оставляем только те товары, ID которых не совпадает с переданным
      this.items = this.items.filter(item => item.id !== productId)
    }
  },

  // Геттер для подсчета общего количества товаров в корзине
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0)
  }
})
