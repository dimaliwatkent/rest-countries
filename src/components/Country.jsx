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
      <div class="bg-white dark:bg-gray-800">
        <h1 class="text-gray-900 dark:text-white">Dark mode</h1>
        <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      </div>
    </div>
  );
};

export default Country;
