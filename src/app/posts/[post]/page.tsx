"use client";
import { Questrial } from "next/font/google";
import { BoldTitle } from "@/components/general";

import "./styles.css";
import { usePost } from "./post.hook";

export type ParamsTypes = {
  params: {
    post: string;
  };
};

export type Article = {
  id: number | string;
  title: string;
  createdData: string;
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
  const { post, isGetPostLoading, isGetPostError, date } = usePost(params.post);

  if (isGetPostLoading) {
    return (
      <div className="grid grid-cols-blogCards gap-10 px-3 py-6 sm:gap-10 sm:px-6 lg:px-32 lg:py-16">
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (isGetPostError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div
      className={`mx-[20%] flex flex-col vs:my-[10%] sm:my-[3%] ${questrialFont.className} text-[#050505]`}
    >
      <BoldTitle className="pb-4 text-[1.75rem] lg:text-[2.5rem]">
        {post?.title}
      </BoldTitle>
      <p className="pb-4 text-[0.938rem] text-[#4f5257]">{post?.description}</p>
      <div className="flex flex-col pb-4 text-[#4f5257]">
        {post?.author && (
          <span className={`text-[0.875rem] font-bold`.trim()}>
            Por {post.author} em&nbsp;
          </span>
        )}
        {date && (
          <time dateTime="2022-10-10" className={"text-xs"}>
            {String(
              date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
            )}
          </time>
        )}
      </div>
      <span
        className="content-post text-[1.125rem]"
        dangerouslySetInnerHTML={createMarkup(
          post?.content ? post?.content : "",
        )}
      />
    </div>
  );
}
