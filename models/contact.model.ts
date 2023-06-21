import { ISkillsOptions } from "@models/misc.model";
export interface Contact {
  id?: string;
  contactName: string;
  contactPhone: number;
  companyName: string;
  email: string;
  website: string;
  interestedSkills?: ISkillsOptions[];
  hiringType: string;
  headCount: string;
  optedMeeting: boolean | undefined;
  meetingUrl: string;
}
