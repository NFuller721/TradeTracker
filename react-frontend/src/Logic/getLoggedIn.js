export const getLoggedIn = async (krakenInfo, setKrakenInfo) => {
  const data = await fetch("/Api/54657687969758647563/loggedIn");
  const Response = await data.json();

  setKrakenInfo({ ...krakenInfo, loggedIn: Response.Response });
};
