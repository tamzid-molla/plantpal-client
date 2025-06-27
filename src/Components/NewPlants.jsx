import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/FirebaseContext";
import NoPlants from "./NoPlants";

const NewPlants = ({ allData }) => {
  const { dark } = useContext(AuthContext);
  const AllInfo = allData;
  return (
    <div
      className={`my-28 card shadow-sm py-16 w-11/12 mx-auto rounded-xl`}>
      <h2 className="text-4xl text-center font-bold mb-10">
        NEW <span className="text-teal-600">PLANTS</span>
      </h2>
      {AllInfo.length === 0 ? (
        <NoPlants></NoPlants>
      ) : (
        <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 w-11/12 mx-auto">
          {AllInfo.map((data) => (
            <div key={data._id} className="">
              <div
                className={`relative ${
                  dark ? "bg-gray-600" : "bg-white"
                } rounded-2xl shadow-sm p-2 overflow-hidden
              
              `}>
                <div className="flex m-2 justify-center rounded-2xl mb-4 overflow-hidden relative">
                  <img
                    src={data.url}
                    alt={data.url}
                    className="w-full h-60 overflow-hidden hover:scale-110
                transition "
                  />
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-lg font-bold text-gray-800">
                    Plant : {data.plantName}
                  </h2>
                  <p
                    className={`text-sm ${
                      dark ? "text-teal-600" : "text-gray-600"
                    }`}>
                    <span className="font-semibold">
                      Added By : {data.userName}
                    </span>
                  </p>
                </div>

                {/* Details Button */}

                <div className="my-4 flex justify-center">
                  <Link to={`/plants/${data._id}`}>
                    <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-200">
                      Details
                    </button>
                  </Link>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-teal-200 rounded-full -translate-x-4 -translate-y-4 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-teal-200 rounded-full translate-x-4 translate-y-4 opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewPlants;
