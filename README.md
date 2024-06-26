# Opinionated Nuxt3 Layers

## Packages

- [@plsr/nuxt-layer-base](https://www.npmjs.com/package/@plsr/nuxt-layer-base)
    - **Features:**
        - nuxt-icon
        - nuxt-image
        - SASS/SCSS
        - tailwindcss & postcss
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

## Other links

- A tool to help generate color shades for Tailwind CSS. https://www.tailwindshades.com/
- Add Tailwind Color Styles to your figma file. https://www.figma.com/community/plugin/853905984020840743/tailwind-color-palettes

## Repo managment

### New version

```bash
bunx changeset
bunx changeset version
bunx @morlay/bunpublish
```
