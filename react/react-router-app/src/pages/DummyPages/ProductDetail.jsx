import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [productId] = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data);
    }
    getProduct();
  }, [productId]);
  return (
    <div>
      <p>제목 - {product.title}</p>
      <p>내용</p>
      <div>{product.body}</div>
    </div>
  )
}
