import { useContext } from "react";
import JobsContext from "../../context/JobContext";

const useJobContext = () => {
  return useContext(JobsContext);
};

export default useJobContext;
