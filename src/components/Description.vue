<template>
  <header
    class="flex justify-center gap-12 py-4 border-b border-gray-200 text-gray-700 text-sm"
  >
    <a href="#" class="text-pink-600 font-bold text-2xl font-[Licorice]"
      >Mô tả sản phẩm</a
    >
  </header>

  <main class="max-w-4xl mx-auto p-6 leading-relaxed">
    <p class="mb-4">
      <!-- <strong>{{ product.name }}</strong> -->
      <p v-if="product.shortDescription" v-html="product.shortDescription"></p>
    </p>

    <h2 class="text-lg font-bold mt-8 mb-4 uppercase">
      Chi tiết về
      <span class="inline">{{ product.name }}</span>
    </h2>
    <table class="w-full border border-gray-300 text-sm mb-8">
      <tbody>
        <tr class="border-b border-gray-300">
          <td class="p-2 font-semibold w-1/3">Thương hiệu</td>
          <td class="p-2">{{ product.desc?.brand }}</td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="p-2 font-semibold">Xuất xứ</td>
          <td class="p-2">{{ product.desc?.origin }}</td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="p-2 font-semibold">Loại da</td>
          <td class="p-2">{{ product.desc?.skinType }}</td>
        </tr>
        <tr>
          <td class="p-2 font-semibold">Định lượng</td>
          <td class="p-2">{{ product.desc?.quantification }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <img
      :src="product.image2"
      alt="product"
      class="w-full h-full max-h-[430px] object-cover mb-4 rounded-lg"
    /> -->
    <section class="space-y-6 text-sm">
      <div>
        <h3 class="font-semibold text-base mb-2">
          1. Công dụng chính của sản phẩm {{ product.name }}.
        </h3>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li v-for="utility in product.desc?.utilities" :key="utility">
            {{ utility }}
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-base mb-2">2. Giải pháp cho:</h3>
        <li v-for="solution in product.desc?.solutionTo">
          {{ solution }}
        </li>
      </div>

      <div>
        <h3 class="font-semibold text-base mb-2">
          3. Thành phần chính có trong sản phẩm.
        </h3>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="component in product.desc?.components">
            <strong>{{ component.highLightContent }}: </strong>
            {{ component.content }}
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped></style>
