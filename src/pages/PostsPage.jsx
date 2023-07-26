import React, { useEffect, useRef, useState } from "react";
import useFetch from "../hook/useFetch";
import PostList from "../components/post/PostList";
export default function PostPage(props) {
  const posts = useFetch("/posts");

  return (
    <>
      <div className="container mx-auto">
        <PostList posts={posts} />
      </div>
    </>
  );
}
