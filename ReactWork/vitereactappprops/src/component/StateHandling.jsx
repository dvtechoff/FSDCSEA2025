import React, { useState } from 'react';

function StateHandling(){
    const [count,setCount] = useState(20);
    function increase(){
        setCount(count +1);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increase}>Increment</button>
            <button onClick={()=> setCount(count -1)}> Decrement</button>
        </div>
    )
}

export default StateHandling