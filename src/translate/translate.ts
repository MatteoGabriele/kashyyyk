import { type TranslationParams, useLocale } from "@/locale";
import { get } from "@/utils";

function interpolate(message: string, params: TranslationParams): string {
  if (!params) {
    return message;
  }

  const betweenCurlyBracesRegEx = new RegExp(/\{.*?}s?/g);
  const matchedCurlies = message.match(betweenCurlyBracesRegEx);
  const paramsKeys = Object.keys(params);

  let newMessage = message;

  if (!matchedCurlies) {
    return message;
  }

  matchedCurlies.forEach((match, i) => {
    const prop = match.slice(1, -1);
    const value = params[prop];
    const paramKey = paramsKeys[i];

    if ((!value && paramKey) || typeof value !== "string") {
      return message;
    }

    newMessage = newMessage.replace(match, value);
  });

  return newMessage;
}

export function t(key: string, params?: TranslationParams): string {
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
