import { useGetPosts } from "@/api/blog";
import { usePathname } from "next/navigation";

export function useForthSection() {
  const { posts, isGetPostsLoading, isGetPostsError } = useGetPosts(3);
  const currentPath = usePathname();

  return {
    posts,
    isGetPostsLoading,
    isGetPostsError,
    currentPath,
  };
}
