import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/Log-In/About/About";
import LogInOrSignUp from "./pages/Log-In/LogInOrSignUp/LogInOrSignUp";

import Home from "./pages/Logged-In/Home/Home";
import Profile from "./pages/Logged-In/Profile/Profile";
import Unranked from "./pages/Logged-In/Unranked/Unranked";
import ProDev from "./pages/Logged-In/ProDev/ProDev";
import CustomRoom from "./pages/Logged-In/GroupBattle/CustomRoom";

import Layout from "./pages/Layout.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="init" element={<LogInOrSignUp />} />
          </Route>
          <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="unranked" element={<Unranked />} />
            <Route path="dev" element={<ProDev />} />
            <Route path="custom" element={<CustomRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
