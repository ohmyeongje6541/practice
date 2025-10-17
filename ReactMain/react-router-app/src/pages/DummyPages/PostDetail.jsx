import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [postId] = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      setPost(response.data);
    }
    getPost();
  }, [postId]);

  return (
    <div>
      <p>제목 - {post.title}</p>
      <p>내용</p>
      <div>{post.body}</div>
    </div>
  )
}
