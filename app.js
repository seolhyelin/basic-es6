//includes
const isEmail = (email) => email.includes("@");
console.log(isEmail("fdfd@fdfdf.com"));

//repeat
const CC_NUMBER = "6060";
const displayName = `${"*".repeat(10)} ${CC_NUMBER}`;
console.log(displayName);

//startsWith
const myName = "Ms. hyelin";
console.log(myName.startsWith("Ms"));
console.log(myName.endsWith("hyelin"));
