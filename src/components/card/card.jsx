import React from "react";
import './card.css';

const Card=(props)=>{
return(
    <div className="card">
        <img src={`https://robohash.org/${props.manager.id}?set=set4&size=180x180`}/>    
  <h3 key={props.manager.id}>{props.manager.name}</h3>
  <p>{props.manager.email}</p>
    </div>
)
}
export default Card; 