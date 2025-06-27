import { useContext } from 'react';
import { FaTint, FaSun, FaSeedling, FaLeaf } from 'react-icons/fa';
import { AuthContext } from '../Context/FirebaseContext';

const TopPlantCareMistakes = () => {
  const { dark } = useContext(AuthContext);
  const mistakes = [
    {
      icon: <FaTint className="text-blue-500 text-4xl" />,
      title: "Overwatering",
      description: "Excessive watering can lead to root rot and hinder plant growth.",
      tip: "Check if the soil is dry before watering. Typically, once a week is sufficient."
    },
    {
      icon: <FaSun className="text-yellow-500 text-4xl" />,
      title: "Lack of Light",
      description: "Insufficient light causes weak growth and leaf drop.",
      tip: "Ensure plants get adequate indirect sunlight based on their needs."
    },
    {
      icon: <FaSeedling className="text-green-500 text-4xl" />,
      title: "Wrong Soil Type",
      description: "Incorrect soil can block nutrient absorption and harm roots.",
      tip: "Use well-draining soil suited to the plant, like sandy mix for succulents."
    },
    {
      icon: <FaLeaf className="text-green-700 text-4xl" />,
      title: "Over-Fertilizing",
      description: "Too much fertilizer can burn roots and stunt growth.",
      tip: "Apply a light dose of fertilizer monthly during the growing season."
    }
  ];

  return (
    <div className="py-12 my-28 card-xl rounded-2xl shadow-sm w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-12">
          Top Plant Care Mistakes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mistakes.map((mistake, index) => (
            <div
              key={index}
              className={`${
                  dark ? "bg-gray-600" : "bg-white"
                } py-10 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-103 hover:shadow-xl`}
            >
              <div className="flex justify-center mb-4">{mistake.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{mistake.title}</h3>
              <p className=" mb-4">{mistake.description}</p>
              <p className="text-green-600 font-medium">
                <span className="font-bold">Tip:</span> {mistake.tip}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TopPlantCareMistakes;