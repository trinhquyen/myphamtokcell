<template>
    <div class="product-detail">
      <h1>Chi tiết sản phẩm</h1>
      <p>ID sản phẩm: {{ id }}</p>
      <router-link to="/products">← Quay lại danh sách</router-link>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const id = route.params.id
  </script>
  
  <style scoped>
  .product-detail {
    margin: 2rem;
  }
  </style>
  