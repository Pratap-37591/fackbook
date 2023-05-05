import React from "react";

const List2 = ({ pass, id, onSelect }) => {
  return (
    <>
      <div className="todoStyle">
      <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=> onSelect(id)}></i>
         <li key={id}>{pass}</li>
      </div>
    </>
  );
};

export default List2;
