<script setup>
import Receta from "../components/Receta.vue";
import { useBebidasStore } from "../stores/bebidas";

const store = useBebidasStore();
</script>

<template>
  <h1 class="text-5xl font-extrabold pt-5">Recetas</h1>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 my-10 gap-8"
  >
    <Receta
      v-for="receta in store.recetas"
      :receta="receta"
      :key="receta.idDrink"
    />
  </div>
</template>
