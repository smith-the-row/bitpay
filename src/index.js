// import the react components
import React from "react";
import ReactDOM from "react-dom";

// import the stylesheets for bootstrap,react-toastify and the index or global stylesheet
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// this function returns the report for the website
import reportWebVitals from "./reportWebVitals";

// import the react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// imports from material ui
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

// import Pages or Routes
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Account from "./pages/Account";
import Invest from "./pages/Invest";
import Wallets from "./pages/Wallets";
import TransactionsPage from "./pages/TransactionsPage";
import Refer from "./pages/Refer";
import Terms from "./pages/Terms";
import Signals from "./pages/Signals";

// import the user context that will Cover the applications and control authentication state
import UserProvider from "./context/UserContext";

ReactDOM.render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/deposit/wallet" element={<Wallets />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/account" element={<Account />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
