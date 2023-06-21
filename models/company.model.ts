import { UploadFile } from "antd";
import { ISkillsOptions } from "@models/misc.model";

export interface Company {
  companyLogo?: string;
  companyName: string;
  companySize?: string;
  contactName?: string;
  contactPhone?: string;
  creationDate?: any;
  createdBy?: string;
  email?: string;
  employeeBenefits?: [];
  foundedIn?: number;
  gallery?: string[];
  headCount?: number;
  headquarters?: string;
  hiringProcess?: string;
  hiringType?: string[];
  industryType?: string;
  interestedSkills?: ISkillsOptions[];
  isProfileCompleted?: boolean;
  location?: string;
  meetingUrl?: string;
  optedMeeting?: string;
  overview?: string;
  skipStep?: boolean;
  specialities?: [];
  step?: number;
  timezone?: string;
  website?: string;
  workMode?: string[];
  galleryFileList?: UploadFile[];
  logoFileList?: UploadFile[];
  isCallWithPSTRequested?: boolean;
  callWithPSTRequestedInfo?: any;
}

export interface Skills {
  application: IMetaSkills[];
  business: IMetaSkills[];
  devsecops: IMetaSkills[];
}

export interface IMetaSkills {
  id: string;
}

export interface CompanyMeetings {
  meetingExist: boolean;
  upComingInterView?: IMetaInterView[];
  pastInterView?: IMetaInterView[];
}

export interface IMetaInterView {
  meetingInfo?: MeetingInfo;
  companyEmail?: string;
  developerEmail?: string;
  developerName?: string;
  developerExperiance?: number;
  developercurrentRole?: string;
  developerImage?: string;
}

export interface MeetingInfo {
  startTime?: string;
  meetingName?: string;
  developerMeetingRequested?: boolean;
}
