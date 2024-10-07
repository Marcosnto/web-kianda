import { useGetPost } from "@/api/blog";

export const usePost = (articleID: string) => {
  const { post, isGetPostLoading, isGetPostError } = useGetPost(articleID);

  //@ts-ignore
  const date = new Date(post?.createdData);

  return { post, isGetPostLoading, isGetPostError, date };
};
