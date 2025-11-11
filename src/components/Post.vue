<template>
  <div class="max-w-6xl mx-auto px-4 py-8 font-sans text-gray-800">
    <section class="text-center mb-10">
      <h2
        class="text-4xl text-[#ecba71] font-[Licorice] mb-2 font-semibold text-center"
      >
        What it contains
      </h2>
      <h2 class="mt-2 uppercase text-2xl font-semibold mb-4 text-center">
        ADENOSINE · NIACINAMIDE · CENTELLA ASIATICA
      </h2>
    </section>
    <!-- IMAGE GRID -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
      <div class="col-span-2">
        <img
          src="../../public/prd_1.jpg"
          alt=""
          class="w-full max-h-[192px] rounded-md object-cover"
        />
      </div>
      <div class="col-span-1">
        <img
          src="../../public/prd_2.jpg"
          alt=""
          class="w-full max-h-[192px] rounded-md object-cover"
        />
      </div>
      <div class="col-span-1">
        <img
          src="../../public/prd_3.jpg"
          alt=""
          class="w-full max-h-[192px] rounded-md object-cover"
        />
      </div>
      <div
        class="col-span-1 bg-[#f1e9e2] flex flex-col justify-center items-center text-center p-4 rounded-md"
      >
        <ul
          class="text-sm text-gray-800 space-y-1 font-medium"
          v-for="item in listOfContents"
          :key="item"
        >
          <li>{{ item }}</li>
        </ul>
      </div>
      <div class="col-span-1 row-span-2">
        <img
          src="../../public/prd_4.jpg"
          alt="model"
          class="w-full h-full object-cover rounded-md"
        />
      </div>
      <div class="col-span-2">
        <img
          src="../../public/prd_6.jpg"
          alt=""
          class="w-full max-h-[192px] rounded-md object-cover"
        />
      </div>
    </div>

    <!-- DESCRIPTION -->
    <section
      class="mt-10 space-y-8"
      v-for="itemEffect of listOfEffects"
      :key="itemEffect"
    >
      <div>
        <h3 class="text-lg font-bold text-[#8b5e3c]">
          {{ itemEffect.title }}
        </h3>
        <p class="text-gray-700 mt-2">
          {{ itemEffect.content }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const listOfContents = reactive([
  "EXOSOME",
  "SODIUM HYALURONATE",
  "CENTELLA ASIATICA",
  "ORGANIC LAVENDER",
  "PEPTIDE",
  "ADENOSINE",
  "NIACINAMIDE",
]);

const listOfEffects = ref([
  {
    title: "Chỉ số chống nắng SPF50, PA++++ – cấp độ cao nhất",
    content: "Bảo vệ làn da khỏi tia UV bên ngoài trong cuộc sống hằng ngày",
  },
  {
    title: "Giải pháp dưỡng ẩm cho làn da",
    content:
      "Làm sạch và loại bỏ tế bào chết tích tụ trên da, duy trì kết cấu da sạch sẽ. Khôi phục lại kết cấu da nguyên bản khỏe mạnh, ăn sâu trong làn da, giúp duy trì sức khỏe làn da.",
  },
  {
    title: "Mỹ phẩm chức năng 3 trong 1",
    content:
      "Chống tia UV – Làm trắng – Cải thiện nếp nhăn. Mang đến hiệu quả che phủ dưỡng ẩm tự nhiên, không gây bí bách, giữ kết cấu da mịn màng và tự nhiên, giúp tạo nên làn da trong sáng như thiếu nữ.",
  },
  {
    title: "Cảm giác tươi mát không bết dính, giàu dưỡng chất",
    content:
      "Không sử dụng chất pha trộn hóa học, chỉ dùng các thành phần dịu nhẹ, thân thiện với làn da – dễ dàng bám lên da, thoa mịn, và thấm nhanh, không gây nhờn rít.",
  },
]);
</script>

<style scoped></style>
