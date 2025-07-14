"use client";
import { Card } from "@/components/card";
import blog_1 from "@/../public/imgs/blog_1.png";
import { usePathname } from "next/navigation";
import { usePosts } from "../posts.hook";
import { PostType } from "@/api/blog";
import HomePageSection from "@/components/home-page-section/home-page-section";

function PostsContent() {
  const { posts, isGetPostsLoading, isGetPostsError } = usePosts();
  const currentPath = usePathname();

  if (isGetPostsLoading) {
    return (
      <div className="grid grid-cols-blogCards gap-10 px-3 py-6 sm:gap-10 sm:px-6 lg:px-32 lg:py-16">
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (isGetPostsError) {
    return (
      <div className="grid grid-cols-blogCards gap-10 px-3 py-6 sm:gap-10 sm:px-6 lg:px-32 lg:py-16">
        <h1>Algo de errado aconteceu!</h1>
      </div>
    );
  }

  return (
    <HomePageSection id="posts">
      <div className="grid grid-cols-blogCards gap-10 sm:gap-10 sm:px-6 lg:px-32 lg:py-16">
        {posts.length > 0 &&
          posts.map((post: PostType) => (
            <Card
              className="row-[span_3] grid grid-rows-subgrid gap-1 border-b-2 border-gray-100"
              titleClassName="font-medium"
              imageClassName="h-[234px] w-full"
              bodyClassName="max-w-full"
              url={`${currentPath + "/" + post.id}`}
              key={post.id}
              id={post.id}
              label={post.title}
              author={post.author}
              createdData={new Date(post.createdData)}
              columnType={post.columnType}
              summary={post.description}
              imageURL={post.main_image.url ? post.main_image.url : blog_1}
              imageAlt={post.imageDescription}
            />
          ))}
      </div>
    </HomePageSection>
  );
}

export default PostsContent;
