import { useEffect, useState } from "react";
import { postAPI } from "../../api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await postAPI.getPosts();
      setPosts(posts);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => ( 
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
