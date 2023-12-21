import axios from 'axios';

const BASE_URL = 'https://rising.local/wp-json/wp/v2';

export const fetchPosts = async (tagId?: string, itemsPerPage: number = 10) => {
  let url = `${BASE_URL}/posts?_embed&per_page=${itemsPerPage}`;
  if (tagId) {
    url += `&tags=${tagId}`;  // Use the 'tags' query parameter to filter by tag ID
  }
  const response = await axios.get(url);
  return response.data;
};

export const fetchTags = async (postId: any) => {
  const response = await axios.get(`${BASE_URL}/tags?post=${postId}`);
  return response.data;
};
