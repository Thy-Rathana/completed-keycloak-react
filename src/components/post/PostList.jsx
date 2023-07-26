import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts }) {
  return (
    <div>
      <h1 className="text-4xl">Posts List</h1>
      <div className="flex flex-col gap-5 my-5">
        {posts?.length &&
          posts.map((post) => <PostItem post={post} key={post.id} />)}
      </div>
    </div>
  );
}
