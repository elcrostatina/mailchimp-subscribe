export const replace = (
  str: string,
  search: string,
  stringToReplace: string,
): string => {
  return str.split(search).join(stringToReplace);
};
