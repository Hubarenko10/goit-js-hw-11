const API_KEY = '30741325-ef9d2f46b672de8daf5cfe26d';
import axios from 'axios';
export async function fetchImages(inputValue, pageNr) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`;
  return await axios.get(url).then(response => response.data);
}