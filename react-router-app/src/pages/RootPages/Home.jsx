import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">홈 페이지</h1>
      <NavLink to="/">홈</NavLink>
      <br />
      <NavLink to="/dummy/products">상품</NavLink>
      <br />
      <NavLink to="/dummy/carts">장바구니</NavLink>
      <br />
      <NavLink to="/dummy/posts">댓글</NavLink>
    </div>
  );
}
