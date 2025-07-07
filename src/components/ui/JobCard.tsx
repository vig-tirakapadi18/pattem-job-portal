import React from "react";
import type { jobs } from "../../data/jobs";
import { FaChevronRight, FaRegBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface IJobCardProps {
  job: (typeof jobs)[0];
}

const JobCard = ({ job }: IJobCardProps): React.JSX.Element => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-xl md:w-[45%] transition-transform duration-500 hover:-translate-y-2 w-fit">
      <div className="flex justify-between w-full items-center gap-6">
        <h1 className="font-semibold text-nowrap">{job.title}</h1>
        <span className="text-xs bg-green-200 text-green-800 font-semibold p-1 rounded-full text-center">
          {job.ai_match_score}% Excellent Match
        </span>
      </div>
      <div className="flex justify-between my-1 text-gray-600 text-sm">
        <div className="flex gap-2">
          <div className="flex gap-1 items-center">
            <FaRegBuilding />
            {job.company}
          </div>
          <div className="flex gap-1 items-center">
            <IoLocationOutline />
            {job.location}
          </div>
        </div>

        <span className="text-xs text-nowrap">{job.posted}</span>
      </div>

      <div className="line-clamp-2 text-gray-600 my-2">{job.description}</div>

      <div className="flex justify-between items-center text-sm text-nowrap gap-1">
        <div className="font-semibold">{job.salary}</div>
        <span className="text-xs text-gray-600">{job.type}</span>
        <Link
          to={`/jobs/${job.id}`}
          className="flex items-center text-blue-700 font-semibold gap-1"
        >
          View Details <FaChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
