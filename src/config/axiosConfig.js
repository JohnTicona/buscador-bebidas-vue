import axios from "axios";

export const clienteAxiosCategorias = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});
