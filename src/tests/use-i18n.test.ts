import { resetConfig } from "@/config";
import { createI18n } from "@/create-i18n";
import { useI18n } from "@/use-i18n";

describe("useI18n", () => {
  beforeEach(() => {
    createI18n({
      locale: "en",
      translations: {
        en: {
          greeting: "hello",
        },
      },
    });
  });

  afterEach(() => {
    resetConfig();
  });

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

  it("should translate using local translation object", () => {
    const { t } = useI18n({
      en: {
        name: "Name",
      },
    });

    expect(t("name")).toEqual("Name");
  });

  it("should translate using local translation object and fallback to global", () => {
    createI18n({
      locale: "en",
      translations: {
        en: {
          name: "Global name",
        },
      },
    });

    const { t } = useI18n({
      en: {
        hello: "Hi",
      },
    });

    expect(t("name")).toEqual("Global name");
    expect(t("hello")).toEqual("Hi");
  });
});
