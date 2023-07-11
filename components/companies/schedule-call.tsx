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
