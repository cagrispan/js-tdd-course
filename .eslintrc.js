module.exports = {
  "extends": "airbnb",
  "env": {
    "mocha": true
  },
  overrides: [
    {
      files: "*.spec.js",
      rules: {
        "no-unused-expressions": "off"
      }
    }
  ]
};
