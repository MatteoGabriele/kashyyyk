import { getSettings } from "./settings";
import type { GetObject, TranslationParams } from "./types";

function get(path: string, obj: GetObject): string {
  const keys = path.split(".");
  let value: string | GetObject = obj;

  for (const key of keys) {
    if (value && typeof value === "object") {
      value = value[key];
    } else {
      return "";
    }
  }

  if (typeof value !== "string") {
    return path;
  }

  return value;
}

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
  const { translations, locale } = getSettings();

  if (!locale) {
    return key;
  }

  const translationValue = translations[locale];

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
