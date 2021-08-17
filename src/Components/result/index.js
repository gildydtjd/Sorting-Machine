import React, { useEffect, useState } from "react";

function Result({ numArr }) {
  const resultStr = numArr.join(", ");
  return <div>{resultStr}</div>;
}

export default Result;
