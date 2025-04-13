import { type TranslationParams, useLocale } from "@/locale";
import { get } from "@/utils";

export type InterpolateParams = TranslationParams | { count: number };
export type TranslateParams = InterpolateParams;

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

  const betweenCurlyBracesRegEx = new RegExp(/\{.*?}s?/g);
  const matchedCurlies = message.match(betweenCurlyBracesRegEx);

  if (matchedCurlies) {
    newMessage = matchedCurlies.reduce((processedMessage, match) => {
      const prop = match.slice(1, -1);

      if (!(prop in params)) {
        return processedMessage;
      }

      const value = params[prop as keyof InterpolateParams];

      if (typeof value === "string" || typeof value === "number") {
        return processedMessage.replace(match, String(value));
      }

      return processedMessage;
    }, newMessage);
  }

  return newMessage;
}

export function t(key: string, params?: TranslateParams): string {
  const { translations, locale } = useLocale();

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
