# @handmade-systems/prettier-config

Shared prettier config for [Handmade Systems](https://handmade-systems.de/)

## Installation

1. Install eslint-config-prettier:

   ```
   npm install --save-dev @handmade-systems/prettier-config
   ```

2. Add eslint-config-prettier to your ESLint configuration – either to [eslintrc] or to [eslint.config.js (flat config)].

    - eslintrc: Add `"prettier"` to the "extends" array in your `.eslintrc.*` file. Make sure to put it **last,** so it gets the chance to override other configs.

      <!-- prettier-ignore -->
      ```json
      {
        "extends": [
          "some-other-config-you-use",
          "plugin:@handmade-systems/next"
        ],
        "plugins": [
          "@handmade-systems"
        ]
      }
      ```