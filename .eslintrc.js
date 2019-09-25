const path = require("path");
module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  plugins: ["prettier"],
  env: {
    "browser": true,
    "node": true
  }
};
