import axios from 'axios';

const API_KEY = 'bf14afa34b444149aba5c2a712fbbb46';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const getNews = async (page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apiKey: API_KEY,
      q: 'animals OR pets OR dogs OR cats OR kitten OR puppy OR wildlife OR zoology OR fauna OR species OR biodiversity OR mammals OR birds OR nature',
      searchIn: 'title',
      pageSize: 4,
      page,
      sortBy: 'relevancy',
    },
  });

  return response.data.articles;
};
