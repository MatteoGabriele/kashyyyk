import { globalConfig, resetConfig, setConfig } from "@/config";

describe("config", () => {
  beforeEach(resetConfig);

  it("should update the config properties", () => {
    setConfig({
      locale: "en",
      translations: {
        en: {
          greetings: "hello",
        },
      },
    });

    expect(globalConfig).toEqual({
      locale: "en",
      translations: {
        en: {
          greetings: "hello",
        },
      },
    });
  });

  it("should return the config properties", () => {
    expect(globalConfig).toEqual({
      locale: undefined,
      translations: {},
    });
  });
});
