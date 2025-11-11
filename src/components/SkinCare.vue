<template>
  <div class="font-sans text-gray-800">
    <!-- PHẦN 1: Chống nắng, Chống nhăn, Làm trắng -->
    <section class="bg-[#fafafa] text-center py-10">
      <h2
        class="text-4xl text-[#ecba71] font-[Licorice] mb-2 font-semibold text-center"
      >
        Bắt đầu chăm sóc da từ lớp nền ẩm mịn & ngậm nước
      </h2>

      <div class="flex justify-center items-center mt-6 space-x-4">
        <div class="flex flex-col items-center">
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center rounded-full bg-gradient-to-br from-[#fbc02d] to-[#f57c00] text-white font-bold text-sm sm:text-lg shadow-md"
          >
            Chống<br />nắng
          </div>
        </div>

        <span class="text-3xl text-gray-400 font-light">+</span>
        <div class="flex flex-col items-center">
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center rounded-full bg-gradient-to-br from-[#ffe082] to-[#fbc02d] text-white font-bold text-sm sm:text-lg shadow-md"
          >
            Chống<br />nhăn
          </div>
        </div>

        <span class="text-3xl text-gray-400 font-light">+</span>
        <div class="flex flex-col items-center">
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center rounded-full bg-gradient-to-br from-[#ffb300] to-[#ef6c00] text-white font-bold text-sm sm:text-lg shadow-md"
          >
            Làm<br />trắng
          </div>
        </div>
      </div>
      <p class="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
        Chống nắng mạnh mẽ SPF50, PA++++ – Cấp độ cao nhất<br />
        Bảo vệ da khỏi tác hại của tia UV trong sinh hoạt hằng ngày
      </p>
      <p class="mt-2 text-gray-500 text-xs italic">
        “Công dụng dựa trên đặc tính của từng thành phần”
      </p>
    </section>

    <section class="bg-[#f6efe8] text-center py-10 px-6">
      <h3 class="text-2xl md:text-3xl font-bold text-[#ecba71]">
        톡셀 바이오 선 비비
      </h3>
      <h4 class="text-lg md:text-xl font-semibold text-[#c29b77] mt-1">
        TOK CELL BIO SUN BB
      </h4>

      <p class="mt-4 text-gray-700 max-w-2xl mx-auto text-base leading-relaxed">
        Nếu bạn muốn một lớp che phủ tự nhiên như không trang điểm, sạch mịn và
        xinh đẹp,
        <br />
        Hãy thử thoa nhẹ nhàng với kết cấu mỏng nhẹ và tươi mát này nhé!
      </p>
      <div class="flex justify-center mt-6">
        <img
          src="../../public/prd_6.jpg"
          alt="BB Cream texture"
          class="w-40 md:w-56 rounded-md shadow-md"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
</script>
