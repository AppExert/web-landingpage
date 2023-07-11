/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { Contact } from "models/contact.model";
import APP_CONFIG from "appConfig";
import { RegisterCompanyPayload } from "@models/company.model";

export const submitContactInfo = async (contact: Contact) => {
  return await axios.post<Contact>(
    APP_CONFIG.apiBaseUrl + "/companies",
    contact
  );
};

export const updateMeetingInfo = async (
  companyId: string,
  meetingUrl: string,
  optedMeeting: boolean
) => {
  return await axios.patch<Partial<Contact>>(
    `${APP_CONFIG.apiBaseUrl}/companies/${companyId}/meeting`,
    { optedMeeting, meetingUrl }
  );
};

export const companySignUp = async (payload: RegisterCompanyPayload) => {
  return await axios.post<RegisterCompanyPayload>(
    APP_CONFIG.apiBaseUrl + "/companies/signup",
    payload
  );
};