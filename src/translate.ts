import type { Translation } from "@/config";
import { useI18n } from "@/use-i18n";
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

  const matchedCurlies = message.match(CURLY_BRACES_REGEX);

  if (matchedCurlies) {
    newMessage = matchedCurlies.reduce((acc, match) => {
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

export function t(key: string, params?: TranslateParams): string {
  const { translations, locale } = useI18n();

  if (!locale?.value || !translations?.value) {
    return key;
  }

  const translationValue = translations.value[locale.value];

  if (!translationValue || typeof translationValue === "string") {
    return key;
  }

  const value = get(key, translationValue);

  if (value === "") {
    return key;
  }

  if (params) {
    return interpolate(value, params);
  }

  return value;
}
