<p align="center">
  <img src="https://i.imgur.com/RebkXfu.png" width="250" />
  <br>
  <a href="https://www.npmjs.com/package/kashyyyk">
    <img src="https://img.shields.io/npm/v/kashyyyk" alt="npm version" />
  </a>
  <a href="https://bundlephobia.com/package/kashyyyk">
    <img src="https://img.shields.io/bundlephobia/minzip/kashyyyk" alt="bundle size" />
  </a>
  <a href="https://github.com/MatteoGabriele/kashyyyk/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/kashyyyk" alt="license" />
  </a>
</p>

 
# kashyyyk
Minimal and lightweight internationalization plugin for Vuejs

## Highlights
- Translate supporting nested objects, custom properties, and pluralization
- Compatible with SSR applications
- No additional dependencies
- Small bundle size of less than 700 bytes

### Playground
A small [sandbox](https://codesandbox.io/p/sandbox/rwllm9) to play around with the library

### Installation

```sh
npm install kashyyyk
```

### Usage
Add default locale and translations.

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

## Custom variables and pluralization
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
  <p>{{ t("greeting", { name: "Yoda" }) }}</p>
  <p>{{ t("lightsabers", { count }) }}</p>

  <button @click="count++">Increase count</button>
</template>

```

## Nested objects

```html
<script setup lang="ts">
import { createI18n, useI18n } from "kashyyyk";

createI18n({
  locale: "en",
  translations: {
    it: {
      message: {
        greeting: "Ciao",
      }
    },
    en: {
      message: {
        greeting: "Hello",
      }
    }
  },
});

const { t } = useI18n()
</script>

<template>
  <div>{{ t("message.greeting") }}</div>
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
      greeting: "Ciao",
    },
    en: {
      greeting: "Hello",
    }
  },
});
</script>

<template>
  <div>
    <p>{{ t("greeting") }}</p>

    <button @click="locale = 'it'">Italian</button>

    <p>current selected language: {{ locale }}</p>
  </div>
</template>
```

## Issues and feature requests

Please report any issues or feature requests you encounter. [https://github.com/MatteoGabriele/kashyyyk/issues](https://github.com/MatteoGabriele/kashyyyk/issues)

Follow me on Bluesky at [matteogabriele.bsky.social](https://bsky.app/profile/matteogabriele.bsky.social) for updates
