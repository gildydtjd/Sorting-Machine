import React, { useEffect, useState } from "react";
import { bubbleSort, isNumber } from "../../utils";

const TIMES = 3;

function Input({ setNumArr, setTictoc, tictoc }) {
  const [pushNum, setPushNum] = useState("");

  const numChange = (e) => {
    setPushNum(e.target.value);
  };

  const onReset = () => {
    setPushNum("");
  };

  const countThree = () => {
    setTimeout(() => setTictoc((tictoc) => tictoc - TIMES), 1000 * TIMES);
  };

  const numClick = (e) => {
    e.preventDefault();
    const re = /\s*(?:,|$)\s*/; // 공백을 제거하며 , 기준으로 자를 수 있는 정규 표현식
    const parsedArr = pushNum
      .split(re)
      .filter((item) => item !== "")
      .map((num) => Number(num)); // 연속 콤마 제거
    if (parsedArr.length === 0 || parsedArr.some((item) => item !== item)) {
      alert("올바르지 않은 형식입니다.");
    } else {
      const sortedArr = bubbleSort(parsedArr);
      setNumArr([...sortedArr]);
    }
    setTictoc(TIMES);
    onReset();
    countThree();
  };

  return (
    <div>
      <form onSubmit={numClick}>
        <input
          type="text"
          onChange={numChange}
          value={pushNum}
          onKeyup="this.value=this.value.replace(/[^,0-9]/g,'');"
        ></input>
        <button>클릭</button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      ></div>
    </div>
  );
}

export default Input;
