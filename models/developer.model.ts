import { UploadFile } from "antd";

export interface IMetaFlatSkills {
  [key: string]: number;
}
export interface IMetaSkills {
  id: string;
  name?: string;
  yearsOfExperience: number;
}
export interface Skills {
  programmingLanguages: IMetaSkills[];
  frameworks: IMetaSkills[];
  tools: IMetaSkills[];
}

export interface Languages {
  name: string;
  percentage?: number;
  level: string;
}

export interface Availability {
  type: string;
  availableIn: string;
  available: number;
}
export interface GitStats {
  contributionsByYears: any[];
  languageDetails: any[];
  totalRepositories: number;
}

export interface Developer {
  fullName: string;
  email: string;
  phone: string;
  website: string;
  about: string;
  createdBy: string;
  skills: Skills;
  skillsObj?: string;
  experienceInYears: number;
  experience: Experience[];
  socialLinks: ISocialLinkModel;
  education: IEducationModel[];
  availability: Availability;
  expectedCtc: string;
  resume?: {
    url: string;
    enabled: boolean;
  };
  resumeFileList?: UploadFile[];
  start_time?: string;
  currentRole: string;
  step?: string;
  isProfileCompleted?: boolean;
  skipStep?: boolean;
  location?: string;
  certifications?: Certification[];
  technicalInterests?: string[];
  hobbies?: string[];
  languages?: IProfileLanguagesModel[];
  careerGoalMeetingInfo?: CareerGoal[];
  careerGoalMeetingRequested?: boolean;
  gitStats?: GitStats;
  profileImage?: string;
  meetingUrl?: string;
  developerMeetingInfo?: DeveloperGoal[];
  topSkills?: string[];
  screeningStatus: string;
}

export interface CareerGoal {
  meetingName: string;
  startTime?: string;
}

export interface DeveloperGoal {
  meetingName: string;
  startTime: string;
  developerMeetingRequested: boolean;
}

export interface Experience {
  company: string;
  from_date: string;
  to_date: string | null;
  present?: boolean;
  position: string;
  tools_used: any[];
  description: string;
}

export interface Certification {
  title: string;
  issuedBy: string;
  certificationId?: string;
  validUntil?: string;
}

export interface PersonalInformation {
  expectedCtc: string;
  availability: string;
  resumeUrl: string;
}
export interface ISocialLinkModel {
  linkedin: string;
  github: string;
  stackoverflow: string;
}
export interface IDegreeModel {
  name: string;
}
export interface IEducationModel {
  school?: string;
  degree?: IDegreeModel;
  major?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface IProfileLanguagesModel {
  name: string | null;
  level: string | null;
}

export type IVideoInterview = {
  url?: string | null;
  enabled?: boolean;
  title?: string | null;
  feedback?: string | null;
  interviewDate?: string | null;
  codingUrl?: string | null;
  videoLength?: number | null;
  visibleTo?: [] | null;
  visibleToAll?: boolean | false;
};
