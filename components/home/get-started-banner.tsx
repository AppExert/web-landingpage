import Container from "@components/container";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const GetStartedBanner = () => {
  return (
    <section className="md:py-[100px] py-[72px]">
      <Container>
        <div className='flex flex-col justify-center items-center '>
          <p className='green-label'>HOW IT WORKS</p>
          <h1 className='heading pt-2 md:w-[651px] text-center text-[24px] md:text-[40px] '>
            Get started today in 3 easy steps
          </h1>
        </div>
        <div className='hidden md:flex  justify-center md:my-[72px]'>
          <div className=' text-white justify-center md:w-[672px] '>
            <div className='flex'>
              <svg height={1} width={"100%"} className='relative top-12 '>
                <line
                  x1='120'
                  y1='1'
                  x2='310'
                  y2='1'
                  stroke='#2E2C4A'
                  strokeDasharray='3,3'
                />
              </svg>
              <svg height={1} width={"100%"} className='relative top-12 '>
                <line
                  x1='30'
                  y1='1'
                  x2='220'
                  y2='1'
                  stroke='#2E2C4A'
                  strokeDasharray='3,3'
                />
              </svg>
            </div>

            <div className='grid grid-cols-3 gap-x-[48px] gap-y-[16px]  text-center place-items-center '>
              <div className="w-[130px] h-[130px]  -mt-4 ">
                <Image
                  width={130}
                  height={130}
                  src={"/images/home/step1.svg"}
                  alt='step1'

                />
              </div>
              <div className="w-[130px] h-[130px] -mt-4  ">
                <Image
                  width={130}
                  height={130}
                  src={"/images/home/step2.svg"}
                  alt='step2'
                />
              </div>
              <div className="w-[130px] h-[130px]  -mt-4  ">
                <Image
                  width={130}
                  height={130}
                  src={"/images/home/step3.svg"}
                  alt='step3'
                />
              </div>
              <div className='flex flex-col justify-center items-center  md:w-[192px]'>
                <p className='text-[#848195] text-[18px] font-medium pb-1'>
                  STEP 1
                </p>
                <h4 className='text-white text-[22px] font-semibold'>
                  Sign up for free now
                </h4>
              </div>
              <div className='flex flex-col justify-center items-center md:w-[192px]'>
                <p className='text-[#848195] text-[18px] font-medium pb-1'>
                  STEP 2
                </p>
                <h4 className='text-white text-[22px] font-semibold'>
                  Shortlist from our talent pool
                </h4>
              </div>
              <div className='flex flex-col justify-center items-center md:w-[192px]'>
                <p className='text-[#848195] text-[18px] font-medium pb-1'>
                  STEP 3
                </p>
                <h4 className='text-white text-[22px] font-semibold'>
                  Hire and manage with confidence
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* mobile device */}
        <div className=' md:hidden flex  justify-center my-[35px] mb-[72px] px-20'>
          <div className="flex  flex-col gap-[125px]">
            <svg height={100} width={1} className='relative top-[190px] left-[100px] '>
              <line
                x1='50%'
                y1='15'
                x2='50%'
                y2='80'
                stroke='#2E2C4A'
                strokeDasharray='3,3'
              />
            </svg>
            <svg height={100} width={1} className='relative top-[230px] left-[100px] '>
              <line
                x1='50%'
                y1='15'
                x2='50%'
                y2='80'
                stroke='#2E2C4A'
                strokeDasharray='3,3'
              />
            </svg>
          </div>
          <div className=' text-white'>
            <div className='flex flex-col gap-[48px] text-center '>
              <div className="flex flex-col items-center">
                <div className="w-[130px] h-[130px]   ">
                  <Image
                    width={130}
                    height={130}
                    src={"/images/home/step1.svg"}
                    alt='step1'
                  />
                </div>
                <p className='text-[#848195] text-[18px] font-medium -mt-6 pb-1'>
                  STEP 1
                </p>
                <h4 className='text-white text-[22px] font-semibold '>
                  Sign up for free now
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[130px] h-[130px]   ">
                  <Image
                    width={130}
                    height={130}
                    src={"/images/home/step2.svg"}
                    alt='step2'

                  />
                </div>
                <p className='text-[#848195] text-[18px] -mt-6 font-medium pb-1'>
                  STEP 2
                </p>
                <h4 className='text-white text-[22px]  font-semibold'>
                  Shortlist from our talent pool
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[130px] h-[130px]   ">
                  <Image
                    width={130}
                    height={130}
                    src={"/images/home/step3.svg"}
                    alt='step3'

                  />
                </div>
                <p className='text-[#848195] text-[18px] -mt-6  font-medium pb-1'>
                  STEP 3
                </p>
                <h4 className='text-white text-[22px] font-semibold'>
                  Hire and manage with confidence
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-4 items-center justify-center'>
          <Link href='/companies/start-hiring?step=1'>
            <Button type='primary' className='page-btn' size='large'>
              Get started for free
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default GetStartedBanner;
