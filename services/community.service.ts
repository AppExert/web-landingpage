import APP_CONFIG from "appConfig";
import axios from "axios";

export const registerInvite = async (email: string) => {
  return await axios.post<any>(`${APP_CONFIG.apiBaseUrl}/community/invite`, { email });
}