import { get } from "@/utils";

describe("utils", () => {
  describe("get", () => {
    it("should return the value of an object using single string", () => {
      expect(
        get("greeting", {
          greeting: "hello",
        }),
      ).toEqual("hello");
    });

    it("should return the value of an object using dot-notation string", () => {
      expect(
        get("message.greeting", {
          message: {
            greeting: "hello",
          },
        }),
      ).toEqual("hello");
    });
  });
});
