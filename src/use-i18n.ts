import { type Config, globalConfig } from "@/config";
import { t } from "@/translate";
import { type Ref, toRefs } from "vue";

export type UseI18nReturn = {
  locale: Ref<Config["locale"]>;
  translations: Ref<Config["translations"]>;
  t: typeof t;
};

export function useI18n(): UseI18nReturn {
  return {
    ...toRefs(globalConfig),
    t,
  };
}
