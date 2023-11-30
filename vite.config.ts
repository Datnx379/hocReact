import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), viteTsconfigPaths()],
//   server: {
//     port: 3001
//   }
// })
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  }
})