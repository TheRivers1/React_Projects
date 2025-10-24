const API_URL: string = "https://jsonplaceholder.typicode.com/posts";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export async function getPosts(page: number, limit: number): Promise<Post[]> {
  const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error("Error fetching posts!");
  }
  return await response.json();
}
