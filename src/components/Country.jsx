import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState(null);
  const { ccn3 } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${ccn3}`);
      const data = await res.json();
      setCountry(data);
    };

    fetchData();
  }, [ccn3]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{country[0].name.common}</h1>
      <p>Population: {country[0].population}</p>
      <p>Area: {country[0].area}</p>
      {/* Add more country details as needed */}
    </div>
  );
};

export default Country;
