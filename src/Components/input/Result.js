import React, { useEffect, useState } from 'react';

function Result({ inputData }) {
  const [data, setData] = useState('');

  function decrease() {
    // 내림차순
  }

  function increase() {
    //  오름차순
  }
  useEffect(() => {
    setData(inputData);

    // decrease();
    // increase();
  }, [inputData]);

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
          style={{ border: '1px solid #c9c9c9', width: '25%', height: '80%' }}
        >
          내림차순
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <div
          style={{ border: '1px solid #c9c9c9', width: '25%', height: '80%' }}
        >
          오름차순
        </div>
      </div>
    </div>
  );
}

export default Result;
