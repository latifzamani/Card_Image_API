import React from "react";
import './search.css';

const Search=({placeholder,handleChange})=>{
    return(

        <div className="search">
        <input type='search' placeholder={`search ${placeholder}`} className='input' onChange={handleChange}/>
        </div>
    );
}
export default Search;