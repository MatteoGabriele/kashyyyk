import { setConfig } from "@/config";
import { createI18n } from "@/create-i18n";

vi.mock("@/config");

describe("createI18n", () => {
  it("should set new config parameters", () => {
    const config = {
      locale: "en",
      translations: {
        en: {
          greetings: "ciao",
        },
      },
    };

    createI18n(config);

    expect(setConfig).toHaveBeenCalledWith(config);
  });
});
