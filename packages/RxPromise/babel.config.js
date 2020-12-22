module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  plugins: ["syntax-dynamic-import", "@babel/plugin-proposal-class-properties"],
};
