
//Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const moviesearchable = document.querySelector('#movies-searchable');
const moviesContainer = document.querySelector('#movies-container');
const mainContent = document.querySelector('.main');

buttonElement.addEventListener('click', search);

function movieSection(movies) {
    const section = document.createElement('section');
    section.classList = 'section';
    movies.map((movie) => {
        if (movie.poster_path) {
            const img = document.createElement('img');
            img.src = IMAGE_URL + movie.poster_path
            img.setAttribute('data-movie-id', movie.id);
            section.appendChild(img);
        }
       
    })
    return section;
}

function createMovieContainer(movies, title = '') {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const header = document.createElement('h2');
    header.innerHTML = title;
    const content = document.createElement('div');
    content.classList = 'content';
    const contentClose = `<p id="content-close">X</p>`;
    content.innerHTML = contentClose;
    const section = movieSection(movies);
    
    movieElement.appendChild(header);
    movieElement.appendChild(section);
    movieElement.appendChild(content);
    return movieElement;
}

function renderSearch(data) {
     //data.results[]
    const movies = data.results;
    moviesearchable.innerHTML = '';
    const movieBlock = createMovieContainer(movies);
    moviesearchable.appendChild(movieBlock);
    console.log('Data ', data)
}

function renderMovies(data) {
    //data.results[]
    const movies = data.results;
    const movieBlock = createMovieContainer(movies, this.title);
    moviesContainer.appendChild(movieBlock);
    console.log('Data ', data)
}


function handleError(error) {
    console.log('Error', error);
}

function search(event) {
    event.preventDefault();
    const value = inputElement.value;
    searchMovie(value);
    
    inputElement.value = '';
}

