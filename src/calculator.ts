export const add = (numbers: string): number => {
  let result: number = 0;
  if (numbers === "") return 0;

  let delimiters = [",", "\n"];
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
    delimiters.map((d) => escapeRegExp(d)).join("|")
  );
  const numArray = numberString
    .split(delimiterRegex)
    .map((n) => parseInt(n, 10));

  result = numArray
    .filter((n) => !isNaN(n) && n <= 1000)
    .reduce((acc, val) => acc + val, 0);
  return result;
};

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
