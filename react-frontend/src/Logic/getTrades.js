export const getTrades = async (krakenInfo, setKrakenInfo) => {
  const data = await fetch("/Api/54657687969758647563/getTrades");
  const Response = await data.json();

  if (Response.Response.error.length) {
    console.error(`Trades Error: ${Response.Response.error[0]}`);
    return;
  }

  setKrakenInfo({ ...krakenInfo, trades: Response.Response.result.trades });
};
