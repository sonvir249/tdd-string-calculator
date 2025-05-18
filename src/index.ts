import { add } from "./calculator";

type MockDataType = {
  input: string;
  expected: number;
};
const mockData: MockDataType[] = [{ input: "", expected: 1 }];
console.log("String Calculator Examples:");
console.log("- - - - - - - - - - - - - - - - -");
mockData.forEach((example) => {
  try {
    const result = add(example.input);
    console.log(`Input: "${example.input}"`);
    console.log(`Expected: ${example.expected}, Got: ${result}`);
    console.log(`Test: ${result === example.expected ? "✅ PASS" : "❌ FAIL"}`);
    console.log("--------------------------");
  } catch (error) {
    console.log(`Input: "${example.input}"`);
    console.log(`Error: ${(error as Error).message}`);
    console.log("--------------------------");
  }
});
