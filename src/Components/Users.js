import "../App.css";
import { useState, useEffect } from "react";
import User from "../Components/User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((users) => users.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>

      {users.map((useri) => (
        <User user={useri} key={useri._id} />
      ))}
    </div>
  );
};

export default Users;
