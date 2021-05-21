import { Typography, Paper } from "@material-ui/core";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";

import { getBalance } from "../Logic/getBalance";
import { getLoggedIn } from "../Logic/getLoggedIn";
import { getTrades } from "../Logic/getTrades";

import { TradesTable } from "../Components/TradesTable";

import "./css/HomePage.css";

export const HomePage = () => {
  const [krakenInfo, setKrakenInfo] = useState({
    loggedIn: true,
    balance: "$ 0.00",
    trades: {},
  });

  useEffect(() => {
    getLoggedIn(krakenInfo, setKrakenInfo);
    getBalance(krakenInfo, setKrakenInfo);
    getTrades(krakenInfo, setKrakenInfo);
  }, []);

  return (
    <div className="HomePage">
      {krakenInfo.loggedIn ? (
        <Typography>Home Page:</Typography>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};
