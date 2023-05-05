import React from "react";

const Todoitem = ({ listAdd,  deletedItem, id }) => {

   
  return (
    <>
      <div className="addedItem">
        <li>{listAdd}</li>
        <i class="fa-duotone fa-pen-to-square"></i>
        <i className="fa-solid fa-trash" onClick={ ()=>{deletedItem(id)}}></i>
      </div>
    </>
  );
};

export default Todoitem;
