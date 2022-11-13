//intro rest
const best = (first, ...rest) => {
  // console.log(`my bf is ${first}`);
  // console.log(rest);
};

best("nic", "llin", "hye", "seol");

//ex1
const user = {
  NAME: "nico",
  age: 24,
  password: 12344,
};

const killPassword = ({ password, ...rest }) => rest;
const cleanUser = killPassword(user);
// console.log(cleanUser);

//ex2
const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
console.log(setCountry(user));

//ex3
const rename = ({ name: NAME, ...rest }) => ({ NAME, ...rest });
console.log(rename(user));
