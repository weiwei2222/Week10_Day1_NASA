import React from "react";

function Results({ infoData }) {
  const mydata = infoData.collection.items;

  return mydata.map((item, index) => (
    <div key={index}>
      Results
      <img src="{item.links.map((p) => p.href)}" />
      <h2>titile:{item.data.map((t) => t.title)}</h2>
      <h3>data:{item.data.map((t) => t.data_created)}</h3>
      <p>description:{item.data.map((t) => t.description)}</p>
    </div>
  ));
}

export default Results;
