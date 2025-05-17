import {
  type Locale,
  type Translation,
  type Translations,
  globalConfig,
} from "@/config";
import interpolate, { type InterpolableParams } from "@/interpolate";
import { get } from "@/utils";

function translateInline(
  key: string,
  params?: InterpolableParams,
  translation?: Translation,
): string {
  if (!translation) {
    return key;
  }

  const value = get(key, translation);

  if (value === "") {
    return key;
  }

  if (params) {
    return interpolate(value, params);
  }

  return value;
}

export type CreateTranslateReturn = (
  key: string,
  params?: InterpolableParams,
) => string;

export function createTranslate(
  translations?: Translations,
): CreateTranslateReturn {
  return (key, params): string => {
    const locale: Locale = globalConfig.locale;
    const translation = translations?.[locale];

    const value = translateInline(key, params, translation);

    if (value === key) {
      const globalTranslation = globalConfig?.translations?.[locale];
      return translateInline(key, params, globalTranslation);
    }

    return value;
  };
}
