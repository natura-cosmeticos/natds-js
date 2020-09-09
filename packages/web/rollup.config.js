import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-node-polyfills";

const getPluginsForBrowser = () => [
  nodeResolve({
    preferBuiltins: true,
  }),
  commonjs(),
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
  }),
  nodePolyfills(),
];

const getBrowserOutputConfig = ({ filePath = "", globals, name = "natdsWeb" }) => [
  {
    dir: `./dist/umd/${filePath}`,
    format: "umd",
    globals,
    name,
    sourcemap: true,
  },
];

/**
 * @see https://github.com/rollup/plugins/issues/243#issuecomment-595964778
 */
export default [
  {
    external: ["@naturacosmeticos/natds-icons/dist/natds-icons.css"],
    input: "./dist/index.js",
    output: getBrowserOutputConfig({
      globals: { "@naturacosmeticos/natds-icons/dist/natds-icons.css": "natDsIcons" },
    }),
    plugins: getPluginsForBrowser(),
  },
];
