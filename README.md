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

### Installation

```sh
npm install kashyyyk
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
    }
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
      greeting: "Che la Forza ti guidi, Maestro { name }",
      lightsabers: "Non ci sono spade laser | C'è una sola spada laser | Ci sono {count} spade laser",
    },
    en: {
      greeting: "May the Force guide you, Master { name }",
      lightsabers: "There are no lightsabers | There is 1 lightsaber | There are {count} lightsabers",
    }
  },
});
```
```html
<script setup lang="ts">
import { t } from "kashyyyk";

const count = ref<number>(0)
</script>

<template>
  <div>{{ t("greeting", { name: "Yoda" }) }}</div>
  <div>{{ t("lightsabers", { count }) }}</div>
</template>
```
