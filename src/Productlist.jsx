import React, { useState, useEffect } from "react";

const Productlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((objData) => setData(objData));
  }, []);

  return (
    <>
      <h1 className="text-center">Store API in Table</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td><img src="(require{item.image})" alt="image"/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Productlist;
