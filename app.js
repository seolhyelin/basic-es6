const p1 = new Promise((res) => {
  setTimeout(res, 10000, "fist");
});
const p2 = new Promise((res, reject) => {
  setTimeout(reject, 1000, "hate JS");
});
const p3 = new Promise((res) => {
  setTimeout(res, 4000, "third");
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
