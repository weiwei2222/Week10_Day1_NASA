import React from "react";

function Results({ infoData }) {
  const mydata = infoData.collection.items;

  return mydata.map((item, index) => (
    <div key={index}>
      Results
      {/* <span>{item.links.map((p) => p.href)}</span> */}
      <h2>titile:{item.data.map((t) => t.title)}</h2>
      <h3>data:{item.data.map((t) => t.data_created)}</h3>
      <p>description:{item.data.map((t) => t.description)}</p>
    </div>
  ));
}

export default Results;
