import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, image, population, region, capital, ccn3 }) => {
  return (
    <>
      <Link to={`/country/${ccn3}`}>
        <div className="card w-64 bg-light-elements dark:bg-dark-elements rounded-lg overflow-hidden shadow hover:shadow-lg">
          <img
            src={image}
            alt={`${name} flag`}
            className="aspect-[320/180] object-fill w-full h-full"
          />
          <div className="p-5 text-light-text dark:text-dark-text">
            <h2 className="text-lg font-bold py-3">{name}</h2>
            <div className="text-sm">
              <div className="flex gap-2">
                <p>
                  <strong>Population:</strong>
                </p>
                <p>{population}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Region:</strong>
                </p>
                <p>{region}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Capital:</strong>
                </p>
                <p>{capital}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
