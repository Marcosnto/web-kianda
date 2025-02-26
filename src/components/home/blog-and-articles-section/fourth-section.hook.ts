import { useGetPosts } from "@/api/blog";
import { usePathname } from "next/navigation";

export function useForthSection() {
  const { posts, isGetPostsLoading, isGetPostsError } = useGetPosts(3);
  const currentPath = usePathname();

  const backgroundColors = ["k_cinnamon", "k_green_dark", "k_orange"];

  return {
    backgroundColors,
    posts,
    isGetPostsLoading,
    isGetPostsError,
    currentPath,
  };
}
