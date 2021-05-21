import { toPrice } from "../Utils/toPrice";

export const getBalance = async (krakenInfo, setKrakenInfo) => {
  const data = await fetch("/Api/54657687969758647563/getBalance");
  const Response = await data.json();

  let balanceInfo = 0;

  if (Response.Response.error.length) {
    console.error(`Balance Error: ${Response.Response.error[0]}`);
    return;
  }

  Object.keys(Response.Response.result).forEach((key) => {
    balanceInfo += parseFloat(Response.Response.result[key]);
  });

  setKrakenInfo({ ...krakenInfo, balance: toPrice(balanceInfo) });
};
