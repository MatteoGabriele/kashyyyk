import type { Translation } from "@/config";

export type InterpolableParams = Translation | { count: number };

const CURLY_BRACES_REGEX = /\{(.*?)}/g;

export default function interpolate(
  message: string,
  params: InterpolableParams,
): string {
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

      const paramValue = params[paramKey as keyof InterpolableParams];

      if (typeof paramValue !== "string" && typeof paramValue !== "number") {
        return acc;
      }

      return acc.replace(match, String(paramValue));
    }, newMessage);
  }

  return newMessage;
}
