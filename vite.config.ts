import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// @ts-expect-error | TS Linter doesn't see node module 'path', but it's OK
import path from 'path';

const root = path.resolve("src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // remember to duplicate alias paths in tsconfig/compilerOptions/paths
      // FOR EXAMPLE <"@": root> -> <"@/*" : ["./src/*"]>. This helps your IDE
      "@": root,
    },
  },
})
