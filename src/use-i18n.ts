// Create a new file for use-i18n.ts in the src directory
import { type State, state } from "@/locale";
import { t } from "@/translate";
import { type Ref, toRefs } from "vue";

export type UseI18nReturn = {
  locale: Ref<State["locale"]>;
  translations: Ref<State["translations"]>;
  t: typeof t;
};

export function useI18n(): UseI18nReturn {
  return {
    ...toRefs(state),
    t,
  };
}
