<p align="center">
  <img src="https://i.imgur.com/RebkXfu.png" width="250" />
  <br>
  <a href="https://npm.im/kashyyyk">
    <img src="https://badgen.net/npm/v/kashyyyk">
  </a>
  <a href="https://npm.im/kashyyyk">
    <img src="https://badgen.net/npm/dm/kashyyyk?color=blue">
  </a>
  <a href="https://bundlephobia.com/result?p=kashyyyk">
    <img src="https://badgen.net/bundlephobia/minzip/kashyyyk">
  </a>
</p>

# kashyyyk

A simple internationalization (i18n) Vuejs plugin designed to be minimal and lightweight

## Highlights
- Translate supporting nested objects, custom properties, and pluralization
- Small bundle size at less than 700 bytes
- Yes, when I came out with the [name](https://starwars.fandom.com/wiki/Kashyyyk/Legends), I was watching Star Wars

### Installation

```sh
pnpm add kashyyyk
```

### Usage
Add default locale and translations like all major i18n libraries
```ts
import { createI18n } from "kashyyyk";

createI18n({
  locale: "en",
  translations: {
    it: {
      greeting: "Ciao",
    },
    en: {
      greeting: "Hello",
    },
  },
});
```
Use the "t" function to render the translation based on the currently selected locale
```html
<script setup lang="ts">
import { t } from "kashyyyk";
</script>

<template>
  <div>{{ t("greeting") }}</div>
</template>
```

## Other usages
Translation object accepts custom variables and pluralization
```js
import { createI18n } from "kashyyyk";

createI18n({
  locale: "en",
  translations: {
    it: {
      greeting: "Ciao, { name }",
      apples: "Non ci sono mele | C'è una sola mela | Ci sono {count} mele"
    },
    en: {
      greeting: "Hello, { name }",
      apples: "There are no apples | There is 1 apple | There are {count} apples"
    },
  },
});
```
```html
<script setup lang="ts">
import { t } from "kashyyyk";

const count = ref<number>(0)
</script>

<template>
  <div>{{ t("greeting", { name: "Michael J. Fox" }) }}</div>
  <div>{{ t("apples", { count }) }}</div>
</template>
```
