import { add } from "../calculator";
describe("String calculator", () => {
  test("Empty string should return 0", () => {
    expect(add("")).toBe(0);
  });
});
