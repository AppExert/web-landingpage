import APP_CONFIG from "appConfig";
import axios from "axios";

export const leadInvite = async (email: string) => {
  return await axios.post<any>(`${APP_CONFIG.apiBaseUrl}/lead/invite`, {
    email,
  });
};
