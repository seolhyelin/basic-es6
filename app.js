const friends = ["nico", "lyn"];

const newFriends = [...friends, "dal"];
// console.log(newFriends);

const nico = {
  username: "nico",
};

// console.log({ ...nico, password: 1234 });
const lastName = prompt("last name");
const user = {
  users: "nico",
  age: 24,
  ...(lastName !== "" && { lastName }),
};
console.log(user);
