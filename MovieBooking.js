

document.addEventListener('DOMContentLoaded', async function () {
  const apiKey = "4b2be9e64e0712d7d1fe8de2c9576e11";
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('movieId');

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
        throw new Error('Failed to fetch movie details');
      }

      const movieData = await response.json();
console.log("All Movie:",movieData)
     


      document.getElementById('movie-title').textContent = `Movie : ${movieData.title}`;
      document.getElementById('movie-vote-average').textContent = `Vote Average: ${movieData.vote_average}`;
      document.getElementById('movie-language').textContent = `Language: ${movieData.original_language}`;
      document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w200${movieData.poster_path}`;

     
    } catch (error) {
      console.error('Error:', error);
    }
  }
  else{
    console.error('Movie id null')
  }
  const bookbutton = document.querySelector('button[data-movie-id]');

  if(bookbutton){
    
    bookbutton.addEventListener('click',function(){
      const movieTitle = document.getElementById('movie-title').textContent;
const movieId = urlParams.get('movieId')
      window.location.href = `./booking-page/index.html?movieName=${encodeURIComponent(movieTitle)}&movieId=${movieId}`;
    })
  }
});
