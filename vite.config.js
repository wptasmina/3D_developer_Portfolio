import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})




// New Tailwind CSS install :
// npm install tailwindcss @tailwindcss/vite
// npm create vite@latest my-app -- --template react-swc
// npm install @vitejs/plugin-react-swc --save-dev
