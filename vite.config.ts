import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'React Library Vite',
      fileName: (format) => `react-library-vite.${format}.js`
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React'
        }
      },
      plugins: [
        typescript({
          include: ['src/lib/**/*']
        })
      ]
    }
  },
  plugins: [react()]
});
