import React from "react";

function Results({ infoData }) {
  const mydata = infoData.collection.items;

  return mydata.map((item, index) => (
    <div key={index}>
      Results
      <img src="{item.links.map((p) => p.href)}" />
      {item.data.map((t) => (
        <>
          <h2>title:{t.title}</h2>
          <h3>data:{t.data_created}</h3>
          <p>description:{t.description}</p>
        </>
      ))}
    </div>
  ));
}

export default Results;
