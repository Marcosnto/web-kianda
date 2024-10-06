"use client";
import { BASE_API_URL } from "@/utils/envs";
import { useEffect, useState } from "react";
import { PostType } from "./page";

export function usePosts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    const response = await fetch(`${BASE_API_URL}/articles`);
    const posts: PostType[] = await response.json();

    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
  };
}
