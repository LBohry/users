import "../App.css";
import { useState, useEffect } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  console.log({ id });

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(`http://localhost:4000/posts/byuser/${id}`);
      setPosts(await res.json()); //put the await inside the setPosts
    }
    fetchdata();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(posts);
  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="posts">
        {posts.map((posti) => (
          <Post post={posti} key={posti._id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
