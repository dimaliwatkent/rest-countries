import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";

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

  const filteredData = data.filter((country) => {
    return (
      (selectedRegion === "All" || country.region === selectedRegion) &&
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="relative my-10">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="text-light-text dark:text-dark-text" />
          </div>
          <input
            type="search"
            value={searchInput}
            // className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            className="block w-96 p-3 ps-10 text-md bg-light-elements dark:bg-dark-elements text-ligh-text dark:text-dark-text rounded-lg shadow"
            placeholder="Search for a country..."
            onChange={handleInputChange}
          />
        </div>
        {/* <input */}
        {/*   type="text" */}
        {/*   placeholder="Search..." */}
        {/*   value={searchInput} */}
        {/*   onChange={handleInputChange} */}
        {/* /> */}
        <select value={selectedRegion} onChange={handleRegionChange}>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap gap-6">
          {filteredData.map((country) => (
            <Card
              name={country.name.common}
              image={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
              ccn3={country.ccn3}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
