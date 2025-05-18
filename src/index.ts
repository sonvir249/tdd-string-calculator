import { add } from "./calculator";

type MockDataType = {
  input: string;
  expected: number;
};
const mockData: MockDataType[] = [
  { input: "", expected: 0 },
  { input: "2", expected: 2 },
  { input: "1,3", expected: 4 },
  { input: "1\n2,3", expected: 6 },
];
console.log("String Calculator Examples:");
console.log("--------------------------");
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
