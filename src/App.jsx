import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Country from "./components/Country";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {data.map((d) => (
              <li>
                <a href={`/country/${d.ccn3}`}>{d.name.common}</a>
              </li>
            ))}
          </>
        }
      />
      <Route path="/country/:ccn3" element={<Country />} />
    </Routes>
  );
};

export default App;
