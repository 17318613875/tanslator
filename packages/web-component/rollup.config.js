import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "web-component",
  output: {
    file: "public/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [resolve(), commonjs(), production && terser()],
};
