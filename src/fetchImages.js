const API_KEY = '30741325-ef9d2f46b672de8daf5cfe26d';
export const fetchImages = async (inputValue, pageNr) => {
  return await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};