<template>
  <header class="bg-white shadow-2xl fixed top-0 left-0 right-0 z-1">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <router-link to="/" class="text-2xl font-bold">F1GENZ</router-link>
      <nav class="hidden md:flex space-x-4">
        <router-link to="/">Trang Chủ</router-link>
        <!-- <router-link to="/productslist/face">Mỹ Phẩm</router-link>
        <router-link to="/contact">Liên Hệ</router-link> -->
        <router-link to="/productslist/face">Mỹ Phẩm</router-link>
        <router-link to="/contact">Liên Hệ</router-link>
      </nav>
      <div class="flex items-center space-x-4">
        <SearchBar />
        <router-link to="#">
          <el-badge value="0" class="cursor-pointer text-3xl">
            <el-icon><ShoppingCart /></el-icon>
          </el-badge>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import { ShoppingCart } from "@element-plus/icons-vue";

const cartItemCount = ref(0);
</script>
<style></style>
