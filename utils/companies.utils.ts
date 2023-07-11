/* eslint-disable @typescript-eslint/no-unused-vars */
import { Contact } from "models/contact.model";
import { CompanyPreSignupFormData } from "@components/companies/pre-sign-up-steps";

export const convertFormDataAsContact = (
  formData: CompanyPreSignupFormData
): Contact => {
  const {
    companyName,
    email,
    additionalInfo,
    employees,
    hiringNeeds,
    name,
    phone,
    skills,
    website,
  } = formData;
  return {
    companyName,
    contactName: name,
    contactPhone: Number(phone),
    email,
    headCount: employees,
    hiringType: hiringNeeds,
    interestedSkills: skills,
    meetingUrl: "",
    optedMeeting: undefined,
    website,
  };
};
