import type { Ref } from "vue";

export type ObjectValuesToRefs<T extends object> = {
  [K in keyof T]: Ref<T[K]>;
};

export type Obj = {
  [key: string]: string | Obj;
};

export function get(path: string, obj: Obj): string {
  const keys = path.split(".");
  let value: string | Obj = obj;

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
