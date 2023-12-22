import axios from 'axios';

const BASE_URL = 'https://rising.local/wp-json/wp/v2';

export const fetchPosts = async (page: number = 1, tagId?: string, itemsPerPage: number = 9) => {
  let url = `${BASE_URL}/posts?_embed&per_page=${itemsPerPage}&page=${page}`;
  console.log('url', url);
  if (tagId) {
    url += `&tags=${tagId}`;  // Use the 'tags' query parameter to filter by tag ID
  }
  const response = await axios.get(url);
  const totalPosts = parseInt(response.headers['x-wp-total']);

  return { posts: response.data, totalPosts };
};


export const fetchTags = async (postId: any) => {
  const response = await axios.get(`${BASE_URL}/tags?post=${postId}`);
  return response.data;
};
