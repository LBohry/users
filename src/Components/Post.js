import "../App.css";
import Comment from "./Comment";
import { useState, useEffect } from "react";

const Post = ({ post }) => {
  const [filteredcomments, setFilteredComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((comments) => comments.json())
      .then((comments) => {
        setFilteredComments(
          comments.filter((comment) => comment.postId === post.id)
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="post" key={post.id}>
      <h1>Post : </h1>

      <div className="post-title">{post.title}</div>

      <div className="post-body">{post.body}</div>

      <div className="comments">
        <h4>Comments : </h4>
        {filteredcomments.map((commenti) => (
          <Comment comment={commenti} key={commenti.id} />
        ))}
      </div>
    </div>
  );
};

export default Post;
