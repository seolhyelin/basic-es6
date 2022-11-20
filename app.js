const p1 = new Promise((res, reject) => {
  setTimeout(reject, 4000, "fist");
})
  .then((value) => console.log(value))
  .catch(() => console.log("err"))
  .finally(() => console.log("im done"));
