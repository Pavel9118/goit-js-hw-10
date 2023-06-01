export default function fetchBreeds() {
  const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
const API_KEY = 'live_ElfNqG1A6LxQDUvEjyqhDuKkS9zS1LRBUqjgCRVdelkDf9pYA3gDazSNNgA9RaaT';
  fetch(BASE_URL, { headers: { 'x-api-key': API_KEY } })
    .then((responce) => {
      if (!responce.ok) {
      throw new Error(responce.statusText)
      }
      return responce.json();
  })
};