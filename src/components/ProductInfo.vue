<template>
  <div class="space-y-4">
    <div class="text-2xl font-semibold">{{ product.name }}</div>
    <div class="flex items-center space-x-2">
      <span class="line-through text-gray-400">{{
        formatCurrency(product.price)
      }}</span>
      <span
        class="text-red-600 text-2xl font-bold"
        v-if="product.discount !== ''"
        >{{
          formatCurrency(
            product.price - Math.round((product.price / 100) * product.discount)
          )
        }}</span
      >
      <span class="bg-red-500 text-white text-sm px-2 py-1 rounded"
        >-{{ product.discount }}%</span
      >
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
      <ul class="space-y-1 text-gray-800">
        <li class="flex items-center">
          <span class="w-2 h-2 bg-pink-300 rounded-full mr-2"></span>
          <span class="font-semibold">Mã sản phẩm:</span>
          <span class="ml-1 text-gray-600">{{
            product.code ? product.code : "Đang cập nhật"
          }}</span>
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-pink-300 rounded-full mr-2"></span>
          <span class="font-semibold">Thương hiệu:</span>
          <span class="ml-1 text-gray-600">{{
            product.brand ? product.brand : "Đang cập nhật"
          }}</span>
        </li>
      </ul>

      <ul class="space-y-1 text-gray-800">
        <li class="flex items-center">
          <span class="w-2 h-2 bg-pink-300 rounded-full mr-2"></span>
          <span class="font-semibold">Barcode:</span>
          <span class="ml-1 text-gray-600">{{
            product.barCode ? product.barCode : "Đang cập nhật"
          }}</span>
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-pink-300 rounded-full mr-2"></span>
          <span class="font-semibold">Dòng sản phẩm:</span>
          <span class="ml-1 text-gray-600">{{
            product.type ? product.type : "Đang cập nhật"
          }}</span>
        </li>
      </ul>
    </div>
    <div>
      <span class="font-medium">Dung tích:</span>
      <el-radio-group v-model="selectedSize" class="ml-2 gap-4">
        <el-radio-button
          v-for="size in product.sizes"
          :key="size"
          :label="size"
          >{{ size }}</el-radio-button
        >
      </el-radio-group>
    </div>

    <div class="flex items-center space-x-3">
      <span class="font-medium">Số lượng:</span>
      <el-input-number v-model="quantity" :min="1" />
    </div>

    <div class="space-y-3 mt-6 product--info">
      <button
        class="w-full border border-gray-300 py-3 rounded text-center font-semibold text-sm transition hover:border-[#409eff] hover:text-[#409eff]"
      >
        THÊM VÀO GIỎ HÀNG
        <div class="text-xs font-normal">Chọn ngay sản phẩm bạn yêu thích</div>
      </button>

      <div class="grid grid-cols-2 gap-3">
        <button
          class="border border-gray-300 py-3 rounded text-center font-semibold text-sm transition hover:border-[#e6a23c] hover:text-[#e6a23c]"
        >
          TƯ VẤN
          <div class="text-xs font-normal">
            Tư vấn thiết kế nội thất tùy chọn
          </div>
        </button>

        <button
          class="bg-pink-200 text-pink-800 py-3 rounded text-center font-semibold text-sm hover:bg-pink-300 transition"
        >
          LIÊN HỆ
          <div class="text-xs font-normal text-pink-700">
            Chúng tôi luôn bên bạn 24/7
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { formatCurrency } from "@/common/common.js";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const selectedSize = ref(props.product.sizes?.[0]);
const quantity = ref(1);
</script>
<style scoped></style>
