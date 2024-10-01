"use client";
import { useEffect, useState } from "react";

type PostTypes = {
  id: string;
  images: any;
  title: string;
  status: string;
  author: string;
  content: string;
  description: string;
  imageDescription: string;
  imageSub: string;
};

export function usePosts() {
  const [posts, setPosts] = useState<PostTypes[]>([]);

  const getPosts = async () => {
    const response = await fetch(
      "http://tns-back.local/wp-json/api/v1/articles",
    );
    const posts: PostTypes[] = await response.json();

    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
  };
}
