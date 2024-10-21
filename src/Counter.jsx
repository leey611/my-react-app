import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
        //setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(count + 1)
    };
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }
  export default Counter