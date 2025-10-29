<template>
  <div class="container mx-auto px-4 py-8">
    <!-- <Breadcrumb :items="breadcrumbItems" /> -->
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <img :src="product.image" alt="" class="w-full object-cover rounded" />
      </div>
      <div class="md:w-1/2">
        <h1 class="text-3xl font-semibold mb-4">{{ product.name }}</h1>
        <div class="flex items-baseline space-x-3 mb-4">
          <span class="text-2xl font-bold">{{ product.price | currency }}</span>
          <span
            v-if="product.originalPrice"
            class="text-gray-500 line-through"
            >{{ product.originalPrice | currency }}</span
          >
        </div>
        <div class="mb-4">
          <p>{{ product.shortDescription }}</p>
        </div>
        <div class="mb-4">
          <el-button size="large" type="primary" @click="addToCart"
            >Thêm vào giỏ</el-button
          >
        </div>
        <!-- Thông tin thêm: màu sắc, kích thước nếu có -->
      </div>
    </div>

    <section class="mt-12">
      <h2 class="text-2xl font-semibold mb-4">Mô tả sản phẩm</h2>
      <div v-html="product.description"></div>
    </section>

    <section v-if="relatedProducts.length" class="mt-12">
      <h2 class="text-2xl font-semibold mb-4">Sản phẩm liên quan</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// import { fetchProductDetail, fetchRelatedProducts } from "@/api/productApi";
// import Breadcrumb from "@/components/Breadcrumb.vue";
import ProductCard from "@/components/ProductCard.vue";
// import { useCartStore } from "@/store/cart";
import { ElMessage } from "element-plus";

const route = useRoute();

const product = ref<any>(null);
const relatedProducts = ref([]);
// const breadcrumbItems = ref([]);

// const cartStore = useCartStore();

const resp = {
  id: 1,
  name: "abc",
  price: 30000,
  originalPrice: 20000,
  shortDescription: "shortDescription",
  image: "../assets/images/demo.webp",
};
product.value = {
  id: 1,
  name: "abc",
  price: 30000,
  originalPrice: 20000,
  shortDescription: "shortDescription",
  image: "../assets/images/demo.webp",
};
//   breadcrumbItems.value = resp.breadcrumb;
relatedProducts.value = [
  {
    id: 1,
    name: "abc",
    price: 30000,
    originalPrice: 20000,
    shortDescription: "shortDescription",
    image: "../assets/images/demo.webp",
  },
];

async function load() {
  const id = route.params.id as string;
}

function addToCart() {
  //   cartStore.addItem(product.value);
  ElMessage.success("Đã thêm vào giỏ hàng");
}

onMounted(() => {
  load();
});
</script>
