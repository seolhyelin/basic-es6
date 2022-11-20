fetch("https://yts.torrentbay.to/api/v2/list_movies.json")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => console.log(json))
  .catch((e) => console.log(`🔥${e}`));
