import { BASE_API_URL } from "@/utils/envs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type PostType = {
  id: string;
  images: null;
  createdData: string;
  title: string;
  status: string;
  author: string;
  content: string;
  description: string;
  columnType?: string;
  main_image: {
    id: string | number;
    url: string;
    file_name: string;
    type: string;
  };
  imageDescription: string;
  imageSub: string;
};

export function useGetPosts(limit?: number) {
  const {
    data: posts,
    isLoading: isGetPostsLoading,
    error: isGetPostsError,
  } = useQuery({
    queryKey: ["posts"],
    staleTime: 0,
    queryFn: () => axios.get(`${BASE_API_URL}/articles${limit ? "?_limit=" + limit : ""}`).then(({ data }) => data),
  });

  return { posts, isGetPostsLoading, isGetPostsError };
}

export function useGetPost(articleID: string | undefined) {
  const {
    data: post,
    isLoading: isGetPostLoading,
    error: isGetPostError,
  } = useQuery({
    queryKey: ["currentPost"],
    staleTime: 0,
    queryFn: () => axios.get(`${BASE_API_URL}/article/${articleID}`).then(({ data }) => data),
  });

  return { post, isGetPostLoading, isGetPostError };
}
