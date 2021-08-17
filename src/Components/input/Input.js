import React, { useState } from 'react';
import Result from './Result';

function Input(props) {
  const [num, setNum] = useState([]);
  const [pushNum, setPushNum] = useState('');

  const numChange = (e) => {
    setPushNum(e.target.value);
  };

  const onReset = () => {
    setPushNum('');
  };

  const numClick = () => {
    setNum([...num, pushNum]);
    onReset();
  };

  const numRender = num.map((n, index) => {
    return (
      <span key={index} style={{ border: '1px solid #c9c9c9', margin: '2px' }}>
        {n}
      </span>
    );
  });

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <div
          style={{
            border: '1px solid #c9c9c9',
            width: '25%',
            padding: '40px 10px',
          }}
        >
          <input type="number" onChange={numChange} value={pushNum}></input>
          <button onClick={numClick}>클릭</button>

          <div style={{ margin: '30px' }}>{numRender}</div>
          <div>
            <button>Sorting 시작</button>
          </div>
        </div>
      </div>
      <div>
        <Result inputData={num} />
      </div>
    </div>
  );
}

export default Input;
