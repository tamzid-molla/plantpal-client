
import { Link } from "react-router";
import {  FaChartPie } from "react-icons/fa";

const PlantsHealth = ({ totalPlants, myHealthyPlants }) => {
  return (
    <div className="bg-pink-500 text-white rounded-lg p-6 shadow-lg flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">Plant Health Overview</h3>
        <p className="text-2xl font-bold">
          {myHealthyPlants}/{totalPlants} Healthy
        </p>
        <p className="text-sm">
          {totalPlants - myHealthyPlants || 0} need attention
        </p>
      </div>
      <FaChartPie className="text-4xl" />
      <Link to="/dashboard/health" className="text-white hover:underline text-sm">
        Check Health
      </Link>
    </div>
  );
};

export default PlantsHealth;
