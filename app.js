const amIcute = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "ugly");
});

amIcute.then((result) => console.log(result).catch((err) => console.log(err)));
