import { ItalicTitle } from "@/components/general";
import blog_1 from "@/../public/imgs/blog_1.png";
import { useForthSection } from "./fourth-section.hook";
import { Card } from "@/components/card";
import { PostType } from "@/api/blog";
import HomePageSection from "@/components/home-page-section/home-page-section";

export function ForthSection() {
  const { posts, isGetPostsLoading, isGetPostsError, currentPath, backgroundColors } = useForthSection();

  if (isGetPostsLoading) {
    return <h1>carregando...</h1>;
  }

  if (isGetPostsError || !posts) {
    return <h1>Algo deu errado!</h1>;
  }

  return (
    <HomePageSection id="blog" className="mb-10 flex flex-col items-center md:mb-14">
      <ItalicTitle className="" iconType="halfMoon" borderColor="black" showDivider>
        Artigos e Publicações
      </ItalicTitle>
      {/* TODO: Try to do this without duplicate */}
      <div className="flex flex-wrap gap-2 md:mb-4 md:justify-start">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`lg:hidden`}
            bodyClassName={`mt-[10px] md:mt-0 lg:pl-[17.3px] lg:pr-[17.3px] lg:bg-${backgroundColors[index]} lg:${index === 2 ? "text-black" : "text-k_yellow_light"}`}
            imageClassName="max-w-[144px] max-h-[134px] md:max-h-[240px] md:max-w-[368px] lg:h-[372.33px] lg:w-full"
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

      {/* Screen >= LG */}
      <div className="hidden w-full grid-cols-3 gap-3 lg:grid">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`flex-col`}
            bodyClassName={`pl-[17.3px] pr-[17.3px] bg-${backgroundColors[index]} ${index === 2 ? "text-black" : "text-k_yellow_light"}`}
            imageClassName="max-w-full max-h-[134px] md:max-h-[240px]  lg:h-[372.33px] "
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
    </HomePageSection>
  );
}
