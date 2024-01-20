const base = require("./base.js")

module.exports = {
  ...base,
  plugins: [
    ...base.plugins,
    'prettier-plugin-tailwindcss',
  ],
}
