import "./App.css";
import React, { useState } from "react";
import Input from "./Components/input/Input";
import Timer from "./Components/timer/Timer";
import Result from "./Components/result";

function App() {
  const [numArr, setNumArr] = useState([]);
  const [tictoc, setTictoc] = useState(3);

  return (
    <div className="App">
      <div>
        <Timer />
        <Input setNumArr={setNumArr} setTictoc={setTictoc} tictoc={tictoc} />
        <Result numArr={numArr} />
        {tictoc === 0 && <Result numArr={[...numArr].reverse()} />}
        <Timer Language />
      </div>
    </div>
  );
}

export default App;
