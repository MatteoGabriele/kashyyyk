import { updateSettings } from "./settings";
import { t } from "./translate";

updateSettings({
  translations: {
    en: {
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

  // it.todo("should translate with counters", () => {
  //   expect(t("counting", { count: 0 })).toEqual("there are 0 numbers");
  //   expect(t("counting", { count: 1 })).toEqual("there is 1 number");
  //   expect(t("counting", { count: 5 })).toEqual("there are 5 numbers");
  // });
});
