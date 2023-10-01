<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div>
    <Header />

    <main class="container mx-auto">
      <RouterView />
    </main>
  </div>
</template>
