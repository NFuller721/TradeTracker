import React, { useState } from "react";
import { Api } from "../Logic/Api";
import { Login } from "./LoginPage";
import { Button, Typography } from "@material-ui/core";

interface Balance {
  Response: {
    error: [];
    result: {
      ZUSD: string;
    };
  };
}

export const Homepage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [balance, setBalance] = useState<Balance>();
  const [loginFormValues, setLoginFormValues] = useState({
    apiKey: "",
    secretKey: "",
  });

  const getLoggedIn = async () =>
    setLoggedIn(await Api("/Api/54657687969758647563/loggedIn"));
  const getBalance = async () =>
    setBalance(await Api("/Api/54657687969758647563/getBalance"));

  const onLoad = () => {
    getLoggedIn();
  };

  return (
    <div>
      <Login
        formValue={loginFormValues}
        formChange={setLoginFormValues}
      ></Login>
      <Button onClick={getBalance}>Get Balance</Button>
      <div>
        <Typography>
          {balance ? balance["Response"]["result"]["ZUSD"] : ""}
        </Typography>
      </div>
    </div>
  );
};
