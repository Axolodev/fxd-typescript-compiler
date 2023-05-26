export const exampleSquareRootFunction = async (input: any) => {
  if (isNaN(input)) {
    throw new Error("Only numbers are accepted");
  }

  if (input < 0) {
    return { success: false, message: "Cannot square root negative number" };
  } else {
    return { success: true, value: Math.sqrt(input) };
  }
};

export const checkSquareRoot = async (value: number) => {
  const response = await exampleSquareRootFunction(value);

  console.log(response.value.toString());
};
