import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'; //TOOD: cdn ?
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'assets/javascript/app.js',
  dest: 'build/bundle.js',
  format: 'iife',
  moduleName: 'trivia-game',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**',
    })]
};
