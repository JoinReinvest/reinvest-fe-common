module.exports = {
  entry: ["src/**/*.{ts,tsx}"],
  format: "cjs",
  dts: true,
  minify: true,
  minifyWhitespace: true,
  clean: true,
  external: ["react"],
};
