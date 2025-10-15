<template>
  <el-input
    v-model="keyword"
    placeholder="Tìm kiếm sản phẩm..."
    clearable
    @keyup.enter.native="onSearch"
    class="w-48 md:w-64"
  >
    <template #append>
      <el-button :icon="Search" @click="onSearch"></el-button>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";

const keyword = ref("");
const router = useRouter();

function onSearch() {
  //   if (keyword.value.trim() !== '') {
  //     router.push({ path: '/category/search', query: { q: keyword.value.trim() } })
  //   }
}
</script>
