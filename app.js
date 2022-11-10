//swapping
let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, sat];

//skipping
const days = ["m", "t", "w", "t", "f"];

const [, , , t, f] = days;

console.log(t, f);
