import { Suspense } from "react";
import PostsContent from "./components/postsContent";

export default function Posts() {
  return (
    <Suspense fallback={<div>Carregando posts...</div>}>
      <PostsContent />
    </Suspense>
  );
}
