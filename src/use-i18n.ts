import { type Config, type Translations, globalConfig } from "@/config";
import { type Translate, createTranslate } from "@/translate";
import { type Ref, toRefs } from "vue";

export type UseI18nReturn = {
  locale: Ref<Config["locale"]>;
  translations: Ref<Config["translations"]>;
  t: Translate;
};

export function useI18n(localTranslations?: Translations): UseI18nReturn {
  const t = createTranslate(localTranslations);

  return {
    ...toRefs(globalConfig),
    t,
  };
}
