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
    <HomePageSection id="blog" className="mb-[22px] flex flex-col items-center md:mb-14">
      <ItalicTitle className="pl-[13.5px] md:pl-0" iconType="halfMoon" showDivider>
        Artigos e Publicações
      </ItalicTitle>
      {/* TODO: Try to do this without duplicate */}
      <div className="flex flex-wrap gap-2 md:mb-4 md:justify-start">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`2xl:hidden ${index === 3 && "hidden"}`}
            bodyClassName={`pl-4 pr-5 md:ml-[21px] md:mr-0`}
            imageClassName="w-[151px] h-[140px] md:h-[240px] md:w-[368px] "
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

      {/* Screen >= XL */}
      <div className="hidden flex-wrap justify-center gap-[23px] 2xl:flex [@media(min-width:1920px)]:flex-nowrap">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`flex-col xl:w-[569.56px] ${index === 3 && "hidden [@media(min-width:1536px)]:block [@media(min-width:1920px)]:hidden"}`}
            bodyClassName={`pl-[17.3px] xl:pl-[43px] xl:pt-[21px] xl:h-[191px] 2xl:w-[569.56px] pr-[17.3px] bg-${backgroundColors[index]} ${index === 2 ? "text-black" : "text-k_yellow_light"}`}
            imageClassName="xl:h-[372.33px]"
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
