import Container from "@components/container";
import Fieldset from "@components/fieldset";
import { leadInvite } from "@services/lead.service";
import { message, Button } from "antd";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import router from "next/router";

const handleSubmit = async (event: any) => {
  const emailValidated =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      event.email
    );

  // if (!event.agree) {
  //   message.destroy();
  //   message.error("Please agree to our terms and privacy policy");
  // }

  if (emailValidated ) {
    const response = await leadInvite(event.email);
    const { data } = response;

    if (data.status === "success") {
      message.destroy();
      router.push("/talent-pool/confirmation");
    } else if (data.status === "error") {
      message.destroy();
      message.error(data.message);
    } else {
      message.destroy();
      message.error("Internal Server Error");
    }
  }
};

const GetStartedBanner = (props: any) => {
  return (
    <section className=' md:mt-[100px] mt-[36px] '>
      {props.developerData &&
          props.developerData.length !== 0 &&
          !props.isLoading && (
        <><div className='flex flex-col place-items-center text-center'>
          <p className='mt-2 sub-heading  md:max-w-[623px]'>
            Currently, 593 talented developers are actively seeking new opportunities.{" "}
          </p>
          <p className='mt-2 landing-para text-[18px] max-w-[427px] '>
            Request AppExert for access and they are ready to be hired!{" "}
          </p>
        </div>
        {/* <div className='flex justify-center pt-6'>
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
                  required />


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
        </div> */}
        <div className='flex gap-4 items-center justify-center mt-10'>
          <Link href='/companies/start-hiring?step=1'>
            <Button type='primary' className='page-btn' size='large'>
                Get started for free
            </Button>
          </Link>
        </div></>
      )}
    </section>
  );
};

export default GetStartedBanner;
