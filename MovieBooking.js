// document.addEventListener('DOMContentLoaded', async function () {
//   // Get the movie ID from the URL's query parameters
//   const urlParams = new URLSearchParams(window.location.search);
//   const movieId = urlParams.get('movieId');
//   const apiKey = urlParams.get('apiKey')

//   if (movieId) {
//     // Fetch movie details using the movieId
//     const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
//     try {
//       const response = await fetch(movieDetailUrl, {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer ${apiKey}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch movie details');
//       }

//       const movieData = await response.json();

//       document.getElementById('movie-title').textContent = `Movie Title: ${movieData.title}`;
//       document.getElementById('movie-vote-average').textContent = `Vote Average: ${movieData.vote_average}`;
//       document.getElementById('movie-language').textContent = `Language: ${movieData.original_language}`;
//       document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w200${movieData.poster_path}`;
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", async function () {
  const apiKey = "4b2be9e64e0712d7d1fe8de2c9576e11";
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("movieId");
  if (movieId) {
    const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    try {
      const response = await fetch(movieDetailUrl, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }

      const movieData = await response.json();
      console.log(movieData);

      // Populate the HTML elements with movie details
      document.querySelector(
        ".movie-title"
      ).textContent = `Movie Title: ${movieData.title}`;

      document.querySelector(".movie-vote-average").textContent = Number(
        `${movieData.vote_average}`
      ).toFixed(2);

      document.querySelector(
        ".description"
      ).textContent = `${movieData.overview}`;

      document.querySelector(
        ".movie-tagline"
      ).textContent = `${movieData.tagline}`;

      // document.querySelector(
      //   ".movie-language"
      // ).textContent = `Language: ${movieData.original_language}`;
      document.querySelector(
        ".movie-poster"
      ).src = `https://image.tmdb.org/t/p/w200${movieData.poster_path}`;
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    console.error("Movie id null");
  }
});
