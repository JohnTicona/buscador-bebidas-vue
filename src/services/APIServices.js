import api from "../lib/axios";

const obtenerCategorias = () => {
  return api.get("/list.php?c=list");
};

const buscarRecetas = ({ categoria, nombre }) => {
  return api.get(`/filter.php?c=${categoria}&i=${nombre}`);
};

export default {
  obtenerCategorias,
  buscarRecetas,
};
