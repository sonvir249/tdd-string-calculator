export const add = (numbers: string): number => {
  let result: number = 0;
  if (numbers === "") return 0;

  result = parseInt(numbers);
  return result;
};
