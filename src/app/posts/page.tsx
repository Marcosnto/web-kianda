"use client";
import { Card } from "@/components/card";
import { Suspense, useEffect, useState } from "react";
import blog_1 from "@/../public/imgs/blog_1.png";
import { IntraPageHeader } from "@/components/general";
import { usePathname } from "next/navigation";

type PostType = {
  id: string;
  images: null;
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
        "http://tns-back.local/wp-json/api/v1/articles",
      ).then((data) => data.json());
      setPosts(posts);
    })();
  }, []);

  const t =
    "Crie um subtítulo que resuma de forma curta e atraente o seu post do blog para que seus visitantes queiram ler mais.";

  return (
    <section>
      <IntraPageHeader name="Blog" />
      <div className="grid-cols-blogCards grid gap-10 px-3 py-6 sm:gap-7 sm:px-6 lg:px-32 lg:py-16">
        <Suspense fallback="carregando...">
          {posts.length > 0 &&
            posts.map((post) => (
              <Card
                className="row-[span_3] grid grid-rows-subgrid gap-1"
                titleClassName="text-lg"
                imageClassName="h-[234px] w-full object-fill"
                bodyClassName="max-w-full basis-[12ch] max-h-[12ch]"
                url={`${currentPath + "/" + post.id}`}
                key={post.id}
                id={post.id}
                label="Eu sou um titulo Grande, olha só! Como sou Grande."
                summary={t}
                imageURL={post.main_image_link ? post.main_image_link : blog_1}
                imageAlt={post.imageDescription}
                showFooterLine
              />
            ))}
        </Suspense>
      </div>
    </section>
  );
}
