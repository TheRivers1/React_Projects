import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PostList from "./components/postList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostList />
  </StrictMode>
);
