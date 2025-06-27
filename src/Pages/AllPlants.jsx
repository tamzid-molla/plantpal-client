import React, { useContext, useEffect, useState } from "react";
import { FaLeaf, FaEye, FaSort, FaFilter } from "react-icons/fa";
import { Link } from "react-router";
import Loader from "../Components/Loader";
import NoPlants from "../Components/NoPlants";
import { AuthContext } from "../Context/FirebaseContext";

const AllPlants = () => {
  const { dark } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [loader, setLoader] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc
  const [filterCategory, setFilterCategory] = useState("all"); // all or specific category

  useEffect(() => {
    document.title = "PlantPal || All Plants";
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

  // Sorting function
  const handleSort = () => {
    const sortedItems = [...plants].sort((a, b) =>
      sortOrder === "asc"
        ? a.careLevelPriority - b.careLevelPriority
        : b.careLevelPriority - a.careLevelPriority
    );
    setPlants(sortedItems);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filtering function
  const handleFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  // Filtered plants
  const filteredPlants = filterCategory === "all"
    ? plants
    : plants.filter((plant) => plant.category === filterCategory);

  return (
    <div className="min-h-[calc(100vh-380px)] pt-8">
      {loader ? (
        <Loader></Loader>
      ) : plants.length === 0 ? (
        <NoPlants></NoPlants>
      ) : (
        <div className="">
          <div
            className={`container mx-auto p-4 sm:p-6 ${
              dark ? "bg-gray-700" : "bg-green-50"
            } rounded-xl my-28`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <button
                onClick={handleSort}
                className={`flex items-center gap-2 
                  dark  bg-teal-500  text-lg text-white px-4 py-2 rounded-lg hover:bg-teal-600`}
              >
                <FaSort /> Sort by Care Level{" "}
                {sortOrder === "asc" ? "(Asc)" : "(Desc)"}
              </button>
              <select
                onChange={handleFilter}
                value={filterCategory}
                className={`w-full sm:w-auto ${
                  dark ? "bg-gray-600 text-white" : "bg-white text-gray-900"
                } border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-600`}
              >
                <option value="all">All Categories</option>
                <option value="herb">Herb</option>
                <option value="fern">Fern</option>
                <option value="cactus">Cactus</option>
              </select>
            </div>
            <div className="bg-white rounded-xl overflow-hidden">
              <div className={`p-4 sm:p-6 bg-teal-600`}>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <FaLeaf className="text-green-200" /> Plant Collection
                </h2>
              </div>
              <div className={`grid grid-cols-1 ${dark && "bg-gray-700"} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6`}>
                {filteredPlants.map((plant) => (
                  <div
                    key={plant._id}
                    className={`bg-${
                      dark ? "gray-600" : "green-50"
                    } rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-103`}
                  >
                    <img
                      src={plant.url}
                      alt={plant.plantName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3
                        className={`text-lg font-medium ${
                          dark ? "text-gray-100" : "text-gray-900"
                        }`}
                      >
                        {plant.plantName}
                      </h3>
                      <p
                        className={`text-sm ${
                          dark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Care Level: {plant.careLevel}
                      </p>
                      <p
                        className={`text-sm ${
                          dark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Category: {plant.category}
                      </p>
                      <p
                        className={`text-sm ${
                          dark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Watering: {plant.wateringFrequency}
                      </p>
                      <Link
                        to={`/plants/${plant._id}`}
                        className={`mt-4 inline-flex items-center px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-200 text-sm`}
                      >
                        <FaEye className="mr-1" /> View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPlants;