import { add } from "../calculator";
describe("TDD String calculator", () => {
  test("Empty string should return 0", () => {
    expect(add("")).toBe(0);
  });

  test("Single number string should return number", () => {
    expect(add("1")).toBe(1);
    expect(add("3")).toBe(3);
  });

  test("Comma sperated number string should return sum of number", () => {
    expect(add("1,3")).toBe(4);
  });

  test("Handles new lines between numbers should return sum of number", () => {
    expect(add("1,\n2,3")).toBe(6);
  });
});
