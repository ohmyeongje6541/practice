import PostsList from "../../components/PostsList";
import { useState, useEffect, use } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Posts() {
  const [post, setPost] = useState([]);
  const [searchParams, setSearchParms] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order") ?? "asc";
    const sortBy = searchParams.get("sortBy") ?? "id";

    async function getpost() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      setPost(response.data.posts);
    }
    getpost();
  }, [searchParams]);

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            // id 를 기준(sortBy)으로 asc(오름차순) 순서(order)
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
        >
          ID 오름차순
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            // id 를 기준(sortBy)으로 desc(내림차순) 순서(order)
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
        >
          ID 내림차순
        </button>
      </div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              No. {post.id} - {post.title}
            </Link>
            <br />
          </div>
        );
      })}
      <PostsList></PostsList>
    </div>
  );
}
