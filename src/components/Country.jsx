import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Country = () => {
  const [country, setCountry] = useState(null);
  const { ccn3 } = useParams();
  let navigate = useNavigate();

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
    <div className="container">
      <div className="my-10 flex">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-light-text dark:text-dark-text bg-light-elements dark:bg-dark-elements rounded-lg px-4 py-2 inline-flex items-center shadow gap-2"
        >
          <IoMdArrowRoundBack className="text-light-text dark:text-dark-text" />
          Back
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 justify-between">
        <div className="w-full md:w-96">
          <img
            src={country[0].flags.png}
            alt={`${country[0].name.common} flag`}
            className="aspect-video w-full object-fill"
          />
        </div>
        <div className="text-light-text dark:text-dark-text">
          <h2 className="text-4xl font-bold mb-8">{country[0].name.common}</h2>
          <div className="flex gap-10">
            <div>
              <div className="flex gap-2">
                <p>
                  <strong>Native Name:</strong>
                </p>
                <p>{country[0].name.official}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Population:</strong>
                </p>
                <p>{country[0].population}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Region:</strong>
                </p>
                <p>{country[0].region}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Sub Region:</strong>
                </p>
                <p>{country[0].subregion}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Capital:</strong>
                </p>
                <p>{country[0].capital}</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <p>
                  <strong>Top Level Domain:</strong>
                </p>
                <p>{country[0].capital}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Currencies:</strong>
                </p>
                <p>{country[0].capital}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Languages:</strong>
                </p>
                <p>{Object.values(country[0].languages).join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
