import "../App.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
const User = ({ user }) => {
  let navigate = useNavigate();
  const id = user.id;
  return (
    <div className="user" key={user.id}>
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
        {() => {
          navigate(`/Posts/${id}`);
        }}
      </div>
    </div>
  );
};

export default User;
