import Head from "next/head";

import BrandShowcase from "@components/startup/brand-showcase";
import StartupHero from "@components/startup/startup-hero";
import StartupContent from "@components/startup/startup-content";
import TrustedDevelopers from "@components/startup/trusted-developers";
import SuccessStorie from "@components/startup/success-storie";
import GetStartedBanner from "@components/startup/get-started-banner";
import StartupKeyPoint from "../../components/startup/startup-keypoint";
import Container from "@components/container";
export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          AppExert | Hire Remote Talent & Scale Your Developers Team Today
        </title>
        <meta
          name="description"
          content={
            "AppExert provides the best online platform to build your Remote Team. Access world's top tech talents and build your dream team today with AppExert."
          }
        />
        <meta
          name="keywords"
          content="appexert startup labs, hire engineers, build remote team, appexert"
        />
        <meta name="author" content="Appexert" />
        <meta name="doc-type" content="Web Page" />
        <meta name="copyright" content="https://appexert.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="distribution" content="Global" />
        <meta name="publisher" content="Appexert" />
        <meta
          name="classification"
          content="hire developers, manage remote team, managed remote developers, start hiring, hire developers, appexert"
        />
      </Head>
      <Container className="md:py-[100px] py-[48px]">
        <StartupHero />
        <BrandShowcase />
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
            <div className="relative my-[100px]" style={{ zIndex: "2" }}>
              <StartupKeyPoint />
              <TrustedDevelopers />
              <SuccessStorie />
            </div>
          </div>
        </div>
        <GetStartedBanner />
      </Container>
    </>
  );
}
