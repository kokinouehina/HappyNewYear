<script setup></script>

<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="center">泣かないで！！</div>
  <div class="scroll-infinity">
    <div class="scroll-infinity__wrap">
      <ul class="scroll-infinity__list scroll-infinity__list--left">
        <li class="scroll-infinity__item"><img src="../assets/IMG_5384.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_4595.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_5384.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_4595.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_5384.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_4595.png" /></li>
      </ul>
      <ul class="scroll-infinity__list scroll-infinity__list--left">
        <li class="scroll-infinity__item"><img src="../assets/IMG_5384.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_4595.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_5384.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_4595.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_5384.png" /></li>
        <li class="scroll-infinity__item"><img src="../assets/IMG_4595.png" /></li>
      </ul>
    </div>
  </div>
</template>

<style>
.pan {
  position: relative;
  left: 1500px;
}

@keyframes infinity-scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.scroll-infinity__wrap {
  display: flex;
  overflow: hidden;
}
.scroll-infinity__list {
  display: flex;
  list-style: none;
  padding: 0;
}
.scroll-infinity__list--left {
  animation: infinity-scroll-left 80s infinite linear 0.5s both;
}
.scroll-infinity__item {
  width: calc(100vw / 6);
}
.scroll-infinity__item > img {
  width: 100%;
}

.center {
  text-align: center;
}
</style>
