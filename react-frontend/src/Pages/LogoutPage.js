import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { useState, useEffect } from "react";

export const LogoutPage = () => {
  const logout = async () => {
    fetch("/Api/54657687969758647563/logout").then((data) => {
      window.location.replace("/");
    });
  };

  useEffect(() => {
    logout();
  }, []);

  return <div className="LogoutPage"></div>;
};
