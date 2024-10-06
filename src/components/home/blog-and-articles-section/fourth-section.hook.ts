import { PostType } from "@/app/posts/page";
import { BASE_API_URL } from "@/utils/envs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useForthSection() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const currentPath = usePathname();

  useEffect(() => {
    (async () => {
      const posts: PostType[] = await fetch(
        `${BASE_API_URL}/articles?_limit=3`,
      ).then((data) => data.json());
      setPosts(posts);
    })();
  }, []);

  return {
    posts,
    currentPath,
  };
}
