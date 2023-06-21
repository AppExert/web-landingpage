/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import APP_CONFIG from "appConfig";

export const getLandingDevelopers = async (
  limit?: number,
  offset?: number,
  search?: string
) => {
  return await axios.get(
    `${APP_CONFIG.apiBaseUrl}/developers/getLandingDevelopers?${
      search ? "search=" + encodeURIComponent(search) : ""
    }&limit=${limit}&offset=${offset}`
  );
};
