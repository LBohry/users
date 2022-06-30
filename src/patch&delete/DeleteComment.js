import { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { Button } from "@mui/material";

const DeleteComment = () => {
  const [commentBody, setcommentBody] = useState("");
  let { postid, username } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/comments/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postid,
        commentUser: username,
        commentBody: commentBody,
      }),
    });
  };

  return (
    <div className="comment">
      <form onSubmit={handleSubmit}>
        <h1>Add a Comment ! </h1>
        <div className="comment-name">{username}</div>
        <div className="input-post-body">
          <input
            type="text"
            placeholder="Comment Body"
            onChange={(e) => setcommentBody(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit">
          Delete
        </Button>
      </form>
    </div>
  );
};

export default DeleteComment;
