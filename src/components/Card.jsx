import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, image, population, region, capital, ccn3 }) => {
  return (
    <>
      <Link to={`/country/${ccn3}`}>
        <div className="card max-w-xs">
          <img
            src={image}
            alt={`${name} flag`}
            className="aspect-[320/213] object-fill w-full h-full"
          />
          <div>
            <h2>{name}</h2>
            <div>
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
