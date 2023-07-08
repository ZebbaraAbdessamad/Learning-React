import React  from 'react';
import '../style.css';
export default function Box(props) {
    return (
            <div className="card" >
              <img className="card-image" src={props.url} alt={props.name} />
              <div className="card-details">
                <h2>{props.name}</h2>
                <p>Dimensions: {props.width} x {props.height}</p>
                <p>Box Count: {props.box_count}</p>
                <p >Status: <span className={props.status ?'active' :'inactive'}>{props.status ? 'Active' : 'Inactive'} </span></p>
              </div>
              <button className='button' onClick={()=>props.handleClick(props.id)}> change</button>
            </div>
   )
}
  