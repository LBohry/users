import "../App.css";
import Posts from "../Components/Posts";
import Users from "../Components/Users";
import NewPost from "../add new elements/NewPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewComment from "../add new elements/NewComment";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/Posts/:id" element={<Posts />} />
          <Route path="/Posts/NewPost/:userid" element={<NewPost />} />
          <Route
            path="/Posts/:id/NewComment/:postid/:username"
            element={<NewComment />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
