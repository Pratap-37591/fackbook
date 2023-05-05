import React, { useState } from "react";
// import List2 from "./List2";
const List = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  // const AddItem = (e) => {
  //   setInpu(e.target.value);
  // };

  // const addItem = () => {
  //   setItems((oldvalues) => {
  //     return [...oldvalues, input];
  //   });
  //   setInput("");
  // };

  // const deleteitem = (id) => {
  //   setItems((curr) => {
  //     return curr.filter((arrelemnt, index) => {
  //       return index !== id;
  //     });
  //   });
  // };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <figure>
            <figcaption>Add Your List Here 👍</figcaption>
          </figure>
          {/* <br />
          <h1>Todo List</h1>
          <br /> */}
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <i
              className="fa fa-plus"
              aria-hidden="true"
              title="addItem"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((todo, index) => {
              return (
                <div className="eachItem">
                  <h3 key={index}>{input}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                  ></i>
                </div>
              );
            })}
          </div>
          {/* <input
            type="text"
            value={input}
            placeholder="Add a Items"
            onChange={(e) => e.target.value}
          />

          <button onClick={addItem}>
         
          </button> */}
          {/* <ol>
            {items.map((curr, index) => {
              return (
                <List2
                  pass={curr}
                  key={index}
                  id={index}
                  onSelect={deleteitem}
                />
              );
            })}
          </ol> */}

          <div className="showItems">
            <button className="btn effect04 " data-sm-link-text="Remove all">
              <span>check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
