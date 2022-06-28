//display the title submit with the same css as comments , the body css as is
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { Button } from "@mui/material";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let { userid } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userid,
        title: title,
        post_body: body,
      }),
    });
  };

  return (
    <div className="comment">
      <form onSubmit={handleSubmit}>
        <h1>Add a new post ! </h1>
        <div className="input-post-title">
          <input
            type="text"
            placeholder="Post Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-post-body">
          <input
            type="text"
            placeholder="Post Body"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit">
          Post
        </Button>
      </form>
    </div>
  );
};

export default NewPost;

//mbaad add 3 dots aalimin w hott fehom edit w delete
