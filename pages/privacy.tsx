import Privacy from "@components/privacy";
import Head from "next/head";
import Container from "@components/container";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Learn More about Privacy Policy | AppExert</title>
        <meta
          name='description'
          content='AppExert is a trusted online platform for technical recruitment of Remote Developers. Get info about the privacy policy to hire top Remote Developers.'
        />
        <meta
          name='keywords'
          content='learn our privacy policy, appexert policy, appexert'
        />
      </Head>
      <section className="md:py-[100px] py-[48px] " >
        <Container>
          <div className='flex  justify-center items-center pb-[32px] md:pb-[38px]'>
            <h1 className='heading pt-2 md:w-[651px] text-center'>
            We care about your privacy
            </h1>
          </div>
          <Privacy />
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
