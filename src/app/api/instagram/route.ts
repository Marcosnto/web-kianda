import { INSTA_API_URL } from "@/utils/envs";
import axios from "axios";
import { useCallback } from "react";

export type InstagramFeedType = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url: string;
};

export type MetaData = {
  data: InstagramFeedType[];
  paging: unknown;
};

export async function GET() {
  const token = INSTA_API_URL;
  const fields = "media_url,media_type,thumbnail_url,permalink";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=12`;
  let error = undefined;

  //TODO: understand why return all request json, not only the data
  const instaFeed = await axios
    .get<MetaData>(url)
    .then((response) => response.data.data)
    .catch((error) => {
      console.log("Ocorreu um erro ao obter dados do Instagram", error);
    });

  return Response.json({ data: instaFeed, error: error });
}
