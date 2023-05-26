import { exampleSquareRootFunction } from "./async-await";

const testUtil = (value: string) => {
  return value;
};

describe("async-await", () => {
  it("Should find the square root of a number", async () => {
    const result = await exampleSquareRootFunction(4);
    console.log({ result });
    expect(result).toEqual({ success: true, value: 2 });
  });
});
