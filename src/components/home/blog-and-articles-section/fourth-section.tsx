import { ItalicTitle } from "@/components/general";
import blog_1 from "@/../public/imgs/blog_1.png";
import { useForthSection } from "./fourth-section.hook";
import { Card } from "@/components/card";
import { PostType } from "@/api/blog";

export function ForthSection() {
  const { posts, isGetPostsLoading, isGetPostsError, currentPath } =
    useForthSection();

  if (isGetPostsLoading) {
    return <h1>carregando...</h1>;
  }

  if (isGetPostsError || !posts) {
    return <h1>Algo deu errado!</h1>;
  }

  return (
    <section>
      <span className="text-center">
        <ItalicTitle className="p-8 text-xl text-k_brown sm:text-2xl md:text-3xl">
          Blog e Artigos
        </ItalicTitle>
      </span>
      <div className="flex flex-wrap gap-8 bg-k_beige text-k_brown md:mb-4 md:justify-around md:bg-transparent lg:justify-around xl:justify-center xl:gap-12">
        {posts.map((post: PostType) => (
          <Card
            className={`vs:w-full md:w-96 md:rounded md:bg-k_beige md:shadow-md lg:w-[20.375rem] xl:w-[24.375rem]`}
            bodyClassName="pl-[17.3px] pr-[17.3px] max-w-none md:max-w-[41ch]"
            imageClassName="h-72 w-full"
            summaryClassName="text-sm/relaxed"
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
