import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import InlineSvg from 'rollup-plugin-inline-svg';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        inlineDynamicImports: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true
      },
    ],
    plugins: [
      resolve(),
      InlineSvg(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
  
    input: "dist/esm/index.d.ts",
    output: [{
      dir: "dist", 
      format: "esm",
      inlineDynamicImports: true
  }],
    plugins: [dts()],
  },
];