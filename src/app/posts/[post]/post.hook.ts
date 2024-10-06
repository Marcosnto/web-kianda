import { useEffect, useState } from "react";
import { Article, ParamsTypes } from "./page";
import { BASE_API_URL } from "@/utils/envs";

export const usePost = (post: string) => {
  const [data, setData] = useState<Article>();

  useEffect(() => {
    (async () =>
      await fetch(`${BASE_API_URL}/wp-json/api/v1/article/${post}`)
        .then((response) => response.json())
        .then((info) => setData(info)))();
  }, [post]);

  //@ts-ignore
  const date = new Date(data?.createdData);

  return {
    data,
    date,
  };
};
