//array spread
const friends = [1, 2, 3];
const family = ["a", "b", "c"];

console.log([...friends, ...family]);
console.log(friends);
console.log(...friends);

//object spread
const sexy = {
  name: "nico",
  age: 24,
};

const hello = {
  sexy: true,
  hello: "hello",
};

console.log({ ...sexy, ...hello });
