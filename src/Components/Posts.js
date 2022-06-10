import "../App.css";
import { useState, useEffect } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";
const Posts = () => {
  const [filteredposts, setFilteredPosts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Posts) => Posts.json())
      .then((Posts) => {
        setFilteredPosts(Posts.filter((Post) => Post.userId == id));
        console.log(filteredposts);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="posts">
        {filteredposts.map((filteredpost) => (
          <Post post={filteredpost} key={filteredpost.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
