export const add = (numbers: string): number => {
  let result: number = 0;
  if (numbers === "") return 0;

  // Extract all numbers from given string.
  const matches: RegExpMatchArray | null = numbers.match(/\d+/g);

  if (matches) {
    const numberSection: number[] = matches.map((num) => parseInt(num));
    result = numberSection?.reduce((sum, num) => sum + num, 0);
  } else {
    result = parseInt(numbers);
  }
  return result;
};
