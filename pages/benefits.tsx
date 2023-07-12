import Container from "@components/container";
import Head from "next/head";
import { devLandingPageBenefits } from "global/constants";
import Link from "next/link";
import { Button } from "antd";

const Benefits = () => {

  const DEVELOPER_BENEFITS_PAGE = devLandingPageBenefits;
 
  return (
    <>
      <Head>
        <title>Developer Benefits | AppExert</title>
        <meta
          name='description'
          content='Want to know how AppExert online platform is different from other Remote Job websites? Read answers to FAQs to help you make a better choice.'
        />
        <meta
          name='keywords'
          content='appexert faq, frequently asked questions appexert, hire developers'
        />
      </Head>
      <Container className="md:py-[100px] py-[48px]">       
        <section >
          <div className="text-center flex flex-col justify-center items-center ">
            <h1 className="heading pt-2 text-center md:w-[850px] md:text-[48px]">
            Get hired to one of our teams and enjoy AppExert+ benefits
            </h1>
          
            <div className='flex gap-4 items-center pt-[55px]'>
              <Link href='https://jobs.appexert.com/'>
                <Button
                  type='primary'
                  className='page-btn'
                >
               View open positions
                </Button>
              </Link>
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
            <div className="  z-50 relative ">
              <div className="relative my-[100px] " style={{ zIndex: "2" }}>
                <div className=' bg-[#020013]  px-[32px] py-[72px] rounded-[8px]'>
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-6 gap-4  bg-[#09071B] rounded-[8px]">
                    {DEVELOPER_BENEFITS_PAGE.map((benefits: any) => (
                      <div
                        key={benefits.name}
                        className='w-full h-full grid gap-2 text-center md:p-4 p-2  '
                      >
                        <div className='w-full flex justify-center fill-current max-h-max'>
                          {benefits.icon}
                        </div>
                        <h3 className='font-medium text-[#E4E4E4] text-[18px] mt-[-20px]'>
                          {benefits.name}
                        </h3>
                        <p className=' text-[#908E9F] text-[14px]'>{benefits.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
               
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col   justify-between p-[30px] md:py-[72px] md:px-[100px] border-[1px] border-[#43424D] rounded-[12px] "
            style={{
              background:
            "linear-gradient(135deg, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)",
              backdropFilter: "blur(12px)"
            }}
          >
            <h1 className="heading  pt-2 pb-4 md:pb-0 md:w-[560px]">Join our community of (100+) remote developers</h1>
            <Link href='https://jobs.appexert.com/'>
              <Button
                type='primary'
                className='page-btn-white'
              >
               View open positions
              </Button>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Benefits;
