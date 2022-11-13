const amIcute = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "yes you are");
});

console.log(amIcute);
// setInterval(console.log, 1000, amIcute);
