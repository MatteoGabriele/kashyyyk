<p align="center">
  <img src="https://i.imgur.com/RebkXfu.png" width="250" />
  <br>
  <a href="https://npm.im/kashyyyk">
    <img src="https://img.shields.io/npm/v/kashyyyk">
  </a>
  <a href="https://bundlephobia.com/result?p=kashyyyk">
    <img src="https://img.shields.io/bundlephobia/minzip/kashyyyk/latest">
  </a>
</p>

# kashyyyk
Minimal and lightweight internationalization plugin for Vuejs

## Highlights
- Translate supporting nested objects, custom properties, and pluralization
- Small bundle size at less than 700 bytes

### Installation

```sh
npm install kashyyyk
```

### Usage
Add default locale and translations like all major i18n libraries.
Use the "t" function to render the translation based on the selected locale.
```html
<script setup lang="ts">
import { createI18n, useI18n } from "kashyyyk";

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

const { t } = useI18n()
</script>

<template>
  <div>{{ t("greeting") }}</div>
</template>
```

## Other translation options
Translation object accepts custom variables and pluralization
```html
<script setup lang="ts">
import { ref } from "vue";
import { createI18n, useI18n } from "kashyyyk";

createI18n({
  locale: "en",
  translations: {
    it: {
      greeting: "Che la Forza ti guidi, Maestro {name}",
      lightsabers:
        "Non ci sono spade laser | C'è una sola spada laser | Ci sono {count} spade laser",
    },
    en: {
      greeting: "May the Force guide you, Master {name}",
      lightsabers:
        "There are no lightsabers | There is 1 lightsaber | There are {count} lightsabers",
    },
  },
});

const { t } = useI18n();
const count = ref<number>(0);
</script>

<template>
  <p>{{ t("lightsabers", { count }) }}</p>

  <button @click="count++">Increase count</button>
</template>

```

## Change locale
```html
<script setup lang="ts">
import { createI18n, useI18n } from "kashyyyk";

const { t, locale } = useI18n();

createI18n({
  locale: "en",
  translations: {
    it: {
      lightsabers:
        "Non ci sono spade laser | C'è una sola spada laser | Ci sono {count} spade laser",
    },
    en: {
      lightsabers:
        "There are no lightsabers | There is 1 lightsaber | There are {count} lightsabers",
    },
  },
});
</script>

<template>
  <div>
    <p>{{ t("lightsabers", { count: 1 }) }}</p>

    <button @click="locale = 'it'">Italian</button>

    <p>current selected language: {{ locale }}</p>
  </div>
</template>
```

