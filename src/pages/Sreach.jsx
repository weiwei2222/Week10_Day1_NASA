import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Results from "../components/results";

function Sreach() {
  const [formData, setFormData] = useState({
    searchterm: "",
  });
  const [infoData, setInfoData] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getSreach(formData.searchterm);
    console.log(formData.searchterm);
  };

  const getSreach = async (searchTerm) => {
    const url = `https://images-api.nasa.gov/search?q=${searchTerm}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfoData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getSreach();
  }, []);

  console.log(infoData, typeof infoData);

  return (
    <>
      <div>This is Sreach page.</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      {/* {infoData ? <Results infoData={infoData} /> : "loading...."} */}
    </>
  );
}

export default Sreach;
