import React from "react";

const Comments_Button = ({ clicked }) => {
  return (
    <div>
      <button onClick={clicked}>See Comments</button>
    </div>
  );
};

export default Comments_Button;
