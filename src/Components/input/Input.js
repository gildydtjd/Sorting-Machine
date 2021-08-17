import React, { useEffect, useState } from "react";
import { bubbleSort, isNumber } from "../../utils";

const TIMES = 3;

function Input({ setNumArr, setTictoc, tictoc }) {
  //const [num, setNum] = useState([]);
  const [pushNum, setPushNum] = useState("");
  //const [numArr, setNumArr] = useState([]);

  const numChange = (e) => {
    setPushNum(e.target.value);
  };

  const onReset = () => {
    setPushNum("");
  };

  const countThree = () => {
    setTimeout(() => setTictoc((tictoc) => tictoc - TIMES), 1000 * TIMES);
    console.log(tictoc);
  };

  const numClick = (e) => {
    e.preventDefault();
    const re = /\s*(?:,|$)\s*/; // 공백을 제거하며 , 기준으로 자를 수 있는 정규 표현식
    const parsedArr = pushNum
      .split(re)
      .filter((item) => item !== "")
      .map((num) => Number(num)); // 연속 콤마 제거
    if (parsedArr.length === 0 || parsedArr.find((item) => !isNumber(item))) {
      console.log("올바르지 않은 형식입니다.");
    } else {
      console.log(parsedArr.join(", "));
      const sortedArr = bubbleSort(parsedArr);
      setNumArr([...sortedArr]);
      //console.log(numArr);
      console.log(sortedArr);
    }
    setTictoc(TIMES);
    //setNum([...num, pushNum]);
    onReset();
    countThree();
  };

  //const numRender = num.map((n, index) => {
  //  return (
  //    <span key={index} style={{ border: "1px solid #c9c9c9", margin: "2px" }}>
  //      {n}
  //    </span>
  //  );
  //});

  return (
    <div>
      <form onSubmit={numClick}>
        <input type="text" onChange={numChange} value={pushNum}></input>
        <button>클릭</button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        {/*{numRender}*/}
      </div>
    </div>
  );
}

export default Input;
