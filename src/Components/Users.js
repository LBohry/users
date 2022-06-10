import "../App.css";
import { useState, useEffect } from "react";
import User from "../Components/User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div className="App">
      {users.map((useri) => (
        <User user={useri} key={useri.id} />
      ))}
    </div>
  );
};

export default Users;
