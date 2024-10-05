"use client";
import { Card } from "@/components/card";
import { Suspense, useEffect, useState } from "react";
import blog_1 from "@/../public/imgs/blog_1.png";
import { IntraPageHeader } from "@/components/general";
import { usePathname } from "next/navigation";
import { BASE_API_URL } from "@/utils/envs";

export type PostType = {
  id: string;
  images: null;
  createdData: string;
  title: string;
  status: string;
  author: string;
  content: string;
  description: string;
  main_image_link: string;
  imageDescription: string;
  imageSub: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const currentPath = usePathname();

  useEffect(() => {
    (async () => {
      const posts: PostType[] = await fetch(
        `${BASE_API_URL}/wp-json/api/v1/articles`,
      ).then((data) => data.json());
      setPosts(posts);
    })();
  }, []);

  return (
    <section>
      <IntraPageHeader name="Blog" />
      <div className="grid-cols-blogCards grid gap-10 px-3 py-6 sm:gap-10 sm:px-6 lg:px-32 lg:py-16">
        <Suspense fallback="carregando...">
          {posts.length > 0 &&
            posts.map((post) => (
              <Card
                className="row-[span_3] grid grid-rows-subgrid gap-1 border-b-2 border-gray-100"
                titleClassName="text-lg"
                imageClassName="h-[234px] w-full object-fill"
                bodyClassName="max-w-full"
                url={`${currentPath + "/" + post.id}`}
                key={post.id}
                id={post.id}
                label={post.title}
                author={post.author}
                createdData={new Date(post.createdData)}
                summary={post.description}
                imageURL={post.main_image_link ? post.main_image_link : blog_1}
                imageAlt={post.imageDescription}
              />
            ))}
        </Suspense>
      </div>
    </section>
  );
}
