import "../App.css";
import { useNavigate } from "react-router-dom";
const User = ({ user }) => {
  let navigate = useNavigate();
  const id = user.id;
  return (
    <div className="user" key={user.id}>
      <div className="user-username">{user.username}</div>
      <div className="user-name">{user.name}</div>
      <div className="user-email">{user.email}</div>

      <div className="posts">
        <button
          onClick={() => {
            navigate(`/Posts/${id}`);

            console.log("click");
          }}
        >
          See Posts
        </button>
      </div>
    </div>
  );
};

export default User;
