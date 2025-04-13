import { updateSettings } from "./settings";
import type { Settings } from "./types";

export function createI18n(settings: Partial<Settings>) {
  updateSettings(settings);
}

export { t } from "./translate";
export { useLocale } from "./settings";
