import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Posts_Button = ({ clicked, id }) => {
  return (
    <Link to>
      <div>
        <button onClick={clicked}>See Posts</button>
      </div>
    </Link>
  );
};

export default Posts_Button;
