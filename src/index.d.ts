declare module '*.png';
declare module '*.jpeg';

interface User {
  name: string;
  connetion: string;
  bio: string;
  imageUrl: string;
}

interface Post {
  id: number;
  user: User;
  time: string;
  text?: string;
  imageUrl?: string;
  comments: number;
  likes: number;
}
