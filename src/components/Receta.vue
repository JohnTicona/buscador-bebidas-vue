<script setup>
defineProps({
  receta: {
    type: Object,
  },
});
</script>

<template>
  <div class="border shadow-lg rounded-md overflow-hidden">
    <div class="overflow-hidden">
      <img
        :src="receta.strDrinkThumb"
        class="hover:scale-125 transition-transform hover:rotate-2"
        :alt="receta.strDrink"
      />
    </div>
    <div class="p-5">
      <h2 class="text-xl truncate font-extrabold">{{ receta.strDrink }}</h2>
      <button
        type="button"
        class="bg-orange-400 hover:bg-orange-500 font-bold p-3 mt-5 w-full text-white text-lg rounded-md"
      >
        Ver Receta
      </button>
    </div>
  </div>
</template>
