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

const validationSchema = Yup.object({
  name: Yup.string().required("Please provide your name"),
  companyName: Yup.string().required("Please provide your company name"),
  phoneNumber: Yup.string().required("Please provide your phone number"),
  message: Yup.string().required("Please enter your message"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please provide your work email"),
});

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
        companyName,
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
        <header className='pt-10 md:pt-24 pb-2 text-center'>
          <Container>
            <h1 className='font-header page-heading1 text-2xl md:text-4xl'>
              {" Let's talk about your growth"}
            </h1>
            <p className='text-md md:text-lg md:mb-24 page-para'>
              We have helped many, lets chat how we could fuel your growth!
            </p>
          </Container>
        </header>
        <Container>
          <div className='flex flex-col md:flex-row items-center gap-4 pb-32'>
            <div className='md:w-1/2 w-full'>
              <div className='relative h-72 '>
                <Image
                  layout='fill'
                  src='/images/contact_us.svg'
                  alt='contact us illustration'
                />
              </div>
              <div className=' lg:p-10 p-2 flex flex-col justify-center text-gray-400'>
                <div className='flex pb-2 pl-1'>
                  <Image
                    width='12'
                    height='18'
                    src='/images/icon/phone.svg'
                    alt='Edit'
                  />
                  <p className='pl-4'>
                    Contact our support line during business hours (9am - 5pm){" "}
                    <br />
                    +91-9787306030
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/2'>
              <h2 className='page-heading1'>Send us a message</h2>
              <p className='page-para pb-4'>
                The best way to reach our team is via the below online form.
                <br />
                We will get back to you as soon as possible.
              </p>
              <div className='md:min-h-[4.6rem]'>
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
                <Form className='flex flex-col max-w-md '>
                  <div className='grid font-semibold h-max'>
                    <Fieldset
                      type='text'
                      name='name'
                      customLabelFont='text-lg'
                      label='Full name'
                      placeholder='Enter your full name'
                      size='large'
                    />
                    <Fieldset
                      type='email'
                      name='email'
                      customLabelFont='text-lg'
                      label='Email'
                      placeholder='Enter your email address'
                      size='large'
                    />
                    <Fieldset
                      type='text'
                      name='companyName'
                      customLabelFont='text-lg'
                      label='Company Name'
                      placeholder='Enter your company name'
                      size='large'
                    />
                    <Fieldset
                      type='tel'
                      name='phoneNumber'
                      customLabelFont='text-lg'
                      label='Phone Number'
                      placeholder='Enter your phone number'
                      size='large'
                    />
                    <Fieldset
                      isTextArea={true}
                      rows={4}
                      name='message'
                      customLabelFont='text-lg'
                      size='large'
                      label='Message'
                      placeholder='Enter your message'
                    />
                  </div>
                  <div className=' flex mt-2 justify-center'>
                    <Button
                      className='btn-brand px-10'
                      htmlType='submit'
                      type='primary'
                      size='large'
                      loading={loading}
                    >
                      Submit
                    </Button>
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
