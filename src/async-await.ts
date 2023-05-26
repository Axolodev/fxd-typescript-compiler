const func = () => ":wave:";
const asyncFunc = async () => ":wave:";

const myString = func();
const myPromiseString = asyncFunc();

myString.length;

// @ts-expect-error
myPromiseString.length;

const myWrapperFunction = async () => {
  const myString = func();
  const myResolvedPromiseString = await asyncFunc();

  myString.length;
  myResolvedPromiseString.length;
};

const myThrowingFunction = async () => {
  throw new Error("Do not call this");
};

const asyncFunctionCatching = async () => {
  const myReturnValue = "Hello world";
  try {
    await myThrowingFunction();
  } catch (error) {
    console.error("myThrowingFunction failed", error);
  }
  return myReturnValue;
};

const exampleSquareRootFunction = async (input: any) => {
  if (isNaN(input)) {
    throw new Error("Only numbers are accepted");
  }

  if (input < 0) {
    return { success: false, message: "Cannot square root negative number" };
  } else {
    return { success: true, value: Math.sqrt(input) };
  }
};

const checkSquareRoot = async (value: number) => {
  const response = await exampleSquareRootFunction(value);
  if (response.success) {
    response.value;
  }
};
