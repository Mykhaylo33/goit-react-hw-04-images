const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '35591917-63dcfa9e69eea21e43d62ef2e';

export const getImages = async ({ searchQuery, currentPage }) => {
  const response = await fetch(
    `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (!response.ok) {
    throw new Error('Oops... something went wrong...');
  }
  return response.json();
};
