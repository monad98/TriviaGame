import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'; //TOOD: cdn ?
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
export default {
  entry: 'assets/javascript/app.js',
  dest: 'build/app.js',
  format: 'iife',
  moduleName: 'trivia-game',
  sourceMap: 'inline',
  plugins: [
    postcss({
      extensions: ['.css']
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**',
    })
  ]
};
