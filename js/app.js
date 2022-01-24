//Initial values
const API_KEY = '06b1e9fe218434d21b484d4ee3d86969';
const endpoint = 'https://api.themoviedb.org/3/search/movie?api_key=06b1e9fe218434d21b484d4ee3d86969&query';


//Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');




function search(event) {
    event.preventDefault();
    const value = inputElement.value;
    const url = `${endpoint}=${value}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('Data ', data)
        })
        .catch(error => {
            console.log('Error ', error);
        });
  
}