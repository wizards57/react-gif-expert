import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //Prueba es cuando se sube al github pages fucione sin problemas eliminar si algo falla
  base: "./",
  build: {
    outDir: "./docs",
  },
});
