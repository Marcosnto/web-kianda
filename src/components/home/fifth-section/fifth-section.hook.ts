"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type InstagramFeedType = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url: string;
};

type MetaData = {
  data: InstagramFeedType[];
  paging: unknown;
};

export function useFifthSection() {
  const [data, setData] = useState<InstagramFeedType[]>([]);

  const token = process.env.NEXT_PUBLIC_API_INSTAGRAM;
  const fields = "media_url,media_type,thumbnail_url,permalink";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=12`;

  const getInstaFeed = useCallback(async () => {
    axios
      .get<MetaData>(url)
      .then((response) => setData(response.data.data))
      .catch((error) =>
        console.log("Ocorreu um erro ao obter dados do Instagram"),
      );
  }, [url]);

  useEffect(() => {
    getInstaFeed();
  }, [getInstaFeed]);

  return {
    data,
  };
}
