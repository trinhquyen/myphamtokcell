<template>
  <div class="max-w-6xl mx-auto px-4 py-8 mt-[92px]">
    <router-link to="/" class="mr-2 hover:text-[#409eff]"
      ><span class="text-xl font-semibold mb-4">Trang Chủ</span></router-link
    >
    /
    <router-link
      :to="`/product/${route.params.id}`"
      class="ml-2 text-[#ecba71] hover:text-[#eb961a]"
      ><span class="text-xl font-semibold mb-4">Details</span></router-link
    ><br /><br />
    <div class="grid md:grid-cols-2">
      <ProductGallery :product="product" class="" />
      <ProductInfo :product="product" :sizes="['57g', '170g', '1g']" />
    </div>
    <Description :product="product" />
  </div>
</template>

<script setup lang="ts">
import ProductGallery from "@/components/ProductGallery.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import { useRoute } from "vue-router";
import { specialProducts } from "@/mockdata/home.js";
import { ref, onMounted, watch } from "vue";
import Description from "@/components/Description.vue";

const route = useRoute();
const product = ref({});
const id = route.params.id as string;

onMounted(() => {
  product.value = specialProducts[id] ?? null;
});

watch(
  () => route.params.id,
  () => {
    product.value = specialProducts[route.params.id];
    {
      deep: true;
    }
  }
);
</script>
