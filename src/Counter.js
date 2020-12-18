import React,{useState} from 'react';
import './App.css';

function Counter(){
    const [count,setCount] =  useState(0)
    return(
        <div className="App">
        <header>
          <h1>
            Counter app using state
          </h1>
        </header>
        <h2>
          Current value of count is {count}
        </h2>
        <button onClick={()=>{setCount(0)}}> Reset Counter</button>
        <button onClick={() =>count>=10 ? "Sorry u cant add more than 10": setCount(count +1)}>Increase Counter </button>
        <button onClick={() =>count==0 ? "Sorry u cant go negative": setCount(count -1)}>Decrease Counter </button>
         </div>
    );

}
export default Counter;