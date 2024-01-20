# @handmade-systems/prettier-config

Shared prettier config for [Handmade Systems](https://handmade-systems.de/)

## Installation

1. Install eslint-config-prettier:

   ```
   npm install --save-dev @handmade-systems/prettier-config
   ```

2. Add eslint-config-prettier to your prettier.config.json
- For a project using base config:

```js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { base } =  require('@handmade-systems/prettier-config')

// eslint-disable-next-line no-undef
module.exports = {
  ...base,
  overrides: [
    {
      files: ["**/**"],
      options: {
        plugins: [
          "@handmade-systems/prettier-config"
        ]
      },
    },
  ],
}
```
- For a project using Tailwind CSS:
```js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { tailwind } =  require('@handmade-systems/prettier-config')

// eslint-disable-next-line no-undef
module.exports = {
  ...tailwind,
  overrides: [
    {
      files: ["**/**"],
      options: {
        plugins: [
          "@handmade-systems/prettier-config"
        ]
      },
      tailwindConfig: './tailwind.config.js',
    },
  ],
}
```