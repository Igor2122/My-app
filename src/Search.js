import React from "react";

function Search ({setState}){
  
  return (
    <div className="col">
      <input className="form-control" 
      type="text" 
      placeholder="Search"
      onChange={(e) => setState(e.target.value)}/>
    </div>
  )
}
export default Search;