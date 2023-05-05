import React, { useState } from "react";
import Todoitem from "./Todoitem";
const Todolist = () => {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);

  const addItem = (e) => {
    //  console.log("Event occured")
    setList(e.target.value);
  };

  const newItem = () => {
    setItem((itemAdd) => {
      return [...itemAdd, list];
    });
    setList("");
  };

  const deleteList = (id) => {
    setItem((oldvalue) => {
      return oldvalue.filter((curArr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="todolist">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={list}
          placeholder="Enter new items"
          onChange={addItem}
        />
        <button onClick={newItem}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <ol>
          {item.map((value, index) => {
            return (
              <Todoitem
                key={index}
                id={index}
                listAdd={value}
                deletedItem={deleteList}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todolist;
