"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { InstagramFeedType, MetaData } from "@/app/api/instagram/route";

export function useFifthSection() {
  const [data, setData] = useState<InstagramFeedType[]>([]);

  //TODO: add loading
  const getInstaFeed = useCallback(async () => {
    axios
      .get<MetaData>("/api/instagram")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) =>
        console.log("Ocorreu um erro ao obter dados do Instagram", error),
      );
  }, []);

  useEffect(() => {
    getInstaFeed();
  }, [getInstaFeed]);

  return {
    data,
  };
}
