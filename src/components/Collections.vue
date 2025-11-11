<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
    <!-- Left side: Collection info -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="../../public/prd_1.jpg"
        alt="collections"
        class="w-full h-auto max-h-[416px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-2xl font-bold uppercase">
          WHEN IN {{ collections[0].madein }}
        </h2>
        <p class="italic text-gray-500 text-sm mb-2 uppercase">
          NEW COLLECTION | WHEN IN {{ collections[0].madein }}
        </p>
        <p class="text-gray-700 text-sm">
          {{ collections[0].desc }}
        </p>
        <a
          href="#"
          class="text-sm text-orange-500 font-semibold mt-2 inline-block"
          >Xem tất cả</a
        >
      </div>
    </div>

    <!-- Right side: Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "./ProductCard.vue";
import { collections } from "@/mockdata/collections.js";

const products = ref([]);

onMounted(async () => {
  products.value = collections;
});
</script>
