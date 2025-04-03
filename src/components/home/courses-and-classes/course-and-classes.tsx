import { ItalicTitle } from "@/components/general";
import blog_1 from "@/../public/imgs/blog_1.png";
import { useForthSection } from "./courses-and-classes.hook";
import { Card } from "@/components/card";
import { PostType } from "@/api/blog";
import HomePageSection from "@/components/home-page-section/home-page-section";

export function CoursesAndClasses() {
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
    <HomePageSection className="flex flex-col items-center lg:hidden">
      <ItalicTitle
        className=""
        iconType="halfMoon"
        borderColor="black"
        showDivider
      >
        Cursos e Aulas
      </ItalicTitle>
      <div className="mb-14 flex flex-wrap gap-8 rounded-[29px] rounded-tr-none border-[1px] border-k_green_light px-[14px] py-[11px] md:mb-4 md:flex-row md:flex-nowrap md:justify-around md:border-0 md:p-0 lg:justify-around xl:justify-center xl:gap-12">
        {/*TODO: Create one copy of this to course  */}
        {posts.map((post: PostType, index: number) => (
          <Card
            className={`md:flex-col md:justify-between md:rounded-[1.30rem] md:border md:border-k_green_light`}
            bodyClassName={` mt-[10px] lg:pl-[17.3px] lg:pr-[17.3px] lg:bg-${backgroundColors[index]} lg:${index === 2 ? "text-black" : "text-k_yellow_light"}`}
            imageClassName="max-w-[144px] max-h-[134px] md:max-w-full md:max-h-[228.43px]  lg:max-h-[372.33px] lg:max-w-[569.56px] md:p-0"
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
    </HomePageSection>
  );
}
