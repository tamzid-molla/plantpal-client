import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router";

const AllPlantsCards = () => {
  const [plants, setPlants] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseURL}/plants`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
      });
  }, []);
  const allPlantsCount = plants?.length;
  console.log(allPlantsCount);
  return (
    <div className="bg-purple-500 text-white rounded-lg p-6 shadow-lg flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">All Plants</h3>
        <p className="text-2xl font-bold">{allPlantsCount}</p>
        <p className="text-sm">Explore {allPlantsCount}+ plant varieties</p>
      </div>
      <FaLeaf className="text-4xl" />
      <Link to="/allPlants" className="text-white hover:underline text-sm">
        Explore All Plants
      </Link>
    </div>
  );
};

export default AllPlantsCards;
