import { useLoaderData, useNavigate } from 'react-router';
import { FaLeaf, FaArrowLeft, FaDroplet, FaCalendar, FaHeart, FaUser } from 'react-icons/fa6';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/FirebaseContext';

const ViewDetails = () => {
  const { dark } = useContext(AuthContext);
  const navigate = useNavigate();
  const plant = useLoaderData();

  useEffect(() => {
    document.title = `PlantPal || Details ${plant.plantName}`;
  }, [plant]);

  return (
    <div className="pt-8">
      <div
        className={`container mx-auto p-4 sm:p-6 ${
          dark ? 'bg-gray-800' : 'bg-green-50'
        } py-10 mb-20 rounded-xl flex items-center justify-center mt-20`}
      >
        <div
          className={`${
            dark ? 'bg-gray-700 border border-teal-600' : 'bg-white border border-teal-500'
          } rounded-2xl shadow-lg max-w-4xl w-full transform transition-all hover:shadow-xl duration-300 overflow-hidden`}
        >
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative">
              <div className="w-full h-64 sm:h-80 md:h-auto">
                <img
                  src={plant.url}
                  alt={plant.plantName}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-teal-900/40"></div>
              </div>
              <button
                onClick={() => navigate('/allPlants')}
                className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200 text-sm sm:text-base"
              >
                <FaArrowLeft className="mr-1" /> Back
              </button>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="text-center md:text-left">
                <h2
                  className={`text-2xl sm:text-3xl font-bold ${
                    dark ? 'text-teal-200' : 'text-teal-600'
                  } flex items-center gap-2`}
                >
                  <FaLeaf /> {plant.plantName}
                </h2>
                <p
                  className={`text-sm sm:text-base ${
                    dark ? 'text-teal-300' : 'text-teal-500'
                  } italic capitalize`}
                >
                  Category: {plant.category}
                </p>
              </div>

              <div className="space-y-4">
                {/* Description */}
                <div
                  className={`${
                    dark ? 'bg-teal-900/30 border border-teal-600' : 'bg-teal-50 border border-teal-500'
                  } rounded-lg p-4 shadow-md`}
                >
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      dark ? 'text-teal-200' : 'text-teal-600'
                    } flex items-center gap-2`}
                  >
                    <FaLeaf /> Description
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      dark ? 'text-teal-300' : 'text-teal-700'
                    } mt-2`}
                  >
                    {plant.description}
                  </p>
                </div>

                {/* Care Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaHeart className="text-teal-500" />
                    <p
                      className={`text-sm sm:text-base ${
                        dark ? 'text-teal-200' : 'text-teal-600'
                      }`}
                    >
                      <strong>Care Level:</strong> {plant.careLevel}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaDroplet className="text-teal-500" />
                    <p
                      className={`text-sm sm:text-base ${
                        dark ? 'text-teal-200' : 'text-teal-600'
                      }`}
                    >
                      <strong>Watering Frequency:</strong> {plant.wateringFrequency}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCalendar className="text-teal-500" />
                    <p
                      className={`text-sm sm:text-base ${
                        dark ? 'text-teal-200' : 'text-teal-600'
                      }`}
                    >
                      <strong>Last Watered:</strong> {plant.lastWateredDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCalendar className="text-teal-500" />
                    <p
                      className={`text-sm sm:text-base ${
                        dark ? 'text-teal-200' : 'text-teal-600'
                      }`}
                    >
                      <strong>Next Watering:</strong> {plant.nextWateringDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaHeart className="text-teal-500" />
                    <p
                      className={`text-sm sm:text-base ${
                        dark ? 'text-teal-200' : 'text-teal-600'
                      }`}
                    >
                      <strong>Health Status:</strong> {plant.healthStatus}
                    </p>
                  </div>
                </div>

                {/* Added By */}
                <div
                  className={`${
                    dark ? 'bg-teal-900/30 border border-teal-600' : 'bg-teal-50 border border-teal-500'
                  } rounded-lg p-4 shadow-md`}
                >
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      dark ? 'text-teal-200' : 'text-teal-600'
                    } flex items-center gap-2`}
                  >
                    <FaUser /> Added By
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      dark ? 'text-teal-300' : 'text-teal-700'
                    } mt-1`}
                  >
                    {plant.userName} ({plant.userEmail})
                  </p>
                </div>

                {/* Added On */}
                <p
                  className={`text-sm sm:text-base ${
                    dark ? 'text-teal-300' : 'text-teal-500'
                  } text-center md:text-left`}
                >
                  <strong>Added On:</strong>{' '}
                  {new Date(plant.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;