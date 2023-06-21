/* eslint-disable @typescript-eslint/no-empty-function */
import { Avatar, Button, Card, Col, message, Modal, Tag } from "antd";
import cn from "classnames";

import Image from "next/image";
import { Field, Form, Formik } from "formik";
import Fieldset from "@components/fieldset";
import { useState } from "react";
import Link from "next/link";
import { leadInvite } from "@services/lead.service";
import router from "next/router";
import SkillsImage from "@components/skill-image";

const TalentPoolList = (props: any) => {
  const devCard = props.devCard;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event: any) => {
    const emailValidated =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        event.email
      );

    if (!event.agree) {
      message.destroy();
      message.error("Please agree to our terms and privacy policy");
    }

    if (emailValidated && event.agree) {
      const response = await leadInvite(event.email);
      const { data } = response;

      if (data.status === "success") {
        message.destroy();
        router.push("/talent-pool/confirmation");
        setIsModalOpen(false);
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
        className='w-max'
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        {" "}
        <div className='flex justify-between gap-4  p-4'>
          <div className='grid-cols-1 lg:grid  gap-4 hidden'>
            <div className='pb-2'>
              <p className='section-preheading font-semibold text-blue-light  flex '>
                <svg
                  className='mr-2'
                  data-name='Group 1767'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <defs>
                    <clipPath>
                      <rect
                        data-name='Rectangle 659'
                        width='24'
                        height='24'
                        fill='#034f57'
                        stroke='#55dfc6'
                        strokeWidth='1'
                      ></rect>
                    </clipPath>
                  </defs>
                  <g data-name='Group 1766' clipPath='url(#clipPath)'>
                    <circle
                      data-name='Ellipse 316'
                      cx='10.5'
                      cy='10.5'
                      r='10.5'
                      transform='translate(1.5 1.5)'
                      fill='#55dfc6'
                      stroke='#55dfc6'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                      opacity='0.25'
                    ></circle>
                    <circle
                      data-name='Ellipse 315'
                      cx='10.5'
                      cy='10.5'
                      r='10.5'
                      transform='translate(1.5 1.5)'
                      fill='none'
                      stroke='#55dfc6'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                    ></circle>
                    <path
                      d='M8.614,1.482l-4.7,4.8a.958.958,0,0,1-.595.252H2.91a.96.96,0,0,1-.594-.252L.1,4.018a.362.362,0,0,1,0-.5l.872-.888a.345.345,0,0,1,.493,0L2.882,4.065a.345.345,0,0,0,.493,0L7.252.1a.346.346,0,0,1,.493,0L8.613.98a.361.361,0,0,1,0,.5Z'
                      transform='translate(8 8.732)'
                      fill='#55dfc6'
                    ></path>
                  </g>
                </svg>
                {"Access to a collection of diversified developers"}
              </p>
            </div>
            <div className='pb-2'>
              <p className='section-preheading font-semibold text-blue-light  flex '>
                <svg
                  className='mr-2'
                  data-name='Group 1767'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <defs>
                    <clipPath>
                      <rect
                        data-name='Rectangle 659'
                        width='24'
                        height='24'
                        fill='#034f57'
                        stroke='#55dfc6'
                        strokeWidth='1'
                      ></rect>
                    </clipPath>
                  </defs>
                  <g data-name='Group 1766' clipPath='url(#clipPath)'>
                    <circle
                      data-name='Ellipse 316'
                      cx='10.5'
                      cy='10.5'
                      r='10.5'
                      transform='translate(1.5 1.5)'
                      fill='#55dfc6'
                      stroke='#55dfc6'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                      opacity='0.25'
                    ></circle>
                    <circle
                      data-name='Ellipse 315'
                      cx='10.5'
                      cy='10.5'
                      r='10.5'
                      transform='translate(1.5 1.5)'
                      fill='none'
                      stroke='#55dfc6'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                    ></circle>
                    <path
                      d='M8.614,1.482l-4.7,4.8a.958.958,0,0,1-.595.252H2.91a.96.96,0,0,1-.594-.252L.1,4.018a.362.362,0,0,1,0-.5l.872-.888a.345.345,0,0,1,.493,0L2.882,4.065a.345.345,0,0,0,.493,0L7.252.1a.346.346,0,0,1,.493,0L8.613.98a.361.361,0,0,1,0,.5Z'
                      transform='translate(8 8.732)'
                      fill='#55dfc6'
                    ></path>
                  </g>
                </svg>
                {"Convenient & swift hiring process"}
              </p>
            </div>
            <div className='pb-2'>
              <p className='section-preheading font-semibold text-blue-light  flex '>
                <svg
                  className='mr-2'
                  data-name='Group 1767'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <defs>
                    <clipPath>
                      <rect
                        data-name='Rectangle 659'
                        width='24'
                        height='24'
                        fill='#034f57'
                        stroke='#55dfc6'
                        strokeWidth='1'
                      ></rect>
                    </clipPath>
                  </defs>
                  <g data-name='Group 1766' clipPath='url(#clipPath)'>
                    <circle
                      data-name='Ellipse 316'
                      cx='10.5'
                      cy='10.5'
                      r='10.5'
                      transform='translate(1.5 1.5)'
                      fill='#55dfc6'
                      stroke='#55dfc6'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                      opacity='0.25'
                    ></circle>
                    <circle
                      data-name='Ellipse 315'
                      cx='10.5'
                      cy='10.5'
                      r='10.5'
                      transform='translate(1.5 1.5)'
                      fill='none'
                      stroke='#55dfc6'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                    ></circle>
                    <path
                      d='M8.614,1.482l-4.7,4.8a.958.958,0,0,1-.595.252H2.91a.96.96,0,0,1-.594-.252L.1,4.018a.362.362,0,0,1,0-.5l.872-.888a.345.345,0,0,1,.493,0L2.882,4.065a.345.345,0,0,0,.493,0L7.252.1a.346.346,0,0,1,.493,0L8.613.98a.361.361,0,0,1,0,.5Z'
                      transform='translate(8 8.732)'
                      fill='#55dfc6'
                    ></path>
                  </g>
                </svg>
                {"Highly talented developers at a cost-effective budget"}
              </p>
            </div>
          </div>
          <div>
            <Formik
              initialValues={{
                email: "",
                agree: false,
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <Fieldset
                  type='email'
                  placeholder='Enter your email to get access'
                  name='email'
                  id='email'
                  className='py-[9px] placeholder-gray-400 text-gray-700  bg-light-gray rounded-l-md  '
                  required
                />
                <div className='flex  items-center'>
                  <Field className='mr-2 ' type='checkbox' name='agree' />
                  <p>
                    By clicking , you agree to our{" "}
                    <span className='text-blue-700'>
                      <Link
                        href='/terms/company'
                        target={"_blank"}
                        className='text-brand-700 hover:text-brand-800 '
                      >
                        Terms
                      </Link>
                    </span>{" "}
                    and{" "}
                    <span className='text-blue-700'>
                      <Link
                        href='/privacy'
                        className='text-brand-700 hover:text-brand-800 px-1'
                        target={"_blank"}
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </p>
                </div>

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
          </div>
        </div>
      </Modal>
      <section className='hero mx-auto py-2 '>
        <Col key={devCard?.id} onClick={() => {}}>
          <>
            <Card
              className='min-h-[15.5rem]  p-2 cursor-pointer lg:w-[55rem] '
              onClick={() => setIsModalOpen(true)}
              hoverable
              cover={
                <>
                  <div className='flex p-4 gap-6 '>
                    <div className=' cursor-pointer  flex '>
                      {!devCard?.profileImage && devCard?.fullName && (
                        <Avatar
                          className=' cursor-pointer rounded-lg w-24 h-24 flex items-center '
                          shape='square'
                          style={{
                            color: "var(--brand-500)",
                            backgroundColor: "var(--brand-100)",
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
                              devCard?.profileImage ? devCard?.profileImage : ""
                            }
                            alt='profile image'
                          />
                        </div>
                      )}
                    </div>
                    <div className='lg:w-[100%]'>
                      <h4 className=' cursor-pointer text-base font-bold break-all '>
                        {devCard?.fullName}
                      </h4>
                      <p className=' cursor-pointer page-para'>
                        {devCard?.currentRole || "Fullstack Developer"}
                      </p>
                      <p className=' cursor-pointer page-para'>
                        {devCard?.experienceInYears
                          ? devCard?.experienceInYears
                          : 0}{" "}
                        years of experience
                      </p>

                      <div className='grid gap-2 mt-2'>
                        <div className=' cursor-pointer  text-sm min-w-0'>
                          <div
                            className=' cursor-pointer page-para   h-12 text-editor break-words text-ellipsis overflow-hidden'
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
                          <div className='flex flex-wrap cursor-pointer h-6 overflow-hidden'>
                            {/* {devCard?.profileSkills &&
                              devCard?.profileSkills.length &&
                              devCard?.profileSkills.map(
                                (devCardTopSkill: any, index: any) => (
                                  <Tag
                                    key={devCardTopSkill}
                                    className='skill-tag mb-2 '
                                  >
                                    <div className='w-[12.25px] h-[12.25px] mr-2 text-gray-900'>
                                      <SkillsImage
                                        width='42'
                                        height='42'
                                        src='/images/issuerLogo/defaultskills.svg'
                                        id={index}
                                      />
                                    </div>
                                    {devCardTopSkill.name}
                                  </Tag>
                                )
                              )} */}
                            {devCard?.profileSkills &&
                              devCard?.profileSkills.length == 0 &&
                              [
                                "React",
                                "Java",
                                "Next JS",
                                "Javascript",
                                "Node",
                              ].map((devCardTopSkill: any) => (
                                <Tag
                                  key={devCardTopSkill}
                                  className='skill-tag'
                                >
                                  <div className='w-[12.25px] h-[12.25px] mr-2 text-gray-900'>
                                    <SkillsImage
                                      width='42'
                                      height='42'
                                      src='/images/issuerLogo/defaultskills.svg'
                                      id={devCardTopSkill}
                                    />
                                  </div>
                                  {devCardTopSkill}
                                </Tag>
                              ))}
                          </div>
                        </div>
                        <div className='lg:flex justify-between mt-2'>
                          <p className=' cursor-pointer  text-gray-400 pr-2 '>
                            Exp. Annual Salary:{" "}
                            <span className=' cursor-pointer text-gray-700'>
                              {devCard?.rate ? devCard?.rate : "35,000$"}
                            </span>
                          </p>
                          <p className=' cursor-pointer  text-gray-400 pr-2 '>
                            Availability:{" "}
                            <span
                              className={cn(
                                "text-xs cursor-pointer p-0.5",
                                {
                                  "bg-green-100  rounded px-2 text-green-600 ":
                                    devCard?.availability?.available === 0 ||
                                    devCard?.availability?.available === 1,
                                },
                                {
                                  "bg-yellow-100 text-yellow-600   rounded px-2 ":
                                    devCard?.availability?.available === 2 ||
                                    devCard?.availability?.available === 3,
                                },
                                {
                                  "bg-gray-100  test-gray-600  rounded px-2 ":
                                    devCard?.availability?.available === 4 ||
                                    devCard?.availability?.availableIn ===
                                      undefined,
                                }
                              )}
                            >
                              {devCard?.availability?.availableIn
                                ? devCard?.availability?.availableIn?.toUpperCase()
                                : "Unavailable"}
                            </span>
                          </p>
                          <p className=' flex cursor-pointer  text-gray-700 '>
                            <Image
                              width='24'
                              height='24'
                              className=' cursor-pointer  '
                              src='/images/companies/verified.svg'
                              alt='profile image'
                            />
                            Pre screened by us
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='md:flex items-center hidden'>
                      <Button
                        className='btn-default rounded-md px-8'
                        size='middle'
                        type='default'
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
