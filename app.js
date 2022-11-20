const p1 = new Promise((res) => {
  setTimeout(res, 10000, "fist");
});
const p2 = new Promise((res, reject) => {
  setTimeout(reject, 5000, "hate JS");
});
const p3 = new Promise((res) => {
  setTimeout(res, 3000, "third");
});

Promise.race([p1, p2, p3])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
