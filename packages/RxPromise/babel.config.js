module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false, targets: { node: "current" } }],
  ],
  plugins: ["syntax-dynamic-import", "@babel/plugin-proposal-class-properties"],
};
