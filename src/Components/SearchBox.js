import React from "react";
import "./SearchBoxStyle.css";

const SearchBox = () => {
  return (
    <div>
      <form className="col-container">
        <div className="col" >
          <label>Where</label>
          <input type="text" placeholder="Enter Keyword"/>
        </div>

        <div className="col">
          <label>When</label>
          <input type="date"/>
        </div>

        <div className="col">
          <label>Type</label>
          <input type="text"/>
        </div>
      </form>
    </div>
    
  );
};

export default SearchBox;
