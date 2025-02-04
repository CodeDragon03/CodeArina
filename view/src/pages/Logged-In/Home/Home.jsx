import React from "react";

import BattleMap from "../../../components/BattleMap";
import DashBorad from "../../../components/DashBorad";
import Experience from "../../../components/Experience";

import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <BattleMap />
      <DashBorad />
      <Experience />
    </>
  );
};

export default Home;
