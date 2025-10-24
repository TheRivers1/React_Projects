import { useEffect, useState } from "react";
import Post from "./post";
import { getPosts, type Post as PostType } from "../services/postService";
import "../styles/postList.css";

function PostList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit: number = 10;

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  async function fetchPage(p: number) {
    setLoading(true);
    setErrorMessage(null);
    try {
      const data = await getPosts(p, limit);
      setPosts((prev) => [...prev, ...data]);
      setPage((s) => s + 1);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 200 &&
        !loading
      ) {
        fetchPage(1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="posts">
      {posts.map((p) => (
        <Post
          key={p.id}
          title={p.title}
          body={p.body}
          photoUrl={`https://picsum.photos/seed/${p.id}/80/80`}
        />
      ))}
      {loading && <div className="loading">Loading...</div>}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </div>
  );
}

export default PostList;
