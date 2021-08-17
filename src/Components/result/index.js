import React from "react";
import "./result.css";

function Result({ numArr }) {
  const resultStr = numArr.join(", ");
  return (
    <div className="result-box">
      <div className="result-info">{resultStr}</div>
    </div>
  );
}

export default Result;
