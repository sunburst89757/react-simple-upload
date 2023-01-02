import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import libCss from 'vite-plugin-libcss';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      formats: ['es']
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
        }),
        // css注入打包后的文件
        libCss()
      ]
    },
    minify: 'esbuild'
  },
  esbuild: {
    drop: ['console', 'debugger']
  },
  plugins: [react()]
});
