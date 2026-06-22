const API_KEY = '56389355-a943d1f8b381e79caefe001fb';

export const fetchNaturePhotos = async (query = 'nature', perPage = 50) => {
  try {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=${perPage}`;
    const response = await fetch(url);

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};
