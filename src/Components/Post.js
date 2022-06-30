import "../App.css";
import Comment from "./Comment";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);

  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/comments/bypost/${post._id}`)
      .then((Comments) => Comments.json())
      .then((Comments) => {
        setComments(Comments);
      });

    fetch(`http://localhost:4000/users/${id}`)
      .then((user) => user.json())
      .then((user) => {
        setUser(user);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="post" key={post._id}>
      <div className="head">
        <h1>Post : </h1>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/Posts/${id}/${post._id}/patchpost`);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/Posts/${id}/${post._id}/deletepost`);
          }}
        >
          Delete
        </Button>
      </div>
      <div className="post-title">{post.title}</div>

      <div className="post-body">{post.post_body}</div>

      <div className="comments">
        <h4>Comments : </h4>
        {comments.map((commenti) => (
          <Comment comment={commenti} key={commenti._id} />
        ))}
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/Posts/${id}/NewComment/${post._id}/${user.username}`);
          }}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default Post;
