import { type Config, type Translations, globalConfig } from "@/config";
import {
  type CreateTranslateReturn,
  createTranslate,
} from "@/create-translate";
import { toRefs } from "vue";
import type { ObjectValuesToRefs } from "./utils";

type ConfigPropsAsRefs = ObjectValuesToRefs<
  Pick<Config, "locale" | "translations">
>;

export type UseI18nReturn = {
  t: CreateTranslateReturn;
} & ConfigPropsAsRefs;

export function useI18n(localTranslations?: Translations): UseI18nReturn {
  const { locale, translations } = toRefs(globalConfig);
  const t = createTranslate(localTranslations);

  return {
    locale,
    translations,
    t,
  };
}
