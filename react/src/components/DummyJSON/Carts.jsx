import { useEffect, useState } from "react";
import { cartAPI } from "../../api/carts";

export default function Carts() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const carts = await cartAPI.getCarts();
      setCarts(carts);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {carts.map((cart) => ( // ✅ 변수명 중복 방지
          <li key={cart.id}>
            User ID: {cart.userId}, Total Products: {cart.products.length}
          </li>
        ))}
      </ul>
    </div>
  );
}
