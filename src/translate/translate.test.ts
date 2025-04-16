import { createI18n } from "@/create-i18n/create-i18n";
import { t } from "@/translate/translate";

createI18n({
  locale: "en",
  translations: {
    en: {
      apples:
        "there are 0 apples | there is 1 apple | there are {count} apples",
      hello: "ciao",
      greeting: {
        hello: "ciao",
      },
      dynamicGreeting: {
        hello: "ciao, {name}",
      },
    },
  },
});

describe("translate", () => {
  it("should translate from a single key", () => {
    expect(t("hello")).toEqual("ciao");
  });

  it("should return the key if not matched", () => {
    expect(t("foo")).toEqual("foo");
  });

  it("should translate from a chain of keys", () => {
    expect(t("greeting.hello")).toEqual("ciao");
  });

  it("should return the key from a chain of keys if not matched", () => {
    expect(t("foo.bar")).toEqual("foo.bar");
  });

  it("should translate using parameters", () => {
    expect(t("dynamicGreeting.hello", { name: "Matteo" })).toEqual(
      "ciao, Matteo",
    );
  });

  it("should translate with counters", () => {
    expect(t("apples", { count: 0 })).toEqual("there are 0 apples");
    expect(t("apples", { count: 1 })).toEqual("there is 1 apple");
    expect(t("apples", { count: 5 })).toEqual("there are 5 apples");
  });
});
