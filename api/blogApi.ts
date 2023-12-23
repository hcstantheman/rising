import axios from 'axios';
import {Post} from "../type/PostProps";
import parse from "node-html-parser";

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

export const fetchPost = async (postId: string | string[]): Promise<Post> => {
  const url = `${BASE_URL}/posts/${postId}?_embed`;
  const response = await axios.get(url);
  const postData = response.data;

  const root = parse(postData.content.rendered);
  const images = root.querySelectorAll('img'); // Find all image tags
  const tag = await fetchTags(postId);


  const imageUrls = images.map(img => img.getAttribute('src')).filter(src => src);
  const paragraphs = root.querySelectorAll('p').map(p => p.text).filter(text => text.trim());
  return {
    ...postData,
    images: imageUrls,
    content: paragraphs,
    tag: tag[0].name
  };
};

