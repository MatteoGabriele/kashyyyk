import { reactive } from "vue";

export type Translation = {
  [key: string]: string | Translation;
};

export type Locale = string;

export type Translations = {
  [K in Locale]?: Translation;
};

export type Config = {
  locale: Locale | undefined;
  translations: Translations;
};

const defaultGlobalConfig = {
  locale: undefined,
  translations: {},
} as const;

export const globalConfig = reactive<Config>({
  ...defaultGlobalConfig,
});

export function resetConfig(): void {
  setConfig(defaultGlobalConfig);
}

export function setConfig(config?: Partial<Config>): Config {
  if (config) {
    return Object.assign(globalConfig, config);
  }

  return globalConfig;
}
