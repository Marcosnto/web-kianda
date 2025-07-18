"use client";
import { Questrial } from "next/font/google";
import { BoldTitle } from "@/components/general";

import "./styles.css";
import { usePost } from "./post.hook";
import Image from "next/image";
import HomePageSection from "@/components/home-page-section/home-page-section";
import { getArticleColumn } from "@/utils/getArticleColumn";

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
  columnType?: string;
  slug?: string;
  imageDescription: string;
  imageSub: string;
};

function createMarkup(content: string) {
  return { __html: content };
}

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
    <HomePageSection id="blog-post">
      <div className={`mb-4 grid px-2 lg:px-4 lg:py-4 xl:mx-[45px] xl:my-[69px] xl:grid-cols-[40%_60%] xl:px-0`}>
        <div className="mb-4 xl:mb-0 xl:pr-[40px] [@media(min-width:1920px)]:w-[686px]">
          {post.main_image?.url && (
            <div className="relative mb-[1rem] flex h-[187px] w-full lg:h-[448px]">
              <Image
                src={post.main_image.url}
                alt=""
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          )}
          <div className="ml-[1rem] flex flex-col gap-1">
            {post?.columnType && (
              <span className="flex flex-col text-[14px] font-normal italic text-black lg:text-[16px]">
                {getArticleColumn(post?.columnType)}
              </span>
            )}
            <BoldTitle className="text-[26px] font-semibold lg:text-[28px] 2xl:text-[54px]/[59px]">
              {post?.title}
            </BoldTitle>
            <div className="flex flex-col text-[14px] font-normal text-black lg:text-[16px] 2xl:text-[34px]">
              {post?.author && <span className={``.trim()}>Por: {post.author} &nbsp;</span>}
              {date && (
                <time className="italic" dateTime="2022-10-10">
                  {String(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear())}
                </time>
              )}
            </div>
          </div>
        </div>
        <div className="h-[550px] w-full overflow-y-auto rounded-xl bg-k_green_light text-white lg:h-[987px]">
          <div className="flex w-full px-4 py-4 text-justify text-[1rem] font-normal lg:px-[33px] lg:py-[17px] lg:text-[1.2rem] 2xl:max-w-[1044px] 2xl:text-[34px]">
            <p
              className="content-post text-[1.125rem] lg:text-[20px] 2xl:text-[34px]/[40px]"
              dangerouslySetInnerHTML={createMarkup(post?.content ? post?.content : "")}
            />
          </div>
        </div>
      </div>
    </HomePageSection>
  );
}
