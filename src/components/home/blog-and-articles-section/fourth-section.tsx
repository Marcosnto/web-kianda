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
      <ItalicTitle
        className="mb-[15px] pl-[13.5px] md:pb-[28px] md:pl-0"
        iconType="halfMoon"
        borderColor="black"
        showDivider
      >
        Artigos e Publicações
      </ItalicTitle>
      {/* TODO: Try to do this without duplicate */}
      <div className="flex flex-wrap gap-2 md:mb-4 md:justify-start">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`xl:hidden`}
            bodyClassName={`ml-4 mr-5 md:ml-[21px] md:mr-0`}
            imageClassName="w-[151px] h-[140px] md:h-[240px] md:w-[368px] "
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

      {/* Screen >= XL */}
      <div className="hidden justify-center gap-[23px] xl:flex">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`flex-col xl:w-[569.56px]`}
            bodyClassName={`pl-[17.3px] xl:w-[569.56px] pr-[17.3px] bg-${backgroundColors[index]} ${index === 2 ? "text-black" : "text-k_yellow_light"}`}
            imageClassName="h-[372.33px]"
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
