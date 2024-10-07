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
  main_image_link: string;
  imageDescription: string;
  imageSub: string;
};

export function useGetPosts() {
  const {
    data: posts,
    isLoading: isGetPostsLoading,
    error: isGetPostsError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios.get(`${BASE_API_URL}/articles`).then(({ data }) => data),
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
    // gcTime: 0,
    queryFn: () =>
      axios
        .get(`${BASE_API_URL}/article/${articleID}`)
        .then(({ data }) => data),
  });

  return { post, isGetPostLoading, isGetPostError };
}
