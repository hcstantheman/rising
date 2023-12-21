import axios from 'axios';

const BASE_URL = 'https://rising.local/wp-json/wp/v2';

export const fetchPosts = async (branchLabel?: string, itemsPerPage: number = 10) => {
  let url = `${BASE_URL}/posts?_embed&per_page=${itemsPerPage}`;
  if (branchLabel) {
    url += `&branch=${branchLabel}`;
  }
  const response = await axios.get(url);
  return response.data;
};

export const fetchTags = async (postId: any) => {
  const response = await axios.get(`${BASE_URL}/tags?post=${postId}`);
  return response.data;
};
