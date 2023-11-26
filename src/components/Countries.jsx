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
        <div className="flex flex-col md:flex-row justify-between my-10 gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch className="text-light-text dark:text-dark-text" />
            </div>
            <input
              type="search"
              value={searchInput}
              className="block w-full md:w-96 p-3 ps-10 text-md bg-light-elements dark:bg-dark-elements text-light-text dark:text-dark-text rounded-lg shadow"
              placeholder="Search for a country..."
              onChange={handleInputChange}
            />
          </div>
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className="block w-48 p-3 text-md bg-light-elements dark:bg-dark-elements text-light-text dark:text-dark-text rounded-lg shadow"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-between gap-6">
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
