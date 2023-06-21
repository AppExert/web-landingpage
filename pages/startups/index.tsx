import Head from "next/head";

import BrandShowcase from "@components/startup/brand-showcase";
import StartupHero from "@components/startup/startup-hero";
import StartupContent from "@components/startup/startup-content";
import TrustedDevelopers from "@components/startup/trusted-developers";
import SuccessStorie from "@components/startup/success-storie";
import GetStartedBanner from "@components/startup/get-started-banner";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          AppExert | Hire Remote Talent & Scale Your Developers Team Today
        </title>
        <meta
          name='description'
          content={"AppExert provides the best online platform to build your Remote Team. Access world's top tech talents and build your dream team today with AppExert."}
        />
        <meta
          name='keywords'
          content='appexert startup labs, hire engineers, build remote team, appexert'
        />
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

      <StartupHero />
      <BrandShowcase />
      <StartupContent />
      <TrustedDevelopers />
      <SuccessStorie />
      <GetStartedBanner />
    </>
  );
}
