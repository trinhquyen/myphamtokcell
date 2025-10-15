<template>
  <div
    class="rounded overflow-hidden hover:shadow-2xl/30 hover:shadow-state-900 transition-shadow py-3 hover:scale-110 transition delay-0 duration-300 ease-linear"
  >
    <router-link :to="`/product/${product.id}`">
      <div class="relative">
        <img :src="product.image" alt="" class="w-full h-48 object-cover" />
        <el-tag
          v-if="product.discount !== ''"
          type="danger"
          class="text-sm font-bold absolute top-0 left-0"
          effect="dark"
        >
          {{ product.discount }}%
        </el-tag>
      </div>
    </router-link>
    <div class="p-4">
      <h3 class="text-lg font-medium text-xl mb-2 text-ellipsis">
        <router-link :to="`/product/${product.id}`">{{
          product.name
        }}</router-link>
      </h3>
      <div
        class="flex md:flex-row flex-col items-baseline space-x-2 justify-between text-sm text-gray-500"
      >
        <div>
          <span v-if="product.discount !== ''" class="line-through"
            >{{
              formatCurrency(
                Math.round((product.price / 100) * product.discount)
              )
            }}
          </span>
          <p class="no-underline! inline ps-2">chỉ từ</p>
        </div>
        <el-tag type="danger" class="text-sm font-bold" effect="dark">
          {{ formatCurrency(product.price) }}
        </el-tag>
      </div>
      <!-- <el-button size="small" type="primary" @click="addToCart"
        >Thêm vào giỏ</el-button
      > -->
    </div>
  </div>
</template>

<script setup>
// import { useCartStore } from "@/store/cart";
import { toRefs, computed } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
function formatCurrency(amount) {
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

function addToCart() {
  //   cartStore.addItem(props.product);
  ElMessage.success("Đã thêm vào giỏ hàng");
}
</script>
<style>
.text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
}
</style>
