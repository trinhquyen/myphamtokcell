<template>
  <div class="container mx-auto px-4 py-8 mt-[64px]">
    <!-- <router-link to="/" class="mr-2 hover:text-blue-700">Trang Chủ</router-link>
    /
    <router-link to="/contact" class="ml-2 text-[#ecba71]"
      >Giới thiệu</router-link
    ><br /><br /><br /> -->
    <h1 class="text-2xl font-semibold mb-4">{{ categoryName }}</h1>
    <div class="flex gap-6">
      <aside class="w-64 hidden md:block">
        <!-- Bộ lọc: giá, thương hiệu, v.v. -->
        <div class="mb-4">
          <!-- <h4 class="font-semibold mb-2">Khoảng giá</h4> -->
          <!-- Các checkbox/range filter -->
        </div>
      </aside>
      <div class="flex-1">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <ProductCard v-for="p in products" :key="p.id" :product="p" />
        </div>
        <div class="mt-6 flex justify-center">
          <el-pagination
            background
            :page-size="pageSize"
            :current-page="currentPage"
            :total="total"
            @current-change="onPageChange"
            layout="prev, pager, next,->"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { specialProducts } from "@/mockdata/home.js";
import ProductCard from "@/components/ProductCard.vue";
// import { fetchProductsByCategory } from "@/api/productApi";
// import Breadcrumb from "@/components/Breadcrumb.vue";

const route = useRoute();

const categoryName = ref("");
const products = ref([]);
const currentPage = ref(1);
const pageSize = 12;
const total = ref(0);

const breadcrumbItems = ref([]); // cấu hình tùy theo phân cấp danh mục

async function load() {
  const id = route.params.id as string;
  products.value = specialProducts;
  total.value = 50;
  categoryName.value = "Mỹ phẩm";
  //   breadcrumbItems.value = resp.breadcrumb;
}

watch(
  () => route.params.id,
  () => {
    currentPage.value = 1;
    load();
  }
);

function onPageChange(page: number) {
  currentPage.value = page;
  load();
}

onMounted(() => {
  load();
});
</script>
