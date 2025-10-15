<template>
  <footer
    class="bg-gray-100 text-gray-800 py-10 text-sm border-t border-gray-200 bg-footer"
  >
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
      <!-- Logo + Intro -->
      <div>
        <!-- <img src="/logo.png" alt="Logo" class="h-12 mb-4" /> -->
        <h2
          class="text-4xl text-[#fff] font-[Licorice] mb-2 font-semibold text-center"
        >
          F1GENZ
        </h2>
        <p>
          F1GENZ luôn cam kết, đảm bảo bàn giao sản phẩm đạt chất lượng tối ưu
          nhất đến tay người dùng.
        </p>
      </div>

      <!-- contact -->
      <div>
        <h3 class="font-semibold mb-2">Liên hệ</h3>
        <ul class="space-y-1">
          <li>Tư vấn dịch vụ: 123456789</li>
          <li>Hỗ trợ sử dụng: 123456789</li>
          <li>Hỗ trợ vận chuyển: 123456789</li>
          <li>Email: abc@gmail.com</li>
          <li>Từ 7h00 – 22h00 các ngày từ thứ 2 đến Chủ nhật</li>
        </ul>
      </div>

      <!-- Về chúng tôi -->
      <div>
        <h3 class="font-semibold mb-2">Về chúng tôi</h3>
        <ul class="space-y-1">
          <li>
            <router-link to="/contact" class="hover:underline"
              >Giới thiệu</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="hover:underline"
              >Chính sách bảo mật</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="hover:underline"
              >Điều khoản dịch vụ</router-link
            >
          </li>
          <li>
            <router-link to="/returnPolicy" class="hover:underline"
              >Chính sách đổi trả</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Danh mục -->
      <div>
        <h3 class="font-semibold mb-2">Danh mục</h3>
        <ul class="space-y-1">
          <li><a href="#" class="hover:underline">Mỹ phẩm</a></li>
          <li><a href="#" class="hover:underline">Chống lão hóa</a></li>
          <li><a href="#" class="hover:underline">Bổ sung Collagen</a></li>
          <li><a href="#" class="hover:underline">Skincare</a></li>
          <li><a href="#" class="hover:underline">Chống nếp nhăn</a></li>
        </ul>
      </div>

      <!-- Mạng xã hội -->
      <div>
        <h3 class="font-semibold mb-2">Liên hệ với chúng tôi</h3>
        <p class="mb-3">
          Luôn cập nhật tất cả các hành động mà chúng tôi đã lưu cho tất cả
          khách hàng của mình.
        </p>
        <div class="flex space-x-3">
          <a href="#"><i class="fab fa-facebook text-xl text-blue-600"></i></a>
          <a href="#"><i class="fab fa-youtube text-xl text-red-600"></i></a>
          <a href="#"><i class="fab fa-pinterest text-xl text-red-500"></i></a>
          <a href="#"><i class="fab fa-tiktok text-xl text-black"></i></a>
          <a href="#"><i class="fab fa-instagram text-xl text-pink-500"></i></a>
        </div>
      </div>
    </div>

    <!-- Bottom copyright -->
    <div class="border-t mt-10 pt-4 text-center text-xs text-gray-500">
      © 2025 - Bản quyền thuộc về
      <span class="font-semibold text-pink-500"> QuyenTV3 entertainment </span>
      Cung cấp bởi
      <a href="#" class="text-blue-600 hover:underline">QuyenTV3</a>
    </div>
  </footer>
</template>
<style>
.bg-footer {
  background-image: url(../assets/images/bgfooter.jpg);
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
