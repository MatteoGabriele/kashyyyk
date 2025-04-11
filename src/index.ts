import { updateSettings } from "./settings";
import type { Settings } from "./types";

export function createKashyyyk(settings: Partial<Settings>) {
  updateSettings(settings);
}
