import { globalConfig, resetConfig, setConfig } from "@/config";

describe("config", () => {
  beforeEach(resetConfig);

  it("should update the config properties", () => {
    setConfig({
      locale: "it",
      translations: {
        it: {
          greetings: "ciao",
        },
      },
    });

    expect(globalConfig).toEqual({
      locale: "it",
      translations: {
        it: {
          greetings: "ciao",
        },
      },
    });
  });

  it("should return the config properties", () => {
    expect(globalConfig).toEqual({
      locale: "en",
      translations: {},
    });
  });
});
