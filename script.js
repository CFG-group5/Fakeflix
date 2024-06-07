const API_KEY='4b50fd6e468f284fd0466f123de95dc7'
const BASE_URL='https://api.themoviedb.org/3'
const IMG_URL='https://image.tmdb.org/t/p/original'

async function fetchMovies() {
   const response =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();

   data.results.forEach(movie => {
    const title = movie.title;
    const poster = movie.poster_path;
    const overview = movie.overview;

    const movieElement = `
    <div class="col-3">
    <div class="card text-bg-dark w-50">
        <img src=${IMG_URL}${poster} class="card-img" alt="...">
        <div class="card-img-overlay">
        <h5 class="card-title">${title}</h5>
        </div>
    </div>
    </div>
    `

    document.getElementById('popular-movies').innerHTML += movieElement;
});
}

fetchMovies();


