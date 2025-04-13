import { type State, updateState } from "@/locale";

export type CreateI18nSettings = Partial<State> &
  Required<Pick<State, "translations" | "locale">>;

export function createI18n(settings: CreateI18nSettings) {
  updateState(settings);
}
