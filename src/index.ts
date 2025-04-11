import { ref } from "vue";
import { updateSettings } from "./settings";
import type { Settings } from "./types";

export const locale = ref<string>("en");
export function changeLocale(newLocale: string): void {
  locale.value = newLocale;
}

export function createKashyyyk(settings: Partial<Settings>) {
  updateSettings(settings);
}

export { t } from "./translate";
