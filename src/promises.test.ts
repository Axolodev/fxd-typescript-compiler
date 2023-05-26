import { myFirstPromise } from "./promises";

const testUtil = (value: string) => {
  return value;
};

describe("promises", () => {
  it("Should resolve to success", () => {
    const result = myFirstPromise.then((successMessage) => {
      expect(successMessage).toEqual("Success!");
    });
  });
});
