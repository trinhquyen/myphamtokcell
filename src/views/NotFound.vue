<template>
  <div class="mt-[80px]">
    <div class="wscn-http404-container">
      <div class="wscn-http404 flex-col md:flex-row md:justify-around">
        <!-- IMAGE -->
        <div class="pic-404 shadow-2xl">
          <img
            class="pic-404__parent"
            src="@/assets/404_images/404.png"
            alt="404"
          />

          <img
            class="pic-404__child left"
            src="@/assets/404_images/404_cloud.png"
            alt="cloud"
          />
          <img
            class="pic-404__child mid"
            src="@/assets/404_images/404_cloud.png"
            alt="cloud"
          />
          <img
            class="pic-404__child right"
            src="@/assets/404_images/404_cloud.png"
            alt="cloud"
          />
        </div>

        <!-- TEXT -->
        <div class="bullshit">
          <div class="bullshit__oops">OOPS!</div>
          <div class="bullshit__info">All rights reserved</div>
          <div class="bullshit__headline">{{ message }}</div>
          <div class="bullshit__info">
            Please check that the URL you entered is correct, or click the
            button below to return to the homepage.
          </div>
          <router-link to="/" class="bullshit__return-home">
            Back to home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404",
  computed: {
    message() {
      return "The webmaster said that you can not enter this page...";
    },
  },
};
</script>

<style lang="scss" scoped>
/* =======================
   CONTAINER
======================= */
.wscn-http404-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
  height: calc(100vh - 80px);
}

/* =======================
   LAYOUT
======================= */
.wscn-http404 {
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
}

/* =======================
   IMAGE + ANIMATION
======================= */
.pic-404 {
  position: relative;
  flex: 1;
  max-width: 600px;

  &__parent {
    width: 100%;
    height: auto;
    display: block;
  }

  &__child {
    position: absolute;
    opacity: 0;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    &.left {
      width: 14%;
      top: 6%;
      left: 35%;
      animation-name: cloudLeft;
      animation-delay: 1s;
    }

    &.mid {
      width: 8%;
      top: 4%;
      left: 70%;
      animation-name: cloudMid;
      animation-delay: 1.2s;
    }

    &.right {
      width: 11%;
      top: 32%;
      left: 80%;
      animation-name: cloudRight;
      animation-delay: 1s;
    }
  }
}

/* =======================
   TEXT
======================= */
.bullshit {
  flex: 1;
  max-width: 420px;

  &__oops {
    font-size: 32px;
    font-weight: bold;
    color: #1482f0;
    margin-bottom: 20px;
    animation: slideUp 0.5s forwards;
  }

  &__headline {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    opacity: 0;
    animation: slideUp 0.5s 0.1s forwards;
  }

  &__info {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
    opacity: 0;
    animation: slideUp 0.5s 0.2s forwards;
  }

  &__return-home {
    display: inline-block;
    padding: 10px 22px;
    background: #1482f0;
    color: #fff;
    border-radius: 999px;
    text-decoration: none;
    font-size: 14px;
    opacity: 0;
    animation: slideUp 0.5s 0.3s forwards;
  }
}

/* =======================
   KEYFRAMES
======================= */
@keyframes cloudLeft {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20% {
    transform: translate(-10%, 10%);
    opacity: 1;
  }
  80% {
    transform: translate(-60%, 60%);
    opacity: 1;
  }
  100% {
    transform: translate(-80%, 80%);
    opacity: 0;
  }
}

@keyframes cloudMid {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20% {
    transform: translate(-15%, 20%);
    opacity: 1;
  }
  70% {
    transform: translate(-50%, 90%);
    opacity: 1;
  }
  100% {
    transform: translate(-60%, 110%);
    opacity: 0;
  }
}

@keyframes cloudRight {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20% {
    transform: translate(-10%, 10%);
    opacity: 1;
  }
  80% {
    transform: translate(-40%, 60%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 80%);
    opacity: 0;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* =======================
   MOBILE RESPONSIVE
======================= */
@media (max-width: 768px) {
  .wscn-http404 {
    flex-direction: column;
    text-align: center;
  }

  .pic-404 {
    max-width: 280px;
  }

  .bullshit {
    max-width: 100%;

    &__return-home {
      margin: 0 auto;
    }
  }
}
</style>
