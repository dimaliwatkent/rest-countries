import React, { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  const filteredData = data.filter((d) => {
    return d.name.common.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
      />
      {filteredData.map((d) => (
        <li key={`${d.ccn3}`}>
          <a href={`/country/${d.ccn3}`}>{d.name.common}</a>
        </li>
      ))}
    </>
  );
};

export default Countries;
