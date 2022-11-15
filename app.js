const amIcute = new Promise((resolve, reject) => {
  resolve(3);
});

const timesThird = (n) => n * 2;

amIcute
  .then(timesThird)
  .then(timesThird)
  .then(timesThird)
  .then(timesThird)
  .then(timesThird)
  .then(() => {
    throw Error("wrong!");
  })
  .then((lastNumber) => console.log(lastNumber))
  .catch((err) => console.log(err));
