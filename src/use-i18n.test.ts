import { createI18n } from "@/create-i18n";
import { useI18n } from "@/use-i18n";

createI18n({
  locale: "en",
  translations: {
    en: {
      greeting: "hello",
    },
  },
});

describe("useI18n", () => {
  it("should return locale", () => {
    const { locale } = useI18n();
    expect(locale.value).toEqual("en");
  });

  it("should return translations", () => {
    const { translations } = useI18n();
    expect(translations.value).toEqual({
      en: {
        greeting: "hello",
      },
    });
  });

  it("should return translate method", () => {
    const { t } = useI18n();
    expect(t).toBeDefined();
  });
});
