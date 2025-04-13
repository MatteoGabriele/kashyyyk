import { type ComputedRef, type Reactive, computed, reactive } from "vue";

export type TranslationParams = {
  [key: string]: string | TranslationParams;
};

export type Locale = string;

export type Translations = {
  [K in Locale]?: TranslationParams;
};

export type State = {
  locale: Locale | undefined;
  translations: Translations | undefined;
};

const state: Reactive<State> = reactive({
  locale: undefined,
  translations: undefined,
});

export type UseLocaleReturn = {
  changeLocale: (locale: Locale) => void;
  locale: ComputedRef<State["locale"]>;
  translations: ComputedRef<State["translations"]>;
};

export function useLocale(): UseLocaleReturn {
  function changeLocale(locale: Locale): void {
    if (state.locale === locale) {
      return;
    }

    state.locale = locale;
  }

  const locale = computed(() => state.locale);
  const translations = computed(() => state.translations);

  return {
    locale,
    translations,
    changeLocale,
  };
}

export function updateState(newState: Partial<State>): void {
  Object.assign(state, newState);
}
