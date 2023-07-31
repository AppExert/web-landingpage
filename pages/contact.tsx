import Container from "@components/container";
import { useRef, useState } from "react";
import cn from "classnames";
import Head from "next/head";
import Image from "next/image";
import { contact } from "@services/admin.service";
import { Button } from "antd";
import Fieldset from "@components/fieldset";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const validationSchema = Yup.object({
  name: Yup.string().required("Please provide your name"),
  phoneNumber: Yup.string()
    .required("Please provide your phone number")
    .matches(
      /^(?:(?:\+|00)\d{1,3})?[ -]?\(?(?:\d{1,4}\)?[ -]?\d{1,4})[ -]?\d{1,9}$/,
      "Can only contain + - ( ) signs and digits"
    ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please provide your email"),
});

const DETAILS: {
  title: string;
  content: string;
  image: string;
  linkText: string;
  type: any;
}[] = [
  {
    title: "Call us",
    content: "Mon-Fri from 8am to 5pm",
    image: "/images/contact-us/phone.svg",
    linkText: "+91-877-837-0215",
    type: "tel",
  },
  {
    title: "Mail us",
    content: "24x7 Email support",
    image: "/images/contact-us/mail.svg",
    linkText: "hello@appexert.com",
    type: "mailto",
  },
];

const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  };
  const [alertType, setAlertType] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<FormikProps<FormikValues>>(null);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const { name, email, phoneNumber, companyName, message } = values;
    try {
      setLoading(true);
      contact({
        contactName: name,
        contactNumber: phoneNumber,
        companyName: "Startupfest",
        message,
        email,
      }).then((result) => {
        setLoading(false);
        const { data } = result;
        if (data && data.status === "success") {
          setAlertType("success");
          setAlert("We will get back to you with your queries");
          formRef.current?.resetForm();
        } else {
          setAlertType("error");
          setAlert(
            `Sorry, ${name}, we were unable to process your request. Please try again`
          );
          formRef.current?.resetForm();
        }
        setTimeout(() => {
          setAlert("");
          setAlertType("");
        }, 3000);
      });
    } catch (error) {
      setLoading(false);
      setAlertType("error");
      setAlert(
        `Sorry, ${name}, we were unable to process your request. Please try again`
      );
      formRef.current?.resetForm();
    }
  };

  return (
    <>
      <Head>
        <title>
          Contact Us - AppExert | Hire Remote Developers without Hassle
        </title>
        <meta
          name='description'
          content='Get in touch with us to Hire Remote Top Developers. Contact us for getting connected with best global companies and startups from independent location'
        />
        <meta
          name='keywords'
          content='appexert contact, call appexert, enquire @ appexert'
        />
        {/* og tags */}
        <meta
          property='og:title'
          content='Contact Us - AppExert | Hire Remote Developers without Hassle'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta property='og:url' content='https://appexert.com/contact' />
        <meta
          property='og:description'
          content='Get in touch with us to Hire Remote Top Developers. Contact us for getting connected with the best global companies and startups from an independent location'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fcontact_us.svg&w=1920&q=75'
        />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fcontact_us.svg&w=1920&q=75'
        />
      </Head>
      <section className=''>
        <Container className='md:pt-[100px] pt-[30px] pb-[100px]'>
          <div className='flex flex-col md:flex-row justify-between md:gap-[120px] gap-[32px]'>
            <div className='md:w-1/2 w-full'>
              <div className='flex flex-col'>
                <>
                  <h1 className='hero-heading md:text-5xl text-3xl'>
                    We would love to help!
                  </h1>
                  <p className='section-paragraph text-[16px] text-[#908E9F] py-[10px] pb-[20px]'>
                    {"Reach out and we’ll get in touch within 24hrs"}
                  </p>
                </>
                <>
                  <div className='flex flex-col mt-[100px]'>
                    <div className='grid grid-cols-2'>
                      {DETAILS.map((detail, index) => (
                        <div
                          className='pb-[24px] md:pl-[24px] pl-[12px] border-b-[1px] border-blue-magnata border-solid first:border-r-[1px]'
                          key={index}
                        >
                          <div className='w-[160px] h-[160px] -my-12 -ml-12'>
                            <Image
                              width={160}
                              height={160}
                              src={detail.image}
                              alt={detail.title}
                            />
                          </div>
                          <h3 className='text-[#E4E4E4] mt-[24px] mb-[12px] text-[18px] font-semibold'>
                            {detail.title}
                          </h3>
                          <p className='text-gray-400 text-[14px] mb-[32px]'>
                            {detail.content}
                          </p>
                          <a href={`${detail.type}:${detail.linkText}`}>
                            <a className='text-white md:text-[16px] text-[14px] underline hover:text-brand-500'>
                              {detail.linkText}
                            </a>
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className='border-r-[1px] border-blue-magnata border-solid w-1/2'>
                      <div className='md:pl-[24px] pl-[12px] pt-[24px]'>
                        <div className='w-[160px] h-[160px] -my-12 -ml-12'>
                          <Image
                            width={160}
                            height={160}
                            src={"/images/contact-us/location.svg"}
                            alt={"Visit us"}
                          />
                        </div>
                        <h3 className='text-[#E4E4E4] mt-[24px] mb-[12px] text-[18px] font-semibold'>
                          Visit us
                        </h3>
                        <p className='text-gray-400 text-[14px] mb-[32px]'>
                          visit our office HQ
                        </p>
                        <Link href={"https://goo.gl/maps/GYbNx8SWVBL33yxV8"}>
                          <a
                            target='_blank'
                            className='text-white md:text-[16px] text-[14px] underline hover:text-brand-500'
                          >
                            View on google maps
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <div
              style={{
                background:
                  "radial-gradient(188.94% 181.55% at 50.00% 46.35%, rgba(255, 255, 255, 0.07) 0%, rgba(246, 246, 246, 0.00) 100%)",
              }}
              className='border-solid border-2 border-[#1B1929] md:mt-[0px] mt-[32px] rounded-lg md:w-1/2 w-full md:px-[48px] px-[32px] py-[16px]'
            >
              <div>
                {alert && (
                  <div className='p-2 max-w-md text-white'>
                    <div
                      className={cn(
                        {
                          "bg-green-600": alertType === "success",
                          "bg-red-600": alertType === "error",
                        },
                        "rounded transition duration-500 p-2"
                      )}
                    >
                      {alert}
                    </div>
                  </div>
                )}
              </div>
              <Formik
                initialValues={initialFormState}
                onSubmit={handleSubmit}
                innerRef={formRef}
                validationSchema={validationSchema}
              >
                <Form className='flex flex-col'>
                  <div className='grid gap-[22px] md:mt-[32px] mt-[16px]'>
                    <Fieldset
                      type='text'
                      name='name'
                      customLabelFont='text-gray-400'
                      label='Name'
                      placeholder='Enter your full name'
                      size='large'
                      classProps='text-white'
                    />
                    <Fieldset
                      type='email'
                      name='email'
                      customLabelFont='text-gray-400'
                      label='Email'
                      placeholder='Enter your email address'
                      size='large'
                    />
                    <Fieldset
                      type='tel'
                      name='phoneNumber'
                      customLabelFont='text-gray-400'
                      label='Phone Number'
                      placeholder='Enter your phone number'
                      size='large'
                      maxLength="24"
                    />
                    <Fieldset
                      isTextArea={true}
                      rows={6}
                      name='message'
                      customLabelFont='text-gray-400'
                      size='large'
                      label='Message (optional)'
                      placeholder='Enter your message'
                      className='placeholder-placeholder-gray'
                    />
                  </div>
                  <div className='mt-2 justify-center'>
                    <Button
                      className='page-btn  w-full'
                      htmlType='submit'
                      type='primary'
                      size='large'
                      loading={loading}
                    >
                      Submit
                    </Button>
                    <p className='mt-2 font-medium text-gray-400 md:mb-[32px] mb-[16px]'>
                      By clicking, you agree to{" "}
                      <Link href='/terms/company'>
                        <a
                          target='_blank'
                          className='text-brand-500 hover:underline cursor-pointer'
                        >
                          Terms
                        </a>
                      </Link>{" "}
                      and{" "}
                      <Link href='/privacy'>
                        <a
                          target='_blank'
                          className='text-brand-500 hover:underline cursor-pointer'
                        >
                          Privacy Policy
                        </a>
                      </Link>
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;