import { onMounted, ref, reactive } from "vue";
import { defineStore } from "pinia";
import APIServices from "../services/APIServices";

export const useBebidasStore = defineStore("bebidas", () => {
  const recetas = ref([]);
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });

  onMounted(async () => {
    try {
      const { data } = await APIServices.obtenerCategorias();
      categorias.value = data.drinks;
    } catch (error) {
      console.log(error);
    }
  });

  const obtenerRecetas = async () => {
    try {
      const { data } = await APIServices.buscarRecetas(busqueda);

      recetas.value = data.drinks;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    categorias,
    busqueda,
    recetas,
    obtenerRecetas,
  };
});
