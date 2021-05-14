import React from "react";

const FeedBack = ({ message }) => {
  return (
    <div className="feed-back">
      <p style={{ color: "yellowgreen" }}>{message}</p>
    </div>
  );
};

export default FeedBack;
