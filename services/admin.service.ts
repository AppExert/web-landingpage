/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import APP_CONFIG from "appConfig";

export const contact = async (payload: any) => {
  return await axios.post<any>(
    APP_CONFIG.apiBaseUrl + "/admin/contact",
    payload
  );
};

export const getAppSettings = async () => {
  return await axios.get<any>(APP_CONFIG.apiBaseUrl + "/app/settings");
};

export const getSkillsConfig = async () => {
  return await axios.get<any>(APP_CONFIG.apiBaseUrl + "/get-skills-config-v2");
};
