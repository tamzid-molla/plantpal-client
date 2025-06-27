
import { Link } from 'react-router';
import { FaUser } from 'react-icons/fa';

const MyPlantsCards = ({totalPlants,myHealthyPlants}) => {
    return (
         <div className="bg-blue-500 text-white rounded-lg p-6 shadow-lg flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">My Plants</h3>
          <p className="text-2xl font-bold">{totalPlants}</p>
          <p className="text-sm">{myHealthyPlants} Healthy ({Math.round((myHealthyPlants / totalPlants) * 100) || 0}%)</p>
        </div>
        <FaUser className="text-4xl" />
        <Link to="/dashboard/myPlants" className="text-white hover:underline text-sm">
          View My Plants
            </Link>
      </div> 
    );
};

export default MyPlantsCards;