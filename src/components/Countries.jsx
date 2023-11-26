import React, { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filteredData = data.filter((d) => {
    return (
      (selectedRegion === "All" || d.region === selectedRegion) &&
      d.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
      />
      <select value={selectedRegion} onChange={handleRegionChange}>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      {filteredData.map((d) => (
        <li key={`${d.ccn3}`}>
          <a href={`/country/${d.ccn3}`}>{d.name.common}</a>
        </li>
      ))}
    </>
  );
};

export default Countries;
