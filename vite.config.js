import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AnimeDeck/', // Adicione esta linha com o nome EXATO do seu repositório no GitHub
})