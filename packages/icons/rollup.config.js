import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url';

export default {
  external: [],
  input: './src/index.ts',
  output: [{
    format: 'cjs',
    dir: './dist/cjs',
    sourcemap: true
  }, {
    format: 'esm',
    dir: './dist/esm',
    sourcemap: true
  }, {
    format: 'iife',
    dir: './dist/iife',
    name: 'natdsIcons',
    sourcemap: true
  }, {
    format: 'umd',
    dir: './dist/umd',
    name: 'natdsIcons',
    sourcemap: true
  }],
  plugins: [json(), url({
    include: ['**/*.eot', '**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.svg', '**/*.css']
  })]
}
