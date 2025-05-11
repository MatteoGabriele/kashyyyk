import {
  type Locale,
  type Translation,
  type Translations,
  globalConfig,
} from "@/config";
import { get } from "@/utils";

export type InterpolateParams = Translation | { count: number };
export type TranslateParams = InterpolateParams;

const CURLY_BRACES_REGEX = /\{(.*?)}/g;

function interpolate(message: string, params: InterpolateParams): string {
  if (!params) {
    return message;
  }

  let newMessage = message;

  const messagesPiped = message.split("|").map((pipe) => pipe.trim());

  if ("count" in params && messagesPiped.length > 1) {
    const count = params.count;

    if (count === 0 && messagesPiped.length >= 1) {
      newMessage = messagesPiped[0];
    } else if (count === 1 && messagesPiped.length >= 2) {
      newMessage = messagesPiped[1];
    } else if (messagesPiped.length >= 3) {
      newMessage = messagesPiped[2];
    }
  }

  const matched = message.match(CURLY_BRACES_REGEX);

  if (matched) {
    newMessage = matched.reduce((acc, match) => {
      const paramKey = match.slice(1, -1);

      if (!(paramKey in params)) {
        return acc;
      }

      const paramValue = params[paramKey as keyof InterpolateParams];

      if (typeof paramValue !== "string" && typeof paramValue !== "number") {
        return acc;
      }

      return acc.replace(match, String(paramValue));
    }, newMessage);
  }

  return newMessage;
}

function translate(
  key: string,
  params?: TranslateParams,
  translation?: Translation,
): string {
  if (!translation) {
    return key;
  }

  if (!translation || typeof translation === "string") {
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

export type Translate = typeof translate;

export function createTranslate(
  translations: Translations,
  locale?: Locale,
): Translate {
  const translation = locale ? translations[locale] : undefined;

  return (key, params) => {
    const value = translate(key, params, translation);

    if (value === key) {
      const globalTranslation = locale
        ? globalConfig.translations[locale]
        : undefined;

      return translate(key, params, globalTranslation);
    }

    return value;
  };
}
