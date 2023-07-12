/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
import React from "react";
import { useRouter } from "next/router";
import { notification } from "antd";
import {
  InlineWidget,
  useCalendlyEventListener,
  EventScheduledEvent,
  DateAndTimeSelectedEvent,
  EventTypeViewedEvent,
} from "react-calendly";
import { useFormikContext } from "formik";
import { CompanyPreSignupFormData } from "./pre-sign-up-steps";
import firebase, { isFirebaseInitialitzed } from "@libs/firebase";
import { useMutation } from "react-query";
import { updateMeetingInfo } from "../../services/company-api.service";

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  visible: Function;
}

const ScheduleCall = ({ visible }: Props) => {
  const router = useRouter();
  const { values, resetForm } = useFormikContext<CompanyPreSignupFormData>();
  const { name, email } = values;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mutate, isLoading, status } = useMutation(
    (data: { companyId: string; meetingUrl: string; optedMeeting: boolean }) =>
      updateMeetingInfo(data.companyId, data.meetingUrl, data.optedMeeting)
  );

  useCalendlyEventListener({
    onDateAndTimeSelected: (event: DateAndTimeSelectedEvent) => {
      visible(false);
    },

    onEventTypeViewed: (e: EventTypeViewedEvent) => {
      visible(true);
    },

    onEventScheduled: (event: EventScheduledEvent) => {
      mutate({
        companyId: values["companyId"] as string,
        meetingUrl: event.data.payload.event.uri,
        optedMeeting: true,
      });

      isFirebaseInitialitzed() &&
        firebase.analytics().logEvent("call_scheduled", { name, email });

      resetForm();
      visible(true);
      notification["success"]({
        message: "Meeting Scheduled",
        description: "Thank you. We will reach out to you at the earliest.",
        style: {
          borderRadius: "3px",
          borderLeft: "2px solid #064",
          background: "#E3FCEF",
        },
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="white" fillOpacity="0.01"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.3824 11.0689C9.50441 11.1213 9.61475 11.1975 9.707 11.293L11 12.586L14.293 9.29302C14.3852 9.19751 14.4956 9.12133 14.6176 9.06892C14.7396 9.01651 14.8708 8.98892 15.0036 8.98777C15.1364 8.98662 15.2681 9.01192 15.391 9.0622C15.5138 9.11248 15.6255 9.18673 15.7194 9.28063C15.8133 9.37452 15.8875 9.48617 15.9378 9.60907C15.9881 9.73196 16.0134 9.86364 16.0122 9.99642C16.0111 10.1292 15.9835 10.2604 15.9311 10.3824C15.8787 10.5044 15.8025 10.6148 15.707 10.707L11.707 14.707C11.5195 14.8945 11.2652 14.9998 11 14.9998C10.7348 14.9998 10.4805 14.8945 10.293 14.707L8.293 12.707C8.19749 12.6148 8.1213 12.5044 8.0689 12.3824C8.01649 12.2604 7.9889 12.1292 7.98775 11.9964C7.98659 11.8636 8.0119 11.732 8.06218 11.6091C8.11246 11.4862 8.18671 11.3745 8.2806 11.2806C8.3745 11.1867 8.48615 11.1125 8.60904 11.0622C8.73194 11.0119 8.86362 10.9866 8.9964 10.9878C9.12918 10.9889 9.2604 11.0165 9.3824 11.0689Z" fill="#006644"/>
        </svg>
        ,
        closeIcon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12L20 20M20 12L12 20M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="#908E9F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>  
      });
      router.push("/");
    },
  });
  return (
    <div className='calendly-modal block justify-center  md:w-[175%] pb-4 md:ml-[-40%]  md:mt-[-60px] z-20 '>
      <InlineWidget
        url={process.env.NEXT_PUBLIC_CUSTOMER_CALENDLY_URL!}
        pageSettings={{
          hideGdprBanner: true,
          hideLandingPageDetails: true,
          hideEventTypeDetails: true,
          primaryColor: "a49cff",
        }}    
        styles={{ minWidth: "320px", height: "730px", paddingTop: "0px" }}
        prefill={{ name, email }}
      />
    </div>
  );
};

export default ScheduleCall;
