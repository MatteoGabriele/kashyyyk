import type { App } from "vue";
import { t } from "./translate";

type Locale = string;

type TranslationParams = {
  [text: string]: string | TranslationParams;
};

type Translation = {
  [K in Locale]?: TranslationParams;
};

type Settings = {
  locale?: Locale;
  fallbackLocale?: string;
  translations: Translation;
};

// type InterpolateParams = Record<string, string>;

// function interpolate(key: string, params?: InterpolateParams): string {
//   if (!params) {
//     return key;
//   }

//   const betweenCurlyBracesRegEx = new RegExp(/\{.*?}s?/g);
//   const matchedCurlies = key.match(betweenCurlyBracesRegEx);
//   const paramsKeys = Object.keys(params);

//   if (!matchedCurlies) {
//     return key;
//   }

//   let translation = "";

//   matchedCurlies.forEach((match, i) => {
//     const prop = match.slice(1, -1);
//     const value = params[prop];

//     if (!value) {
//       return;
//     }

//     translation = key.replace(match, value);
//   });

//   return translation;
// }

export function createKashyyyk() {
  return (app: App) => {
    app.config.globalProperties.$t = t;
  };
}
