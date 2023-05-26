import { checkSquareRoot } from "./async-await";
import { myFirstPromise } from "./promises";

checkSquareRoot(4);

myFirstPromise.then((successMessage) => {
  console.log(`Yay! ${successMessage}`);
});
