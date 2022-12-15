const isObject = (inputObject: unknown) => {
  return (
    inputObject === Object(inputObject) &&
    !Array.isArray(inputObject) &&
    typeof inputObject !== 'function'
  );
};

export const toCamel = (str: string) => {
  return str.replace(/([-_][a-z,0-9])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const keysToCamel = <T>(input: T): T => {
  if (isObject(input)) {
    return Object.keys(input as Object).reduce((acc, curr) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[toCamel(curr)] = keysToCamel(input[curr]);
      return acc;
    }, {} as T);
  } else if (Array.isArray(input)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return input.map((element: unknown) => keysToCamel(element)) as T;
  }

  return input;
};
