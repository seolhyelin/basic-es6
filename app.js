//Array.of
const friends = Array.of("nico", "lin", "tosil", "hye");

//Array.from
const buttons = document.querySelectorAll("button");
const arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", () => console.log("a"));
});

//Array.find, Array.findIndex, Array.fill
const emails = [
  "hyelin@gmail.com",
  "tosil@naver.com",
  "yy@hotmail.com",
  "dal@yahoo.com",
];

// const check = () => emails.findIndex((email) => email.includes("yahoo.com"));

// let target = check();

// if (target !== 1) {
//   console.log(target);

//   const username = emails[target].split("@")[0];
//   const email = "korea.com";

//   emails[target] = `${username}@${email}`;
//   target = check();
//   console.log(target);
// }

const check = () => emails.findIndex((email) => email.includes("yahoo.com"));

let target = check();

if (target !== 1) {
  emails.fill("*".repeat(5), target);
}

console.log(emails);
