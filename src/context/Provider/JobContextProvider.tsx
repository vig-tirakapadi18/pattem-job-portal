import { useState, type ReactNode } from "react";
import JobsContext from "../JobContext";

const JobsContextProvider = ({ children }: { children: ReactNode }) => {
  const [appliedJobIds, setAppliedJobIds] = useState<string[]>([]);

  const applyToJob = (jobId: string) => {
    setAppliedJobIds((prevIds) => {
      if (prevIds.findIndex((id) => id === jobId) >= 0) {
        return prevIds;
      }

      return [...prevIds, jobId];
    });
  };

  return (
    <JobsContext.Provider
      value={{
        appliedCount: appliedJobIds.length,
        appliedJobIds,
        applyToJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContextProvider;
