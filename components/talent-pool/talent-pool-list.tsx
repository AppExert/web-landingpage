/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Avatar, Button, Card, Col, message, Modal, Tag } from "antd";
import cn from "classnames";

import Image from "next/image";
import { Form, Formik } from "formik";
import Fieldset from "@components/fieldset";
import { useState, useEffect } from "react";
import { leadInvite } from "@services/lead.service";
import SkillsImage from "@components/skill-image";

const Salary = ({ amount }: { amount: number }) => {
  let lowerRange = "";
  let upperRange = "";
  if (amount >= 1000) {
    lowerRange = Math.floor(amount / 1000) + "K";
    upperRange = Math.floor(amount / 1000 + 10) + "K";
  } else {
    lowerRange = amount.toString();
    upperRange = (amount + 1000).toString();
  }
  const salaryRange = `${lowerRange} - ${upperRange}`;
  return <p>{salaryRange}</p>;
};

const TalentPoolList = (props: any) => {
  const devCard = props.devCard;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [allTools, setAllTools] = useState<any>();
  const handleSubmit = async (event: any) => {
    const emailValidated =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        event.email
      );

    // if (!event.agree) {
    //   message.destroy();
    //   message.error("Please agree to our terms and privacy policy");
    // }

    if (emailValidated) {
      const response = await leadInvite(event.email);
      const { data } = response;

      if (data.status === "success") {
        message.destroy();
        setIsSuccess(true);
        // router.push("/talent-pool/confirmation");
        // setIsModalOpen(false);
      } else if (data.status === "error") {
        message.destroy();
        message.error(data.message);
      } else {
        message.destroy();
        message.error("Internal Server Error");
      }
    }
  };

  return (
    <>
      <Modal
        className='w-max '
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        closeIcon={
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 12L20 20M20 12L12 20M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z'
              stroke='#908E9F'
              strokeWidth='1.4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
      >
        {" "}
        <div className='flex flex-col justify-between gap-4  p-4 items-center'>
          <div className='flex flex-col place-items-center text-center'>
            <p className='mt-2 sub-heading  '>Hire Developers you want</p>
            <p className='mt-2 landing-para text-[18px] md:max-w-[672px] '>
              Get instant insights with our in-depth developer profiles & build
              your team from untapped & quality talents.
            </p>
          </div>
          <div className='md:w-[480px] py-[48px]'>
            <div
              className=' p-[40px]'
              style={{
                borderRadius: "12px",
                border: "1px solid #43424D",
                background:
                  "radial-gradient(188.94% 181.55% at 50.00% 46.35%, rgba(255, 255, 255, 0.07) 0%, rgba(246, 246, 246, 0.00) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              {!isSuccess ? (
                <Formik
                  initialValues={{
                    email: "",
                    agree: false,
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <Fieldset
                      customLabelFont='text-gray-400'
                      label='Email'
                      size='large'
                      classProps='text-white'
                      type='email'
                      placeholder='Enter your email to get access'
                      name='email'
                      id='email'
                      required
                    />
                    <div className='flex justify-center'>
                      <Button
                        type='primary'
                        className='btn-brand mt-3 w-full'
                        size='large'
                        htmlType='submit'
                      >
                        Get access to talent pool
                      </Button>
                    </div>
                  </Form>
                </Formik>
              ) : (
                <div className='flex flex-col gap-4 ustify-center items-center sub-heading text-center'>
                  <Image
                    width={56}
                    height={56}
                    src={"/images/companies/party.svg"}
                    alt='Check icon'
                  />

                  <p>You’ve updated your profile and details </p>
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 text-gray-400  justify-center items-center'>
            <div className='flex items-start gap-2  '>
              <div className='flex w-[18px] h-[18px] flex-shrink-0'>
                <Image
                  width={18}
                  height={18}
                  src={"/images/home/tic-icon.svg"}
                  alt='Check icon'
                />
              </div>
              <p className='-mt-1 max-w-[180px]'>
                Access to a collection of diversified developers
              </p>
            </div>
            <div className='flex items-start gap-2 '>
              <div className='flex w-[18px] h-[18px] flex-shrink-0'>
                <Image
                  width={18}
                  height={18}
                  src={"/images/home/tic-icon.svg"}
                  alt='Check icon'
                />
              </div>
              <p className='-mt-1 max-w-[180px]'>
                Convenient & swift hiring process
              </p>
            </div>
            <div className='flex items-start gap-2 '>
              <div className='flex w-[18px] h-[18px] flex-shrink-0'>
                <Image
                  width={18}
                  height={18}
                  src={"/images/home/tic-icon.svg"}
                  alt='Check icon'
                />
              </div>
              <p className='-mt-1 max-w-[180px]'>
                Highly talented developers at a cost-effective budget
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <section className='hero mx-auto py-2 '>
        <Col key={devCard?.id} onClick={() => {}}>
          <>
            <Card
              className='min-h-[15.5rem]  p-2 cursor-pointer lg:w-[55rem] bg-transparent	border-[#252234] hover:border-[#767383] '
              onClick={() => setIsModalOpen(true)}
              hoverable
              cover={
                <>
                  <div className='flex p-4 gap-6 '>
                    <div className='flex flex-col'>
                      <div className=' cursor-pointer  flex gap-x-[20px]'>
                        {!devCard?.profileImage && devCard?.fullName && (
                          <Avatar
                            className=' cursor-pointer rounded-lg w-24 h-24 flex items-center flex-shrink-0 '
                            shape='square'
                            style={{
                              color: "var(--brand-500)",
                              backgroundColor: "var(--brand-200)",
                              fontSize: "40px",
                            }}
                          >
                            <p className=' cursor-pointer'>
                              {devCard?.fullName[0]?.toUpperCase()}
                              {devCard?.fullName[1]
                                ? devCard?.fullName[1]?.toUpperCase()
                                : ""}
                            </p>
                          </Avatar>
                        )}

                        {devCard?.profileImage && (
                          <div className=' cursor-pointer rounded-lg w-24 h-24 flex items-center '>
                            <Image
                              width='200'
                              height='200'
                              className=' cursor-pointer rounded-lg '
                              src={
                                devCard?.profileImage
                                  ? devCard?.profileImage
                                  : ""
                              }
                              alt='profile image'
                            />
                          </div>
                        )}

                        <div className=''>
                          <h4 className=' cursor-pointer text-white text-[18px] font-semibold break-all '>
                            {devCard?.fullName}
                          </h4>
                          <p className=' cursor-pointer page-para  text-white text-[16px] '>
                            {devCard?.currentRole || "Fullstack Developer"}
                            <span className='text-[#908E9F] pl-2 md:inline-block  hidden'>
                              •{" "}
                              {devCard?.experienceInYears
                                ? devCard?.experienceInYears
                                : 0}{" "}
                              years of experience
                            </span>
                          </p>
                          <p className='text-[#908E9F]  flex  md:hidden'>
                            {devCard?.experienceInYears
                              ? devCard?.experienceInYears
                              : 0}{" "}
                            years of experience
                          </p>
                          <section className='my-2 mb-3 md:flex flex-wrap gap-5 hidden '>
                            <div className='flex'>
                              <div>
                                <p className='page-label cursor-pointer text-[#908E9F] '>
                                  AVAILABILITY
                                </p>

                                {devCard?.availability?.availableIn && (
                                  <div>
                                    <span
                                      className={cn(
                                        "font-medium ",
                                        {
                                          " text-[#0FAC98] ":
                                            devCard?.availability?.available ===
                                              0 ||
                                            devCard?.availability?.available ===
                                              1,
                                        },
                                        {
                                          " text-[#ffffff]  ":
                                            devCard?.availability?.available ===
                                              2 ||
                                            devCard?.availability?.available ===
                                              3,
                                        },
                                        {
                                          " test-gray-600  ":
                                            devCard?.availability?.available ===
                                              4 ||
                                            devCard?.availability
                                              ?.availableIn === undefined,
                                        }
                                      )}
                                    >
                                      {devCard?.availability?.availableIn
                                        ? devCard?.availability?.availableIn
                                        : "Unavailable"}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className='flex gap-1 border-l-[1px] border-gray-100'>
                              <div className='pl-5'>
                                <p className='cursor-pointer page-label  text-[#908E9F] '>
                                  &nbsp;EXPECTED SALARY {"("}
                                  {devCard?.rateCard?.currency ===
                                  "Indian Rupee"
                                    ? "INR"
                                    : devCard?.rateCard?.currency ===
                                      "U.S.Dollar"
                                      ? "USD"
                                      : devCard?.rateCard?.currency === "Euro"
                                        ? "Euro"
                                        : devCard?.rateCard?.currency ===
                                      "Canadian Dollar"
                                          ? "CAD"
                                          : "USD"}
                                  {"/YEAR)"}
                                </p>
                                <p className=' text-white cursor-pointer page-para font-medium '>
                                  <Salary
                                    amount={parseFloat(
                                      devCard?.rate.replace(/,|\$/g, "")
                                    )}
                                  />
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div className='grid gap-2 mt-2'>
                        <section className='my-2 mb-3 flex flex-wrap gap-5 md:hidden '>
                          <div className='flex'>
                            <div>
                              <p className='page-label cursor-pointer text-[#908E9F] '>
                                AVAILABILITY
                              </p>

                              {devCard?.availability?.availableIn && (
                                <div>
                                  <span
                                      className={cn(
                                        "font-medium ",
                                        {
                                          " text-[#0FAC98] ":
                                            devCard?.availability?.available ===
                                              0 ||
                                            devCard?.availability?.available ===
                                              1,
                                        },
                                        {
                                          " text-[#ffffff]  ":
                                            devCard?.availability?.available ===
                                              2 ||
                                            devCard?.availability?.available ===
                                              3,
                                        },
                                        {
                                          " test-gray-600  ":
                                            devCard?.availability?.available ===
                                              4 ||
                                            devCard?.availability
                                              ?.availableIn === undefined,
                                        }
                                      )}
                                    >
                                      {devCard?.availability?.availableIn
                                        ? devCard?.availability?.availableIn
                                        : "Unavailable"}
                                    </span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className='flex gap-1 border-l-[1px] border-gray-100'>
                            <div className='pl-5'>
                              <p className='cursor-pointer page-label  text-[#908E9F] '>
                                &nbsp;EXPECTED SALARY {"("}
                                {devCard?.rateCard?.currency === "Indian Rupee"
                                  ? "INR"
                                  : devCard?.rateCard?.currency === "U.S.Dollar"
                                    ? "USD"
                                    : devCard?.rateCard?.currency === "Euro"
                                      ? "Euro"
                                      : devCard?.rateCard?.currency ===
                                    "Canadian Dollar"
                                        ? "CAD"
                                        : "USD"}
                                {"/YEAR)"}
                              </p>
                              <p className=' text-white cursor-pointer page-para font-medium '>
                              <Salary
                                    amount={parseFloat(
                                      devCard?.rate.replace(/,|\$/g, "")
                                    )}
                                  />
                              </p>
                            </div>
                          </div>
                        </section>
                        <div className=' cursor-pointer  text-sm '>
                          <div
                            className=' cursor-pointer page-para text-[#908E9F] h-12 text-editor break-words text-ellipsis overflow-hidden'
                            style={{ lineBreak: "anywhere" }}
                          >
                            <div>
                              {devCard?.about}
                              {!devCard?.about &&
                                devCard?.currentRole === "Frontend Engineer" &&
                                "Work closely with designers to turn their visual designs into functional interfaces, and with backend developers to integrate the frontend with other systems."}
                              {!devCard?.about &&
                                devCard?.currentRole === "Backend Engineer" &&
                                "Responsible for integrating the backend with external APIs and services, and for building and maintaining server infrastructure. In addition to technical skills, it is important for backend engineers to have strong problem-solving and communication skills"}
                              {!devCard?.about &&
                                devCard?.currentRole === "Fullstack Engineer" &&
                                "Able to design and build complete web applications and websites, and are able to work on both the frontend user interface and the backend systems that power it."}
                            </div>
                          </div>
                        </div>
                        <div className='text-sm'>
                          <div className='flex flex-wrap cursor-pointer  '>
                            {devCard?.profileSkills &&
                              devCard?.profileSkills.length == 0 &&
                              devCard?.topSkills.map((devCardTopSkill: any) => (
                                <Tag key={devCardTopSkill} className='lander-tag '>
                                  {devCardTopSkill}
                                </Tag>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='md:flex flex-col items-center justify-between hidden w-[150px] flex-shrink-0'>
                      <p className=' flex cursor-pointer  text-[#0FAC98]  items-center text-[10px] bg-[#3C80481A] p-1 rounded-[16px]'>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.387 1.62694C9.28251 1.52788 9.144 1.47266 9.00001 1.47266C8.85601 1.47266 8.7175 1.52788 8.61301 1.62694C7.02096 3.13885 4.9006 3.96794 2.70526 3.93694C2.58566 3.93539 2.46867 3.972 2.3713 4.04146C2.27392 4.11091 2.20122 4.2096 2.16375 4.32319C1.84723 5.28782 1.68647 6.29672 1.6875 7.31194C1.6875 11.7684 4.7355 15.5117 8.85975 16.5729C8.95175 16.5967 9.04826 16.5967 9.14026 16.5729C13.2645 15.5117 16.3125 11.7684 16.3125 7.31194C16.3125 6.26944 16.1453 5.26444 15.8363 4.32319C15.7989 4.20946 15.7263 4.11061 15.6289 4.04101C15.5315 3.97141 15.4144 3.93469 15.2948 3.93619L15.1875 3.93694C12.9405 3.93694 10.8998 3.05944 9.387 1.62694ZM11.7075 7.63894C11.7525 7.57898 11.7851 7.51063 11.8033 7.43791C11.8215 7.36518 11.825 7.28955 11.8135 7.21546C11.8021 7.14137 11.7759 7.07031 11.7366 7.00647C11.6974 6.94262 11.6457 6.88728 11.5847 6.84368C11.5237 6.80009 11.4546 6.76913 11.3815 6.75262C11.3084 6.7361 11.2327 6.73438 11.1589 6.74754C11.0851 6.7607 11.0146 6.78848 10.9517 6.82925C10.8888 6.87002 10.8347 6.92296 10.7925 6.98494L8.36551 10.3824L7.1475 9.16444C7.04087 9.06508 6.89984 9.01099 6.75411 9.01356C6.60839 9.01613 6.46935 9.07517 6.36629 9.17823C6.26323 9.28129 6.20419 9.42033 6.20162 9.56605C6.19905 9.71178 6.25315 9.85281 6.35251 9.95944L8.04001 11.6469C8.09775 11.7046 8.16736 11.7491 8.244 11.7772C8.32064 11.8053 8.40247 11.8164 8.48383 11.8096C8.56518 11.8029 8.6441 11.7786 8.7151 11.7383C8.78611 11.6981 8.84749 11.6428 8.895 11.5764L11.7075 7.63894Z'
                            fill='#0FAC98'
                          />
                        </svg>

                        <span className='pl-2'> Pre screened by us</span>
                      </p>

                      <Button
                        className='btn-brand px-[14px] py-[8px]'
                        onClick={() => setIsModalOpen(true)}
                      >
                        View profile
                      </Button>
                    </div>
                  </div>
                </>
              }
            ></Card>
          </>
        </Col>
      </section>
    </>
  );
};

export default TalentPoolList;
