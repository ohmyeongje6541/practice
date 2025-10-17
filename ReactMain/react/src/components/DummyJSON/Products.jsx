import { useEffect, useState } from "react";
import { productAPI } from "../../api/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await productAPI.getProducts(); 
      setProducts(products); 
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => ( 
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
