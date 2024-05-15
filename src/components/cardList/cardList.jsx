import React from "react";
import Card from '../card/card';
import './cardList.css';
const CardList=(props)=>{
   return(
    <div className="cardList">
        {
            props.manager.map((manager)=>{
                return <Card manager={manager}></Card>
         })
        }
    </div>
   );
};

export default CardList;