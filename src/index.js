
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import './sass/style.scss';
import fetchBreeds from './cat-api';


const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
const API_KEY = 'live_ElfNqG1A6LxQDUvEjyqhDuKkS9zS1LRBUqjgCRVdelkDf9pYA3gDazSNNgA9RaaT';
const searchForm = document.querySelector('.breed-select');
const showInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
let numberBreeds = [];
searchForm.addEventListener('input', onSearch);



   fetchBreeds().then((data) => {
      // console.log(data)
      loader.textContent = '';
      numberBreeds = data;
      // console.log(numberBreeds);
      for (let i = 0; i < numberBreeds.length; i += 1) {
        const breed = numberBreeds[i];
        let option = document.createElement('option');
        if(!breed.image)continue
        option.value = i;
        option.innerHTML = `${breed.name}`;
        searchForm.appendChild(option);
        
      }
    })
  .catch(function(error) {
    // console.log(error);
    Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!');
  });



function onSearch(evt) {
  const breedId = evt.currentTarget.value;
  fetchCatByBreed(breedId);

};


function fetchCatByBreed(breedId) {
  loader.textContent = 'Loading data, please wait...';
  // console.log(breedId);
  fetch(BASE_URL, {
    headers: {
    'x-api-key': API_KEY,
    'breed_ids': breedId,
  }
  })
    .then((response) => {
      console.log('111');
      if (!response.ok) {
        throw new Error (response.statusText)
      }
      
   return response.json();
 })
    .then((data) => {
      loader.textContent = '';
      numberBreeds = data;
      const catCard = `<img src="${numberBreeds[breedId].image.url}" width="500 px" alt="11111"><h2>${numberBreeds[breedId].name}</h2><p>${numberBreeds[breedId].description}</p>`;
      
      showInfo.innerHTML = catCard;
      showInfo.style.textAlign = "center";
      showInfo.style.fontSize = "20px";
      showInfo.style.paddingLeft = "700px";
      showInfo.style.paddingRight = "500px";
     
      
  })
  .catch(function(error) {
   console.log(error);
  })
};