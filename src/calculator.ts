export const add = (numbers: string): number => {
  let result: number = 0;
  if (numbers === "") return 0;

  let delimiters = [",", "\n", ";", "*", "%", ".", "+", "?"];
  let numberString = numbers;

  // Extract all numbers from given string.
  const matches: RegExpMatchArray | null = numbers.match(/\d+/g);

  if (matches) {
    const numberSection: number[] = matches.map((num) => parseInt(num));
    result = numberSection?.reduce((sum, num) => sum + num, 0);
  } else {
    result = parseInt(numbers);
  }

  const delimiterRegex = new RegExp(
    delimiters.map((d) => removeSpecialChars(d)).join("|")
  );

  // Check for different delimiters.
  if (numberString.startsWith("//")) {
    const newLineIndex = numberString.indexOf("\n");
    numberString = numbers.substring(newLineIndex + 1);
  }

  const numberArray = numberString
    .split(delimiterRegex)
    .map((n) => parseInt(n, 10));

  result = numberArray
    .filter((n) => !isNaN(n) && n <= 1000)
    .reduce((acc, val) => acc + val, 0);

  const isNegative = numberArray.filter((n) => n < 0);
  if (isNegative.length) {
    throw new Error(`Negative numbers (${numberString}) are not allowed.`);
  }

  // Check if string contains alphabets
  if (/[a-zA-Z]/.test(numberString)) {
    const anotherNumArr = numberString
      .split(",")
      .filter((val) => Number.isNaN(parseInt(val)));
    throw new Error(`Invalid string. ${anotherNumArr.join(", ")}`);
  }

  return result;
};

function removeSpecialChars(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
