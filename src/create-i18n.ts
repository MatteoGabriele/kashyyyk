import { type Config, setConfig } from "@/config";

export function createI18n(config: Partial<Config>) {
  setConfig(config);
}
