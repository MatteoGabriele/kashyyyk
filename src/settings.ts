import type { Settings } from "./types";

let settings: Settings = {
  locale: "en",
  fallbackLocale: "en",
  translations: {},
};

export function updateSettings(newSettings: Partial<Settings>): void {
  settings = { ...settings, ...newSettings };
}

export function getSettings(): Settings {
  return settings;
}
