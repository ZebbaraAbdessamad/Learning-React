import React from 'react';
import '../style.css';

export default function Calculator(props) {
  return (
    <div className="calculator">
      <div className="result">Result by {props.myname} is : {props.value}</div>
      <div className="button-container">
        <button className="button" onClick={props.handleClick}>Add</button>
        <button className="button" onClick={props.handleClick2}>Subtract</button>
      </div>
    </div> 
  );
}
