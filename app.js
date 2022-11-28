const getMoviesAsync = async () => {
  try {
    const [moviesRes, upcomingRes] = await Promise.all([
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100"),
      fetch("https://yts.mx/api/v2/list_movies.json"),
    ]);
    const [movies, upcoming] = await Promise.all([
      moviesRes.json(),
      upcomingRes.json(),
    ]);

    console.log(movies, upcoming);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("we are done");
  }
};

getMoviesAsync();
