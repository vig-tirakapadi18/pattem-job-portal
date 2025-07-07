import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Layout from "./components/layout/Layout";

const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
