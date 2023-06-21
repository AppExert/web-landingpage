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
    <section className='start-hiring py-8 bg-white '>
      <Container>
        {props.developerData &&
          props.developerData.length !== 0 &&
          !props.isLoading && (
          <div className='flex flex-col place-items-center'>
            <p className='mt-2 font-semibold text-lg'>
                Presently 593 active developers are in search of a Job.{" "}
            </p>
            <p className='mt-2 '>
                Request AppExert for access and they are ready to be hired!{" "}
            </p>
          </div>
        )}

        <div className='flex justify-center pt-10'>
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
                  <p className='text-gray-500'>
                    By clicking , you agree to our{" "}
                    <span className='text-blue-700'>
                      <Link href='/terms/company' target={"_blank"}>
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
                        Privacy policy
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
      </Container>
    </section>
  );
};

export default GetStartedBanner;
