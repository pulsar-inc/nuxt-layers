# Base Pulsar Nuxt3 Layer

## Features

- [nuxt-icon](https://nuxt.com/modules/icon)
- [nuxt-image](https://image.nuxt.com/)
- [SASS/SCSS](https://sass-lang.com/)
- [tailwindcss](https://tailwindcss.nuxtjs.org/) & [postcss](https://postcss.org/)
    - [postcss-import](https://github.com/postcss/postcss-import)
    - [tailwindcss/nesting](https://tailwindcss.com/docs/using-with-preprocessors#nesting)
- [eslint](https://nuxt.com/modules/eslint)/[prettier](https://prettier.io/)

## Recommanded vscode plugin

- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Install

1. Install deps
    ```bash
    bun i -D nuxt @plsr/nuxt-layer-base
    ```

2. Copy vscode settings
    ```bash
    cp -r node_modules/@plsr/nuxt-layer-base/.vscode .
    ```

3. Create `eslint.config.mjs`
    ```mjs
    import config from "@plsr/eslint-config-nuxt";
    export default config;
    ```
    or
    ```bash
    cp node_modules/@plsr/nuxt-layer-base/eslint.config.mjs .
    ```

4. Extend the nuxt config `nuxt.config.ts`
    ```js
    export default defineNuxtConfig({
        extends: ["@plsr/nuxt-layer-base"],
    });
    ```