// Create a new file for create-i18n.ts in the src directory
import { type State, updateState } from "./locale";

export type CreateI18nSettings = Partial<State> &
  Required<Pick<State, "translations" | "locale">>;

export function createI18n(settings: CreateI18nSettings) {
  updateState(settings);
}
