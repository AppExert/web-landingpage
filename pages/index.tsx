import Head from "next/head";
import Hero from "@components/home/hero";
import HowItWorks from "@components/home/how-it-works";
import GetStartedBanner from "@components/home/get-started-banner";
import ComparePlatforms from "@components/home/compare-platforms";
import BrandShowcase from "@components/home/brand-showcase";
import ChooseToUncomplicate from "@components/home/choose-to-uncomplicate";
import WhyChooseAppExert from "@components/home/why-choose-appexert";
import TestimonialsClients from "@components/home/testimonials-clients";
import TestimonialsDevs from "@components/home/testimonials-devs";

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
        <meta
          name='keywords'
          content='hire engineers, remote developers, work from home, build remote team, appexert'
        />
        <meta name='author' content='Appexert' />
        <meta name='doc-type' content='Web Page' />
        <meta name='copyright' content='https://appexert.com/' />
        <meta name='robots' content='index, follow' />
        <meta name='distribution' content='Global' />
        <meta name='publisher' content='Appexert' />
        <meta
          name='classification'
          content='hire developers, manage remote team, managed remote developers, start hiring, hire developers,  appexert'
        />

        {/* og tags */}
        <meta
          property='og:title'
          content='AppExert | Build Your Products Faster & Better with Remote Teams'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta property='og:url' content='https://appexert.com/' />
        <meta
          property='og:description'
          content='Building products with Remote Developers is easier with AppExert. Our team of hand-picked Remote Team helps you execute critical projects successfully'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fblack_logo.png&w=256&q=75'
        />
      </Head>

      <Hero />
      <BrandShowcase />
      <HowItWorks />
      <ChooseToUncomplicate />

      <WhyChooseAppExert />
      <ComparePlatforms />
      <TestimonialsClients />
      <TestimonialsDevs />

      <GetStartedBanner />
    </>
  );
}
