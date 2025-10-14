import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/RootPages/Home";

import Carts from "../pages/DummyPages/Carts";
import Products from "../pages/DummyPages/Products";
import Posts from "../pages/DummyPages/Posts";
import ProductDetail from "../pages/DummyPages/ProductDetail";
import PostDetail from "../pages/DummyPages/PostDetail";

import RootLayout from "../layouts/RootLayout";
import DummyLayout from "../layouts/DummyLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      {
        path: "products",
        Component: Products,
      },
      {
        path: "carts",
        Component: Carts,
      },
      {
        path: "posts",
        Component: Posts,
      },
      {
        path: "posts/:postId",
        Component: PostDetail,
      },
      {
        path: "products/:productId",
        Component: ProductDetail,
      },
    ],
  },
]);

export default router;
