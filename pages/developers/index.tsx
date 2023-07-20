import Head from "next/head";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

import Container from "@components/container";
import FrequentlyAskedQuestion from "pages/companies/faq";
import DeveloperBenefits from "./developer-benefits";
import GetStartedBanner from "./get-started-banner";
import DeveloperKeypoint from "./developer-keypoint";

const isHideDeveloperPage = process.env.NEXT_PUBLIC_HIDE_DEVELOPER_PAGE;

const Developers = () => {
  return (
    <>
      <Head>
        <title>AppExert | Join our Community of (100+) Remote Developers</title>
        <meta
          name='description'
          content={
            "AppExert | Join a network of the World's Best Developers & get full-time, long-term Remote Software Jobs with better compensation and career growth."
          }
        />
        <meta
          name='keywords'
          content='development jobs remote, work from home jobs, full time remote jobs, remote working employees, appexert'
        />

        {/* og tags */}
        <meta
          property='og:title'
          content='AppExert | Join our Community of (100+) Remote Developers'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta property='og:url' content='https://appexert.com/developers' />
        <meta
          property='og:description'
          content="AppExert | Join a network of the World's Best Developers & get full-time, long-term Remote Software Jobs with better compensation and career growth."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fdevelopers%2Fwork-from-anywhere.svg&w=640&q=75'
        />
      </Head>
      <Container className='md:py-[100px] py-[48px]'>
        <section>
          <div className='text-center flex flex-col justify-center items-center '>
            <p className='green-label'>START. BUILD. THRIVE</p>
            <h1 className='heading pt-2 text-center md:w-[850px] md:text-[48px] text-[36px]'>
              Global work opportunities, made possible regardless of your
              location
            </h1>
            <p className='text-[20px] my-4 text-[#908E9F] py-[10px] pb-[20px] md:w-[850px] '>
              Join our team of talented developers and work fulltime for
              exciting companies worldwide. Experience the happiest remote
              developer community in the country.{" "}
            </p>
            <div className='flex gap-4 items-center z-40 md:w-auto w-full'>
              <Link
                href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
              >
                <Button type='primary' className='page-btn md:w-auto w-full'>
                  View open positions
                </Button>
              </Link>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]'
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
              className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]'
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
            <div className='bg-[#020013] z-40 relative'>
              {/* Content of the div */}
              <div className='relative my-[100px]' style={{ zIndex: "1" }}>
                <GetStartedBanner />
                <DeveloperKeypoint />
                <DeveloperBenefits />
                <h1 className='heading pt-2 text-center'>
                  Frequently asked questions
                </h1>
                <FrequentlyAskedQuestion
                  feature='developer'
                  className='landingPage'
                  expand={false}
                />
              </div>
            </div>
          </div>

          <div
            className='flex md:flex-row flex-col items-center justify-between p-[30px] md:py-[72px] md:px-[100px] border-[1px] border-[#43424D] rounded-[12px] '
            style={{
              background:
                "linear-gradient(135deg, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h1 className='heading pt-2 pb-4 md:pb-0md:w-[560px]'>
              Join our community of (100+) remote developers
            </h1>
            <Link
              href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
            >
              <Button type='primary' className='page-btn-white'>
                View open positions
              </Button>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Developers;
