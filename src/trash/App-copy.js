//render users (name , username , email , picture)
//each with a button "see posts" , when clicked , map through the posts of that particuler userId(user.id === post.userId)
//then , use routes to navigate to a particular user directly without clicking buttons
//check the youtube video , fih fazet akka
import "../App.css";
import Users from "../Components/Users";
//import User from "../Components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";

const App_copy = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        {
          //<Route path="/Users/:id" element={<User />} />
        }
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_copy;

//copy users into here to see result incase of problem
