import React, { useState } from 'react';

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
      <input type="text" onChange={numChange} value={pushNum}></input>
      <button onClick={numClick}>클릭</button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        {numRender}
      </div>
    </div>
  );
}

export default Input;
