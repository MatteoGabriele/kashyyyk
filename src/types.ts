export type TranslationParams = {
  [key: string]: string | TranslationParams;
};

export type Locale = string;

export type Translation = {
  [K in Locale]?: TranslationParams;
};

export type Settings = {
  locale: Locale;
  fallbackLocale: string;
  translations?: Translation;
};
