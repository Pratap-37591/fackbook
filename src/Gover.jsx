import React, { useState, useEffect } from "react";

const Govern = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((res) => res.json())
      .then((jsondata) => setData(jsondata.statewise));
  }, []);

  return (
    <div>
      <center>
        <h1>Covid 19 Cases</h1>
        <div className="container">
          <table className="table table-bordered ">
            <thead className="thead table-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Activecases</th>
                <th>lastupdate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.state}</td>
                    <td>{item.confirmed}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                    <td>{item.active}</td>
                    <td>{item.last_update_time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Govern;
