import CommunityContent from "@components/community/community-content";
import Head from "next/head";
import CommunityPower from "@components/community/community-power";
import CommunityStorie from "@components/community/community-story";
import Container from "@components/container";
import { Button, Form, Input, message } from "antd";
import GetStartedBanner from "@components/community/get-started-banner";
import { ArrowRightOutlined } from "@ant-design/icons";
import Fieldset from "@components/fieldset";
import { Formik } from "formik";
import { registerInvite } from "@services/community.service";

const handleSubmit = async (event: any) => {
  const emailValidated =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      event.email
    );

  if (emailValidated) {
    const response = await registerInvite(event.email);
    const { data } = response;

    if (data.status === "success") {
      message.destroy();
      message.success("Thanks you! We will email you the next steps.");
    } else if (data.status === "error") {
      message.destroy();
      message.error(data.message);
    } else {
      message.destroy();
      message.error("Internal Server Error");
    }
  }
};

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          AppExert | Build Your Products Faster & Better with Remote Teams
        </title>
        <meta
          name='description'
          content='Building products with Remote Developers is easier with AppExert. Our team of hand-picked Remote Team helps you execute critical projects successfully'
        />
        <meta name="keywords" content="hire engineers, remote developers, work from home, build remote team, appexert" />
        <meta name='author' content='Appexert' />
        <meta name='doc-type' content='Web Page' />
        <meta name='copyright' content='https://appexert.com/' />
        <meta name='robots' content='index, follow' />
        <meta name='distribution' content='Global' />
        <meta name='publisher' content='Appexert' />
        <meta
          name='classification'
          content='hire developers, manage remote team, managed remote developers, start hiring, hire developers, appexert'
        />
      </Head>
      <Container className="md:py-[100px] py-[48px] overflow-hidden">
        <section >
          <div className="text-center flex flex-col justify-center items-center ">
            <p className="green-label">START. SCALE. SUCCEED</p>
            <h1 className="heading pt-2 text-center md:w-[850px] text-[48px]">
              Learn Together, Grow Faster
            </h1>
            <p className='section-paragraph text-[#908E9F] py-[10px] pb-[20px] md:w-[850px] '>
              Upskill, get peer reviews, share your experiences, build exciting projects with top developers around the world.
            </p>
            <div className='text-center pt-10 '>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Input.Group compact className="flex justify-center items-center ">
                    <Fieldset
                      type='email'
                      placeholder='Add your email to get early access'
                      name='email'
                      id='email'
                      className='py-[9px] placeholder-gray-400 text-gray-700  bg-light-gray rounded-l-md mr-16 '
                      required
                    />

                    <Button
                      type='primary'
                      className='btn-brand rounded-l-none inline-block p-0 px-4 -mt-4 -ml-3 z-50'
                      size='large'
                      htmlType='submit'
                    >
                      <ArrowRightOutlined
                        className=''
                        style={{ fontSize: "1.2rem", verticalAlign: "top" }}
                      />
                    </Button>
                  </Input.Group>
                </Form>
              </Formik>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]"
              style={{
                width: "1000px",
                height: "1000px",
                borderRadius: "50%",
                background:
                  "radial-gradient(37.76% 37.76% at 50.00% 38.71%, rgba(231, 180, 255, 0.20) 0%, rgba(137, 118, 254, 0.20) 100%)",
                filter: "blur(80px)",
                zIndex: "1",
                top: "370px",
                bottom: "auto",
              }}
            ></div>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]"
              style={{
                width: "1000px",
                height: "1000px",
                borderRadius: "50%",
                background:
                  "radial-gradient(37.76% 37.76% at 50.00% 38.71%, rgba(231, 180, 255, 0.20) 0%, rgba(137, 118, 254, 0.20) 100%)",
                filter: "blur(80px)",
                zIndex: "1",
                bottom: "-620px",
                top: "auto",
              }}
            ></div>
            <div className="bg-[#020013] z-50 relative">
              {/* Content of the div */}
              <div className="relative my-[100px]" style={{ zIndex: "2" }}>
                <CommunityContent />
                <CommunityPower />
                <CommunityStorie />
              </div>
            </div>
          </div>

          <GetStartedBanner/>
        </section>
      </Container>
    </>
  );
}
