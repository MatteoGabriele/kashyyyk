import { type Reactive, reactive, toRefs } from "vue";
import type { Settings } from "./types";

const settings: Reactive<Settings> = reactive({
  locale: "en",
  fallbackLocale: "en",
});

export type UseLocaleReturn = {
  changeLocale: (locale: string) => void;
};

export function useLocale() {
  function changeLocale(locale: string): void {
    if (settings.locale === locale) {
      return;
    }

    settings.locale = locale;
  }

  return {
    ...toRefs(settings),
    changeLocale,
  };
}

export function updateSettings(newSettings: Partial<Settings>): void {
  Object.assign(settings, newSettings);
}
