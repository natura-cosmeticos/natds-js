import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-node-polyfills";
import json from "@rollup/plugin-json";

/**
 * @see https://github.com/rollup/plugins/issues/243#issuecomment-595964778
 */
export default [
  {
    external: ["react"],
    input: "./dist/index.js",
    output: [
      {
        dir: "./dist/umd/",
        format: "umd",
        globals: { react: "React" },
        name: "natdsWeb",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        preferBuiltins: true,
      }),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      nodePolyfills(),
      json(),
    ],
  },
];
