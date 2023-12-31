import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./style/global";
import { LoginProvider } from "./contexts/LoginContext";
import { DashboardProvider } from "./contexts/DashboardContext";
import { FilterProvider } from "./contexts/FilterContext";
import { EmployeeProvider } from "./contexts/EmployeeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <LoginProvider>
          <DashboardProvider>
            <EmployeeProvider>
              <GlobalStyles />
              <App />
            </EmployeeProvider>
          </DashboardProvider>
        </LoginProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//Deus seja louvado
