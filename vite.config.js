import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abrir automáticamente el navegador
    port: 3000, // Puerto que deseas usar
    host: true, // Habilitar acceso desde la red externa
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para simplificar importaciones
    },
  },
});
