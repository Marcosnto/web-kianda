import { ItalicTitle } from "@/components/general";
import blog_1 from "@/../public/imgs/blog_1.png";
import { useForthSection } from "./courses-and-classes.hook";
import { Card } from "@/components/card";
import { PostType } from "@/api/blog";

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
    <section className="mb-14 mt-[42px] flex flex-col items-center px-[16px]">
      <ItalicTitle
        className="mb-[14px]"
        iconType="halfMoon"
        borderColor="black"
        showDivider
      >
        Cursos e Aulas
      </ItalicTitle>
      <div className="flex flex-wrap gap-8 rounded-[29px] rounded-tr-none border-[1px] border-k_green_light px-[14px] py-[11px] md:mb-4 md:justify-around lg:justify-around xl:justify-center xl:gap-12">
        {posts.map((post: PostType, index: number) => (
          <Card
            className={``}
            bodyClassName={`mt-[10px] lg:pl-[17.3px] lg:pr-[17.3px] lg:bg-${backgroundColors[index]} lg:${index === 2 ? "text-black" : "text-k_yellow_light"}`}
            imageClassName="max-w-[144px] max-h-[134px] lg:max-h-[372.33px] lg:max-w-[569.56px]"
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
