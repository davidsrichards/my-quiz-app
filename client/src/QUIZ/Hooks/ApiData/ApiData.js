import axios from "axios";
const BASE_URL = "/api/user";

export const getApiData = async (url, callBack) => {
  const data = await (await axios.get(url)).data;
  return callBack ? callBack(data) : data;
};

/// post server data

export const postApiData = async (url, result, callBack) => {
  const data = await (await axios.post(url, result))?.data;
  return callBack ? callBack(data) : data;
};
