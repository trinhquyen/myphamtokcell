<template>
    <div class="product-list">
      <h1>Danh sách sản phẩm</h1>
      <div class="grid">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="`/products/${product.id}`"
          class="card"
        >
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }} đ</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const products = ref([
    { id: 1, name: 'Son môi', price: 200000 },
    { id: 2, name: 'Kem dưỡng da', price: 350000 },
    { id: 3, name: 'Sữa rửa mặt', price: 150000 },
  ])
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
  .card {
    padding: 1rem;
    border: 1px solid #ccc;
    text-align: center;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
  }
  .card:hover {
    background-color: #f9f9f9;
  }
  </style>
  