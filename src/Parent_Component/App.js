import "../App.css";
import Posts from "../Components/Posts";
import Users from "../Components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <h1>Users</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />

          <Route path="/Posts/:id" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
