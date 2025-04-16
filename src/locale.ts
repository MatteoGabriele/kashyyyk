import { reactive } from "vue";

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

export const state = reactive<State>({
  locale: undefined,
  translations: undefined,
});

export function setState(newState: Partial<State>): void {
  Object.assign(state, newState);
}
