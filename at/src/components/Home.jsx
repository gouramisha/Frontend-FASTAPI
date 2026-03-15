import { useEffect, useState } from "react";
import axios from "axios";
import CreatePost from "./components/CreatePost";

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://silver-train-94w5xr6gwx6cp9w6-8000.app.github.dev/posts");
      console.log(res.data);   // check in browser console
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Input Form</h1>
      <CreatePost/>

      <h1>Feed</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <div>
              <h5>The Following is our posts</h5>
              <p>{post.user_id}</p>
              <p>{post.content}</p>
          </div>
        </div>
      ))}

    </div>
  );
}