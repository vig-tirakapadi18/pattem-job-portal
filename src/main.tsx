import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import JobsContextProvider from "./context/Provider/JobContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <JobsContextProvider>
        <App />
      </JobsContextProvider>
    </BrowserRouter>
  </StrictMode>
);
