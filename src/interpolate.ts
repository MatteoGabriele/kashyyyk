import type { Translation } from "@/config";

export type InterpolableParams = Translation | { count: number };

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

  for (const key in params) {
    const value = String(params[key as keyof typeof params]);
    newMessage = newMessage.split(`{${key}}`).join(value);
  }

  return newMessage;
}
