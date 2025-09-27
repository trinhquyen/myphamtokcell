<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #fff;
}
.main-content {
  min-height: 80vh;
  padding: 1rem 2rem;
}
</style>
