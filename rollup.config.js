import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.es.js", format: "es" },
  ],
  plugins: [typescript()],
  external: ["react", "react-dom", "framer-motion"],
};
