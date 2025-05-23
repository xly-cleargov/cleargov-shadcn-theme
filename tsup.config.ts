import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['lib/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    entry: './lib/index.ts',
    resolve: true
  },
  clean: true,
  external: [
    'react',
    'react-dom',
    'next',
    'tailwindcss',
    '@radix-ui/*'
  ],
  treeshake: true,
  sourcemap: true,
  tsconfig: './tsconfig.lib.json'
}) 