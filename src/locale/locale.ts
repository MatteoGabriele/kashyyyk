import { type Reactive, reactive } from "vue";

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

export const state: Reactive<State> = reactive({
  locale: undefined,
  translations: undefined,
});

export function updateState(newState: Partial<State>): void {
  Object.assign(state, newState);
}
