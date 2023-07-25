import Container from "@components/container";
import Image from "next/image";

const GetStartedBanner = () => {
  return (
    <section className='md:pt-[100px] pt-[72px]'>
      <Container>
        <div className='flex flex-col justify-center items-center '>
          <p className='green-label text-[16px]'>HOW TO JOIN</p>
          <h1 className='heading pt-2 md:w-[651px] text-center text-[24px] md:text-[40px] '>
            Get started today in 4 easy steps
          </h1>
        </div>
        <div className='hidden md:flex  justify-center md:my-[72px]'>
          <div className=' text-white justify-center '>
            <div className='flex'>
              <svg height={1} width={"100%"} className='relative top-12 '>
                <line
                  x1='170'
                  y1='1'
                  x2='390'
                  y2='1'
                  stroke='#2E2C4A'
                  strokeDasharray='3,3'
                />
              </svg>
              <svg height={1} width={"100%"} className='relative top-12 '>
                <line
                  x1='90'
                  y1='1'
                  x2='320'
                  y2='1'
                  stroke='#2E2C4A'
                  strokeDasharray='3,3'
                />
              </svg>
              <svg height={1} width={"100%"} className='relative top-12 '>
                <line
                  x1='10'
                  y1='1'
                  x2='220'
                  y2='1'
                  stroke='#2E2C4A'
                  strokeDasharray='3,3'
                />
              </svg>
            </div>

            <div className='grid grid-cols-4 gap-x-[72px] gap-y-[16px]  text-center place-items-center '>
              <div className='w-[130px] h-[130px]  -mt-4 '>
                <Image
                  width={130}
                  height={130}
                  src={"/images/developers/steps/step1.svg"}
                  alt='step1'
                />
              </div>
              <div className='w-[130px] h-[130px] -mt-4  '>
                <Image
                  width={130}
                  height={130}
                  src={"/images/developers/steps/step2.svg"}
                  alt='step2'
                />
              </div>
              <div className='w-[130px] h-[130px]  -mt-4  '>
                <Image
                  width={130}
                  height={130}
                  src={"/images/developers/steps/step3.svg"}
                  alt='step3'
                />
              </div>
              <div className='w-[130px] h-[130px] -mt-4  '>
                <Image
                  width={130}
                  height={130}
                  src={"/images/developers/steps/step4.svg"}
                  alt='step2'
                />
              </div>
              <div className='flex flex-col justify-center items-center  '>
                <p className='text-[#848195] text-[18px] font-medium pb-1'>
                  STEP 1
                </p>
                <h4 className='text-white text-[18px] font-semibold'>
                  Join our platform. Forever free for developers
                </h4>
              </div>
              <div className='flex flex-col justify-center items-center md:w-[192px]'>
                <p className='text-[#848195] text-[18px] font-medium pb-1'>
                  STEP 2
                </p>
                <h4 className='text-white text-[18px] font-semibold'>
                  Clear our one-time screening process
                </h4>
              </div>
              <div className='flex flex-col justify-center items-center md:w-[192px]'>
                <p className='text-[#848195] text-[18px] font-medium pb-1'>
                  STEP 3
                </p>
                <h4 className='text-white text-[18px] font-semibold'>
                  Discover exciting global opportunities
                </h4>
              </div>
              <div className='flex flex-col justify-center items-center md:w-[192px]'>
                <p className='text-[#848195] text-[18px] font-medium pb-1'>
                  STEP 4
                </p>
                <h4 className='text-white text-[18px] font-semibold'>
                  Team up and thrive as a remote developer
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* mobile device */}
        <div className=' md:hidden flex  justify-center my-[35px] mb-[72px] px-20'>
          <div className=' text-white'>
            <div className='flex flex-col gap-[48px] text-center '>
              <div className='flex flex-col items-center'>
                <div className='w-[130px] h-[130px]   '>
                  <Image
                    width={130}
                    height={130}
                    src={"/images/developers/steps/step1.svg"}
                    alt='step1'
                  />
                </div>
                <p className='text-[#848195] text-[18px] -mt-6 font-medium pb-1'>
                  STEP 1
                </p>
                <h4 className='text-white text-[18px] font-semibold '>
                  Join our platform. Forever free for developers
                </h4>
                <svg height={100} width={1} className='mt-[20px]'>
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
              <div className='flex flex-col -mt-12 items-center'>
                <div className='w-[130px] h-[130px]   '>
                  <Image
                    width={130}
                    height={130}
                    src={"/images/developers/steps/step2.svg"}
                    alt='step2'
                  />
                </div>
                <p className='text-[#848195] text-[18px] -mt-6 font-medium pb-1'>
                  STEP 2
                </p>
                <h4 className='text-white text-[18px] font-semibold'>
                  Clear our one-time screening process
                </h4>
                <svg height={100} width={1} className='mt-[20px]'>
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
              <div className='flex flex-col -mt-12 items-center'>
                <div className='w-[130px] h-[130px]   '>
                  <Image
                    width={130}
                    height={130}
                    src={"/images/developers/steps/step3.svg"}
                    alt='step3'
                  />
                </div>
                <p className='text-[#848195] text-[18px] -mt-6 font-medium pb-1'>
                  STEP 3
                </p>
                <h4 className='text-white text-[18px]  font-semibold'>
                  Discover exciting global opportunities
                </h4>
                <svg height={100} width={1} className='mt-[20px]'>
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
              <div className='flex flex-col -mt-12 items-center'>
                <div className='w-[130px] h-[130px]   '>
                  <Image
                    width={130}
                    height={130}
                    src={"/images/developers/steps/step4.svg"}
                    alt='step3'
                  />
                </div>
                <p className='text-[#848195] text-[18px] -mt-6 font-medium pb-1'>
                  STEP 4
                </p>
                <h4 className='text-white text-[18px] font-semibold'>
                  Team up and thrive as a remote developer
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStartedBanner;
