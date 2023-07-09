import { Metadata } from "next";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      {/* <PostSearch onSearch={setPosts} /> */}
      <PostSearch />
      <Posts />
    </>
  );
}
