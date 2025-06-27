
import {  FaWater, } from 'react-icons/fa';
import { Link } from 'react-router';

const CareReminderCard = ({reminders}) => {
    return (
        <div className="bg-orange-500 text-white rounded-lg p-6 shadow-lg flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Care Reminders</h3>
          <p className="text-2xl font-bold">{reminders?.length}</p>
          <p className="text-sm">
            {reminders?.length > 0 ? `${reminders[0].plantName} needs watering!` : 'No reminders'}
          </p>
        </div>
        <FaWater className="text-4xl" />
        <Link to="/dashboard/reminder" className="text-white hover:underline text-sm">
          See All Reminders
            </Link>
      </div>
    );
};

export default CareReminderCard;