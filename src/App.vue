<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink><br />
      <br />
      <br />
      <RouterLink to="/2024">2024</RouterLink><br />
      <RouterLink to="/2025">2025</RouterLink><br />
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
