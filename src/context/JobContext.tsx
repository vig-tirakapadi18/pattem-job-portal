import { createContext } from "react";

interface IJobsContext {
  appliedCount: number;
  appliedJobIds: string[];
  applyToJob: (jobId: string) => void;
}

const JobsContext = createContext<IJobsContext | null>(null);

export default JobsContext;
