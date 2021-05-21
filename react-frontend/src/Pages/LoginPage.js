import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { useState } from "react";

import "./css/LoginPage.css";

export const LoginPage = () => {
  const [formValues, setFormValues] = useState({ ApiKey: "", SecretKey: "" });

  const changeHandler = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    fetch("/Api/54657687969758647563/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).then(() => {
      window.location.replace("/");
    });
  };

  return (
    <div className="LoginPage">
      <Paper className="FormPaper" square>
        <form onSubmit={onSubmit} className="LoginForm">
          <TextField
            variant="filled"
            name="ApiKey"
            placeholder="Api Key"
            value={formValues.ApiKey}
            onChange={changeHandler}
          />
          <TextField
            variant="filled"
            name="SecretKey"
            placeholder="Secret Key"
            value={formValues.SecretKey}
            onChange={changeHandler}
            type="password"
          />
          <div className="Grow" />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};
