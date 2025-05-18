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
    expect(add("1\n2,3")).toBe(6);
  });

  test("Negative numbers should throw an error.", () => {
    expect(() => {
      add("-1,-2");
    }).toThrow("Negative numbers (-1,-2) are not allowed.");
  });

  test("Check support for all delimiter.", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("Numbers bigger than 1000 should be ignored.", () => {
    expect(add("3,1001")).toBe(3);
  });

  test("Check Delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
});
