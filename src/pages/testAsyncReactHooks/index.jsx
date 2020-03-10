import React, { useState, useEffect } from 'react';

import './index.scss';

const TestAsyncReactHooks = () => {
  const [ count, setCount ] = useState(0);
  // const count = 'zero';
  // const handleClick = () => {
  //     () => setCount(count => count + 1);
  // };
  const [ response, setResponse ] = useState('no result');

  const resolveAfter10Seconds = () =>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('mock api result');
      }, 5000);
    });
  };
  useEffect(() => {
      const internal = setInterval(() => void setCount(count => count + 1), 1000);
      const getResponse = async () => {
        const result = await resolveAfter10Seconds();
        setResponse(result);
      };
      getResponse();
      return () => clearInterval(internal);
      },
      []
  );
  return (
      <div>
          <h1>click to add or waiting for auto increasing: {count}</h1>
          <button onClick={() => setCount(count => count + 1)}>Click me</button>

          <h2>get api result: [{response}] ## {count} seconds waited</h2>
      </div>
  );
};

export default TestAsyncReactHooks;