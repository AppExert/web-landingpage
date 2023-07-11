import PreSignUpSteps from "@components/companies/pre-sign-up-steps";
import { useSimpleLayout } from "@hooks/useSimpleLayout";
import Head from "next/head";

const StartHiring = () => {
  useSimpleLayout();

  return (
    <>
      <Head>
        <title>
          AppExert | Select Skills & Start Hiring Full Time Developers
        </title>
        <meta
          name='description'
          content='Hire FastTrack & Remote-Ready Devs to Work From Anywhere. AppExert helps you Hire Developers handpicked from our vetted pool of global tech talents.'
        />
        <meta
          name='keywords'
          content='hire remote developers, hire engineers, select skills, start hiring, hire developers, appexert'
        />
        {/* og tags */}
        <meta
          property='og:title'
          content='AppExert | Select Skills & Start Hiring Full Time Developers'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta
          property='og:url'
          content='https://appexert.com/companies/start-hiring?step=1'
        />
        <meta
          property='og:description'
          content='Hire FastTrack & Remote-Ready Devs to Work From Anywhere. AppExert helps you Hire Developers handpicked from our vetted pool of global tech talents.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fblack_logo.png&w=256&q=75'
        />
      </Head>
      <PreSignUpSteps />
    </>
  );
};

export default StartHiring;
