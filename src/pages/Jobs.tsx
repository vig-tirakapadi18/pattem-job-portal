import React from "react";
import { jobs } from "../data/jobs";
import JobCard from "../components/ui/JobCard";

const Jobs = (): React.JSX.Element => {
  return (
    <main className="py-10 px-6">
      <h1 className="font-bold text-center text-4xl">
        Discover Your Next Opportuinity
      </h1>
      <h3 className="text-xl text-center my-4 text-gray-700">
        {jobs.length} curated job opportunities waiting for you
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex gap-6">
          <div className="bg-gray-200 px-4 py-2 rounded-full shadow-lg">
            🎯 AI-Matched
          </div>
          <div className="bg-gray-200 px-4 py-2 rounded-full shadow-lg">
            ⚡️ Quick Apply
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-2 rounded-full shadow-lg">
          🏆 Top Companies
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-6 p-4 md:px-60 md:flex-wrap">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
};

export default Jobs;
