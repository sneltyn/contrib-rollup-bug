import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json';


export default {
  input: './sentry.js',
  output: {
    file: './dist/sentry.js',
    format: 'cjs',
    name: 'sentry'
  },
  plugins: [
    json(),
    commonjs(),
    resolve({ preferBuiltins: true, extensions: ['.js', '.json'] })
  ],
  external: [
    'electron'
  ]
}