<template>
  <div class="flex flex-col items-center space-y-3">
    <img
      :src="product.image"
      alt="product"
      class="max-w-[430px] max-h-[430px]"
    />
    <!-- <div class="flex space-x-2">
      <img
        v-for="(img, i) in product"
        :key="i"
        :src="img"
        class="w-16 h-16 object-cover border rounded cursor-pointer hover:border-blue-500"
        @click="mainImage = img"
      />
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
// const mainImage = ref(props.images?.[0]);
</script>
