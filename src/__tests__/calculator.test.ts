import { add } from "../calculator";
describe("TDD String calculator", () => {
  test("Empty string should return 0", () => {
    expect(add("")).toBe(0);
  });

  test("Single number string should return number", () => {
    expect(add("1")).toBe(1);
    expect(add("3")).toBe(3);
  });
});
