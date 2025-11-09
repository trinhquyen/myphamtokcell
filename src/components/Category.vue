<template>
  <div
    class="bg-yellow-50 rounded-lg container mx-auto px-4 md:py-8 py-5 md:flex md:justify-between md:items-center"
  >
    <div class="text-center px-3 md:mb-0 mb-5">
      <span
        class="text-4xl text-[#ecba71] font-[Licorice] mb-2 font-semibold text-center"
      >
        Gợi ý
      </span>
      <h2 class="text-xl font-semibold text-gray-800 text-nowrap">
        Được xem nhiều
      </h2>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 text-center"
    >
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="flex flex-col items-center group"
      >
        <div
          class="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center group-hover:-rotate-15 transition delay-20 duration-500 ease-in-out"
        >
          <img
            :src="item.image"
            :alt="item.label"
            class="w-8 h-8 object-contain"
          />
        </div>
        <p class="mt-2 text-sm group-hover:text-orange-500!">
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { categories } from "@/mockdata/category.js";
</script>
