
import { useContext } from 'react';
import { FaLeaf, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../Context/FirebaseContext';

const NoPlants = () => {
    const { dark } = useContext(AuthContext);
    return (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 text-center min-h-[300px]">
        <FaLeaf className="text-green-400 text-4xl sm:text-5xl mb-4" />
        <h3 className={`text-lg sm:text-xl font-semibold ${dark?"text-gray-200":" text-gray-800"} mb-2`}>
            No Plants Found
        </h3>
        <p className={`${dark?"text-gray-200":"text-gray-600"} text-sm sm:text-base mb-4`}>
            It looks like you haven't added any plants yet.
        </p>
        <Link
            to="/addPlants"
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base"
        >
            <FaPlus className="mr-1 sm:mr-2" /> Add a Plant
        </Link>
    </div>
    );
};

export default NoPlants;