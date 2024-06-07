const API_KEY='4b50fd6e468f284fd0466f123de95dc7'
const BASE_URL='https://api.themoviedb.org/3'
const IMG_URL='https://image.tmdb.org/t/p/original'

// Fetching the movie and tv shows data
async function fetchData(url) {
    try{
        const response =  await fetch(`${BASE_URL}${url}?api_key=${API_KEY}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.results;
    }catch(error){
        console.log('no data found',error);
    }
}

// display the movie and tv shows as a card element
async function displayData(results,containerId) {
        const container = document.getElementById(containerId);

        results.forEach(movie => {
        const title = movie.title;
        const poster = movie.poster_path;
    
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
    
        container.innerHTML += movieElement;
    });
}

// Gets the trending movies and tv shows
async function getTrendingAll() {
    const result = await fetchData('/trending/all/week');
    displayData(result,'trending-all');
}

async function getGenres(){
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    
    data.genres.forEach(genre => {
        const name = genre.name;

        const genreElement = `
        <li><a class="dropdown-item" href="#">${name}</a></li>
        `;

        document.getElementById('genre-list').innerHTML += genreElement;
    });

}

async function main() {
    getTrendingAll();
}

// Entry point ---- Im disabling all the api calls until we have our general layout ready
//main()
getGenres()


