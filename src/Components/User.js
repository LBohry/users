import "../App.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
const User = ({ user }) => {
  let navigate = useNavigate();
  const id = user._id;
  const username = user.username;
  return (
    <div className="user" key={user._id}>
      <div className="user-rightside">
        <div className="user-username">{user.username}</div>
        <div className="user-name">{user.name}</div>
        <div className="user-email">{user.email}</div>
      </div>
      <div className="user-leftside">
        <div className="icon">
          <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
        </div>
      </div>

      <div className="posts">
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/Posts/${id}`);
          }}
        >
          See Posts
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            navigate(`/Posts/NewPost/${id}`);
          }}
        >
          Add Post
        </Button>
      </div>
    </div>
  );
};

export default User;
