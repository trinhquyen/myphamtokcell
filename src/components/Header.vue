<template>
    <header class="header">
      <h2 class="logo">MyPhamTokCell</h2>
      <nav>
        <router-link to="/">Trang chủ</router-link>
        <router-link to="/products">Sản phẩm</router-link>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffdee9;
    border-bottom: 1px solid #ddd;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  nav a {
    margin-left: 1rem;
    text-decoration: none;
    color: #333;
  }
  nav a.router-link-active {
    font-weight: bold;
    color: #d63384;
  }
  </style>
  