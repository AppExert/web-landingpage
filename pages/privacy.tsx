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
      <section className='hero bg-gray-100 min-h-screen pt-10'>
        <h2 className='section-heading text-center pb-10'>Privacy Policy</h2>
        <Container>
          <Privacy />
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
