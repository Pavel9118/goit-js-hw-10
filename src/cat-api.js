export default function fetchBreeds() {
  const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
const API_KEY = 'live_ElfNqG1A6LxQDUvEjyqhDuKkS9zS1LRBUqjgCRVdelkDf9pYA3gDazSNNgA9RaaT';
  return fetch(BASE_URL,{headers: {
      'x-api-key': API_KEY
    }})
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error (response.statusText)
      }
      
      return response.json();
     
    })
};