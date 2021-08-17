import React, { useState } from "react";
import { bubbleSort } from "../../utils";
import { TIMES, REG } from "./constant";
import "./input.css";

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
    const parsedArr = pushNum
      .split(REG)
      .filter((item) => item !== "") // 연속 콤마 제거
      .map((num) => Number(num));
    // 숫자가 들어오지 않는 경우와, 숫자가 아닌 경우의 NaN에 대한 예외처리
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
    <div className="input-box">
      <div className="input-info">
        <form onSubmit={numClick}>
          <input
            type="text"
            onChange={numChange}
            value={pushNum}
            placeholder="숫자,숫자 형식으로 입력"
          ></input>
          <div style={{ marginTop: "20px" }}>
            <button>시작 버튼</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
