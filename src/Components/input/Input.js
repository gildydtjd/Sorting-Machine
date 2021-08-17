import React, { useState } from "react";
import { isNumber } from "../../utils";

function Input(props) {
  //const [num, setNum] = useState([]);
  const [pushNum, setPushNum] = useState("");
  //const [numArr, setNumArr] = useState([]);

  const numChange = (e) => {
    setPushNum(e.target.value);
  };

  const onReset = () => {
    setPushNum("");
  };

  const numClick = (e) => {
    e.preventDefault();
    const re = /\s*(?:,|$)\s*/; // 공백을 제거하며 , 기준으로 자를 수 있는 정규 표현식
    const numArr = pushNum.split(re).filter((item) => item !== ""); // 연속 콤마 제거
    if (
      numArr.length === 0 ||
      numArr.find((item) => !isNumber(item)) === undefined
    ) {
      console.log("올바르지 않은 형식입니다.");
    } else {
      console.log(numArr.join(", "));
    }
    console.log(numArr);

    //setNum([...num, pushNum]);
    onReset();
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
