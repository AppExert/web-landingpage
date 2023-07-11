/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { Button, notification } from "antd";
import ScheduleCall from "./schedule-call";
import CompanyInfo from "./company-info";
import SelectSkills from "./select-skills";
import cn from "classnames";
import Container from "@components/container";
import Head from "next/head";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { convertFormDataAsContact } from "../../utils/companies.utils";
import {
  submitContactInfo,
  updateMeetingInfo,
} from "../../services/company-api.service";
import { ISkillsOptions } from "@models/misc.model";
export interface CompanyPreSignupFormData {
  skills: ISkillsOptions[];
  name: string;
  companyId: string | undefined;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  hiringNeeds: string;
  employees: string;
  additionalInfo: string;
  scheduled?: boolean | undefined;
}

const initialFormValues: CompanyPreSignupFormData = {
  skills: [],
  name: "",
  companyId: undefined,
  companyName: "",
  email: "",
  phone: "",
  website: "",
  hiringNeeds: "permanent-positions",
  employees: "1-50",
  additionalInfo: "",
  scheduled: undefined,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be at most 10 digits"),
});

const PreSignUpSteps = () => {
  const [current, setCurrent] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const router = useRouter();
  const formRef = useRef<FormikProps<FormikValues>>(null);
  const { mutate, isLoading, status } = useMutation(() => {
    return submitContactInfo(
      convertFormDataAsContact(
        formRef.current?.values as CompanyPreSignupFormData
      )
    );
  });
  const getVisible = (visible: any) => {
    setVisible(visible);
  };

  const steps = [
    {
      title: "Whom do you wish to bring onboard?",
      subTitle: "Select atleast one role",
      content: <SelectSkills />,
    },
    {
      title: "Tell us about your company",
      subTitle: "Get started by providing just the essential details",
      content: <CompanyInfo />,
    },
    {
      title: "Let’s connect you with exceptional developers",
      subTitle: "Pick a time to meet with our team (30 min)",
      content: <ScheduleCall visible={getVisible} />,
    },
  ];

  const mutateMeetingInfo = useMutation(
    (data: { companyId: string; meetingUrl: string; optedMeeting: boolean }) =>
      updateMeetingInfo(data.companyId, data.meetingUrl, data.optedMeeting)
  );

  const appendQueryParamsBasedOnActiveStep = (step: number) => {
    router.push({
      pathname: "/companies/start-hiring",
      query: { step },
    });
  };

  const getBrowserTitle = () => {
    switch (current) {
    case 1:
      return "Select Skills - AppExert Hiring ";
    case 2:
      return "Partner Details - AppExert Hiring ";
    case 3:
      return "Schedule Meeting - AppExert Hiring ";
    default:
      return "Select Skills - AppExert Hiring ";
    }
  };

  useEffect(() => {
    let step = Number(router.query.step);
    if (!step) {
      return;
    }
    if (step < 1 || step > 3) {
      step = 1;
    }

    if (step !== current) {
      setCurrent(step);
    }
  }, [router.query.step]);

  useEffect(() => {
    appendQueryParamsBasedOnActiveStep(current);
  }, [current]);

  const next = async () => {
    if (!formRef.current) return;
    if (!isCurrentStepValid()) {
      if (isFirstStep()) {
        notification.error({
          message: "Please select at least one skill",
          duration: 2,
        });
      }
      if (isSecondStep()) {
        formRef.current.submitForm();
      }
      return;
    } else {
      if (isFirstStep()) {
        setCurrent(current + 1);
      }
      if (isSecondStep()) {
        setCurrent(current + 1);
        mutate(submitContactInfo as any, {
          onSuccess: (response) => {
            formRef.current &&
              formRef.current.setFieldValue("companyId", response.data.id);
          },
          onError: (error) => {
          
            setLoading(false);
          },
        });
      }
    }
  };

  const prev = () => {
    setCurrent(current - 1);
    setVisible(true);
  };

  const isFirstStep = () => current === 1;
  const isSecondStep = () => current === 2;
  const isThirdStep = () => current === 3;

  const isFirstStepValid = () => {
    if (!formRef.current) return false;
    const { skills } = formRef.current.values as CompanyPreSignupFormData;
    return skills.length > 0;
  };
  const isSecondStepValid = () => {
    if (!formRef.current) return false;
    const { name, email } = formRef.current.values as CompanyPreSignupFormData;
    return !!(name && email);
  };

  const isCurrentStepValid = () => {
    if (isFirstStep()) {
      return isFirstStepValid();
    }
    if (isSecondStep()) {
      return isSecondStepValid();
    }
    return true;
  };

  const onSkipAndComplete = () => {
    if (!formRef.current) return;
    setLoading(true);
    mutateMeetingInfo.mutate(
      {
        companyId: formRef.current.values["companyId"] as string,
        meetingUrl: "",
        optedMeeting: false,
      },
      {
        onSuccess: () => {
          setLoading(false);
          router.push("/");
          notification["success"]({
            message: "Thank You",
            description:
              "Someone from our team will reach out to you to know more about your needs.",
          });
        },
        onError: (error) => {
          setLoading(false);
          router.push("/");
          notification["success"]({
            message: "Thank You",
            description:
              "Someone from our team will reach out to you to know more about your needs.",
          });
        },
      }
    );
  };

  const handleSubmit = (values: FormikValues) => {// do nothing
  };
  return (
    <>
      <Head>
        <title>{getBrowserTitle()}</title>
      </Head>
      <Container>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          innerRef={formRef}
        >
          <Form>
            <div className="md:px-40 pt-8 pb-4 2xl:max-h-[85vh] overflow-x-hidden  ">
              <div className="flex justify-between text-lg">
                <div>
                  <h2 className="heading text-[26px]">{steps[current - 1].title}</h2>
                  <p className="landing-para md:text-[18px]">{steps[current - 1].subTitle}</p>
                </div>                
                <div
                  className={cn(
                    { "bg-[#0FAC981A]": isFirstStep() },
                    { "bg-[#0FAC981A]": isSecondStep() },
                    { "bg-[#0FAC981A]": isThirdStep() },
                    "flex justify-center items-center py-1 px-3 rounded-full text-base h-8 min-w-max border-[#0FAC98] border-[1px] text-[#0FAC98]"
                  )}
                >
                  Step<span className="pl-1 font-semibold">{current}</span> /{" "}
                  <span className="font-semibold">{steps.length}</span>
                </div>
              </div>

              <div className="py-6 min-h-[80vh] md:min-h-[68vh] ">{steps[current - 1].content}</div>
              <div className="flex justify-between pb-20 items-center gap-x-[40px]">
                <Button
                  onClick={() => prev()}
                  className={cn(
                    current > 1 ? "visible" : "invisible",
                    "page-btn-secondary text-[14px] w-max "
                  )}
                  size="large"
                > <span className=" flex justify-center items-center flex-shrink-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.7895 9.39761C5.68417 9.29215 5.625 9.14918 5.625 9.00012C5.625 8.85105 5.68417 8.70808 5.7895 8.60262L11.4145 2.97762C11.466 2.92235 11.5281 2.87802 11.5971 2.84728C11.6661 2.81654 11.7406 2.8 11.8161 2.79867C11.8916 2.79734 11.9667 2.81123 12.0367 2.83952C12.1067 2.86781 12.1704 2.90992 12.2238 2.96334C12.2772 3.01675 12.3193 3.08038 12.3476 3.15042C12.3759 3.22046 12.3898 3.29548 12.3884 3.37101C12.3871 3.44653 12.3706 3.52102 12.3398 3.59002C12.3091 3.65902 12.2648 3.72112 12.2095 3.77262L6.98201 9.00012L12.2095 14.2276C12.2648 14.2791 12.3091 14.3412 12.3398 14.4102C12.3706 14.4792 12.3871 14.5537 12.3884 14.6292C12.3898 14.7048 12.3759 14.7798 12.3476 14.8498C12.3193 14.9199 12.2772 14.9835 12.2238 15.0369C12.1704 15.0903 12.1067 15.1324 12.0367 15.1607C11.9667 15.189 11.8916 15.2029 11.8161 15.2016C11.7406 15.2002 11.6661 15.1837 11.5971 15.153C11.5281 15.1222 11.466 15.0779 11.4145 15.0226L5.7895 9.39761Z" fill="white"/>
                    </svg> <span className="pl-5 md:block hidden"> Previous </span> </span>
                </Button>

                {current < steps.length && (
                  <Button
                    className="page-btn text-[14px] px-16"
                    type="text"
                    onClick={() => next()}
                    size="large"
                    loading={loading}
                  >
                      Continue
                  </Button>
                )}
                {current === steps.length && visible && (
                  <Button
                    className="border-none text-[#D4D3DF] text-[14px] font-medium"
                    type="text"
                    loading={loading}
                    onClick={onSkipAndComplete}
                  >
                      Skip and Complete
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default PreSignUpSteps;
