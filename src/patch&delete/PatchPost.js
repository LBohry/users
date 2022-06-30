import { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { Button } from "@mui/material";

const PatchPost = () => {
  const [patchedpost, setpatchedpost] = useState("");
  const [patchedtitle, setpatchedtitle] = useState("");
  const [patcheddescription, setpatcheddescription] = useState("");

  let { postid } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/posts/${postid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: patchedtitle,
        description: patcheddescription,
        post_body: patchedpost,
      }),
    });
  };

  return (
    <div className="comment">
      <form onSubmit={handleSubmit}>
        <h1>Edit Your Post! </h1>
        <div className="input-post-body">
          <input
            type="text"
            placeholder="Edit Title"
            onChange={(e) => setpatchedtitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Edit Description"
            onChange={(e) => setpatcheddescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Edit Post"
            onChange={(e) => setpatchedpost(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit">
          Edit Post
        </Button>
      </form>
    </div>
  );
};

export default PatchPost;
