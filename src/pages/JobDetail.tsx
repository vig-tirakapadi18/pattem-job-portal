import React from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { BsBuildings } from "react-icons/bs";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FaCheck, FaPlus } from "react-icons/fa";

const JobDetail = (): React.JSX.Element => {
  const { jobId } = useParams();

  const currentJob = jobs?.find((job) => job.id === Number(jobId));

  return (
    <div className="max-w-3xl my-6 rounded-2xl overflow-hidden shadow-lg border border-gray-200 md:mt-40 mx-6">
      <div className="bg-gradient-to-r from-purple-700 to-fuchsia-600 p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">{currentJob?.title}</h2>
            <span className="bg-green-200 text-green-800 px-3 rounded-full font-medium text-sm flex items-center text-nowrap h-10">
              {currentJob?.ai_match_score}% Match
            </span>
          </div>
          <div className="flex flex-col font-semibold mt-2 gap-4">
            <div className="flex items-center gap-1">
              <BsBuildings />
              <span className="font-medium">{currentJob?.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <IoLocationOutline />
              <span>{currentJob?.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <IoTimeOutline />
              <span>{currentJob?.posted}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700 mb-4">{currentJob?.description}</p>

          <h3 className="text-lg font-semibold mb-2">Requirements</h3>
          <ul className="space-y-2 text-gray-700">
            {currentJob?.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <FaCheck className="text-blue-600" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-60 mt-6 sm:mt-0">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-3">Job Overview</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <div>
                <span className="font-medium">Salary: </span>
                {currentJob?.salary}
              </div>
              <div>
                <span className="font-medium">Job Type: </span>
                {currentJob?.type}
              </div>
              <div>
                <span className="font-medium">Location: </span>
                {currentJob?.location}
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition-all my-2 cursor-pointer">
            <FaPlus /> Apply Now
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg transition-all my-2 cursor-pointer">
            Back to Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
