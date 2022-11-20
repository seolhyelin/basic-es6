const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(`🔥${e}`));
};

const getMoviesAsync = async () => {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json");
  console.log(response);
  const json = await response.json();
  console.log(json);
};

getMoviesAsync();
