import { useGetPosts } from "@/api/blog";

export function usePosts() {
  const { posts, isGetPostsLoading, isGetPostsError } = useGetPosts();

  return { posts, isGetPostsLoading, isGetPostsError };
}
