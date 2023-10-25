# Opinionated Nuxt3 Layers

## Packages

- [@plsr/nuxt-layer-base](https://www.npmjs.com/package/@plsr/nuxt-layer-base)
    - **Features:**
        - SASS/SCSS
        - tailwindcss
        - eslint/prettier
        - vscode settings
- [@plsr/eslint-config-nuxt](https://www.npmjs.com/package/@plsr/eslint-config-nuxt)
    - **Features:**
        - Eslint & prettier config
        - Prettier tailwindcss plugin

## Recommanded vscode plugin

- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Install Layer

1. Install deps
    ```bash
    bun i -D nuxt @plsr/nuxt-layer-base
    ```

2. Copy vscode settings
    ```bash
    cp -r node_modules/@plsr/nuxt-layer-base/.vscode .
    ```

3. Create `.eslintrc.cjs`
    ```js
    module.exports = {
        extends: ["@plsr/nuxt"],
    };
    ```
    or
    ```bash
    cp node_modules/@plsr/nuxt-layer-base/.eslintrc.cjs .
    ```

4. Extend the nuxt config `nuxt.config.ts`
    ```js
    export default defineNuxtConfig({
        extends: ["@plsr/nuxt-layer-base"],
    });
    ```