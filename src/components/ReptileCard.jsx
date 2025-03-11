import React from "react";
import { Link } from "react-router-dom";
const ReptileCard = ({ reptile }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src={reptile.image}
          alt={reptile.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-2">{reptile.name}</h2>
        <p className="text-gray-600">{reptile.period}</p>
        <Link
          to={`/reptile/${reptile.id}`}
          className="text-blue-500 mt-2 block"
        >
          Learn More
        </Link>
      </div>
    </>
  );
};

export default ReptileCard;
