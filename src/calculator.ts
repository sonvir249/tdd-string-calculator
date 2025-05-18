export const add = (numbers: string): number => {
  let result: number = 0;
  if (numbers === "") return 0;

  if (numbers.includes(",")) {
    const numberSection: number[] = numbers
      .split(",")
      .map((num) => parseInt(num));
    result = numberSection?.reduce((sum, num) => sum + num, 0);
  } else {
    result = parseInt(numbers);
  }
  return result;
};
