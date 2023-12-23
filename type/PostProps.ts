export interface Post {
  id: number;
  date: string;
  title: { rendered: string };
  content: string[];
  images: string[];
  tag: string;
  prevPostId: number | null;
  nextPostId: number | null;
}