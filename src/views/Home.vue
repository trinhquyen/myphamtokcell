<template>
  <div>
    <!-- Banner / Slider -->
    <div class="relative lg:h-[100vh] md:h-96 bg-gray-200 mt-[64px]">
      <img
        src="../assets/images/banner.webp"
        alt="Banner"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-opacity-30 text-shadow-[2.5px_5px_5px_#3498db] flex items-center justify-center"
      >
        <h1 class="text-white text-4xl md:text-6xl font-bold">F1GENZ Beauty</h1>
      </div>
      <div class="absolute bottom-[5%] left-[50%] translate-x-[-50%]">
        <img
          src="../assets/images/scroll.webp"
          alt="Scroll Down"
          class="max-h-[5vw] max-w-full h-auto"
        />
      </div>
    </div>

    <section class="container mx-auto px-4 py-8">
      <h2
        class="text-4xl text-[#ecba71] font-[Licorice] mb-2 font-semibold text-center"
      >
        Mỹ phẩm
      </h2>
      <h2 class="text-2xl font-semibold mb-4 text-center">Sản phẩm nổi bật</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard v-for="p in featuredProducts" :key="p.id" :product="p" />
      </div>
    </section>
    <!-- Category -->
    <Category />

    <section class="container mx-auto px-4 py-8">
      <h2
        class="text-4xl text-[#ecba71] font-[Licorice] mb-2 font-semibold text-center"
      >
        Làm đẹp
      </h2>
      <h2 class="text-2xl font-semibold mb-4 text-center">F1 COLLECTIONS</h2>
      <!-- Collections -->
      <Collections />
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import Category from "@/components/Category.vue";
import Collections from "@/components/Collections.vue";
import { specialProducts } from "@/mockdata/home.js";

const featuredProducts = ref([]);

onMounted(async () => {
  featuredProducts.value = specialProducts;
});
</script>
