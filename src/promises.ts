export const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});
