import { ItalicTitle } from "@/components/general";
import blog_1 from "@/../public/imgs/blog_1.png";
import { useForthSection } from "./fourth-section.hook";
import { Card } from "@/components/card";
import { PostType } from "@/api/blog";

export function ForthSection() {
  const {
    posts,
    isGetPostsLoading,
    isGetPostsError,
    currentPath,
    backgroundColors,
  } = useForthSection();

  if (isGetPostsLoading) {
    return <h1>carregando...</h1>;
  }

  if (isGetPostsError || !posts) {
    return <h1>Algo deu errado!</h1>;
  }

  return (
    <section className="mb-14 flex flex-col items-center">
      <ItalicTitle>Blog e Artigos</ItalicTitle>
      <div className="flex flex-wrap gap-8 md:mb-4 md:justify-around lg:justify-around xl:justify-center xl:gap-12">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`vs:w-full md:w-96 md:rounded md:shadow-md lg:w-[20.375rem] xl:w-[24.375rem]`}
            bodyClassName={`pl-[17.3px] pr-[17.3px] bg-${backgroundColors[index]} ${index === 2 ? "text-black" : "text-k_yellow_light"}`}
            imageClassName="max-h-[372.33px] max-w-[569.56px] mb-2"
            summaryClassName="text-[1.313rem]"
            key={post.id}
            label={post.title}
            summary={post.description}
            author={post.author}
            createdData={new Date(post.createdData)}
            imageAlt={post.imageDescription}
            imageURL={post.main_image.url ? post.main_image.url : blog_1}
            url={`${currentPath + "posts" + "/" + post.id}`}
          />
        ))}
      </div>
    </section>
  );
}
