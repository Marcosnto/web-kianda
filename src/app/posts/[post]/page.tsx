"use client";
import { Suspense, useEffect, useState } from "react";
import { Questrial } from "next/font/google";
import { BoldTitle } from "@/components/general";

import "./styles.css";

type ParamsTypes = {
  params: {
    post: string;
  };
};

export type Article = {
  id: number | string;
  title: string;
  author: string;
  description: string;
  content: string;
  status: string;
  image?: {
    id: string | number;
    url: string;
    file_name: string;
    type: string;
  };
  slug?: string;
  imageDescription: string;
  imageSub: string;
};

function createMarkup(content: string) {
  return { __html: content };
}

const questrialFont = Questrial({ weight: "400", subsets: ["latin"] });

export default function Post({ params }: ParamsTypes) {
  const { post } = params;
  const [data, setData] = useState<Article>();

  useEffect(() => {
    (async () =>
      await fetch(`http://tns-back.local/wp-json/api/v1/article/${post}`)
        .then((response) => response.json())
        .then((info) => setData(info)))();
  }, [post]);

  return (
    <div
      className={`flex flex-col vs:p-8 md:px-24 md:py-10 ${questrialFont.className} text-[#050505]`}
    >
      <BoldTitle className="pb-4 text-[1.75rem] lg:text-[2.5rem]">
        {data?.title}
      </BoldTitle>
      <p className="pb-4 text-[0.938rem] text-[#4f5257]">{data?.description}</p>
      <div className="flex flex-col pb-4 text-[#4f5257]">
        <span className="text-[0.875rem] font-bold">Por: Adelmo Filho</span>
        <span className="text-xs">31 de out. de 2022</span>
      </div>
      <span
        className="content-post text-[1.125rem]"
        dangerouslySetInnerHTML={createMarkup(
          data?.content ? data?.content : "",
        )}
      />
    </div>
  );
}
