import axios from 'axios';
import {Post} from "../type/PostProps";
import parse from "node-html-parser";
import nextConfig from "../next.config";

const BASE_URL = 'https://rising-stanley.local/wp-json/wp/v2';

export const fetchAllPostIds = async () => {
  const url = `${BASE_URL}/posts?_embed&fields=id`;  // Adjust the URL to fetch only IDs
  const response = await axios.get(url);
  return response.data.map((post: { id: any; }) => post.id);  // Return an array of IDs
};

export const fetchPosts = async (page: number = 1, tagId?: string, itemsPerPage: number = 9) => {
  let url = `${BASE_URL}/posts?_embed&per_page=${itemsPerPage}&page=${page}`;
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

  const allPostIds = await fetchAllPostIds();
  const currentPostIndex = allPostIds.indexOf(parseInt(postId as string));
  const prevPostId = allPostIds[currentPostIndex - 1] || null;
  const nextPostId = allPostIds[currentPostIndex + 1] || null;


  const imageUrls = images.map(img => img.getAttribute('src')).filter(src => src);
  const paragraphs = root.querySelectorAll('p').map(p => p.text).filter(text => text.trim());
  return {
    ...postData,
    images: imageUrls,
    content: paragraphs,
    tag: tag[0].name,
    prevPostId: prevPostId,  // Add the previous post ID
    nextPostId: nextPostId   // Add the next post ID
  };
};


