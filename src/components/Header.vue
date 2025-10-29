<template>
  <header class="bg-white shadow-2xl fixed top-0 left-0 right-0 z-1">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <router-link to="/" class="text-2xl font-bold">F1GENZ</router-link>
      <nav class="hidden md:flex space-x-4">
        <el-menu
          class="md:w-[400px] xl:w-[500px] font-bold uppercase text-2xl"
          mode="horizontal"
          :router="true"
          default-active="/"
          :collapse="false"
        >
          <el-menu-item #title index="/">Trang Chủ</el-menu-item>
          <el-sub-menu>
            <template #title> Mỹ Phẩm</template>
            <el-menu-item index="/productslist/face"
              >Chống lão hóa</el-menu-item
            >
            <el-menu-item index="/contact">Skin care</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/contact">Liên Hệ</el-menu-item>
        </el-menu>
      </nav>
      <button class="md:hidden text-2xl" @click="drawer = true">
        <i class="fa-solid fa-bars"></i>
      </button>
      <el-drawer
        v-model="drawer"
        :with-header="false"
        size="60%"
        body-class="p-[0px]! text-center"
      >
        <el-menu
          class="lg:w-[500px] font-bold uppercase text-2xl"
          mode="vertical"
          :router="true"
          default-active="/"
          @select="handleSelect"
        >
          <el-menu-item index="/">Trang Chủ</el-menu-item>
          <el-sub-menu>
            <template #title> Mỹ Phẩm</template>
            <el-menu-item index="/productslist/face"
              >Chống lão hóa</el-menu-item
            >
            <el-menu-item index="">Skin care</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/contact">Liên Hệ</el-menu-item>
        </el-menu>
      </el-drawer>
      <div class="lg:flex lg:items-center space-x-4 hidden">
        <SearchBar />
        <!-- <router-link to="#"> -->
        <el-badge value="0" class="cursor-pointer text-3xl">
          <el-icon><ShoppingCart /></el-icon>
        </el-badge>
        <!-- </router-link> -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
// import { SearchBar, ElMenu, ElMenuItem } from "@/components/SearchBar.vue";
import { ShoppingCart } from "@element-plus/icons-vue";

const cartItemCount = ref(0);

const activeIndex = ref("1");

const drawer = ref(false);

const handleSelect = (key: string, keyPath: string[]) => {
  drawer.value = !drawer.value;
};
</script>
<style scoped>
.el-menu--horizontal.el-menu,
.el-menu--vertical.el-menu {
  border: unset;
}
.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--vertical > .el-menu-item.is-active {
  border: unset;
}
.el-drawer__body {
  padding: 0 !important;
}
</style>
