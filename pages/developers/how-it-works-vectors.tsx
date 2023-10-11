/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Container from "@components/container";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Steps } from "antd";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "antd";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const HowItWorks = () => {
  const [activeBulletIndex, setActiveBulletIndex] = useState(0);

  const handleSlideChange = (swiper: {
    realIndex: React.SetStateAction<number>;
  }) => {
    setActiveBulletIndex(swiper.realIndex);
  };

  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiperContainer =
      swiperContainerRef.current as unknown as HTMLElement;
    if (swiperContainer) {
      const updateSectionHeight = () => {
        const swiperContainerHeight = swiperContainer.clientHeight;
        const section = document.getElementById("how-to-join-section");
        if (section) {
          section.style.height = swiperContainerHeight + "px";
        }
      };

      updateSectionHeight();
      window.addEventListener("resize", updateSectionHeight);
      return () => {
        window.removeEventListener("resize", updateSectionHeight);
      };
    }
  }, []);

  const features = [
    {
      show: true,
      title: "Create your profile",
      imageSrc: "/images/home/ipad/Frame1.png",
      keyPoints: [
        "Sign up and create your free profile to become part of our global developer community. Your gateway to permanent remote job opportunities.",
      ],
      count: "1",
    },
    {
      show: false,
      title: "Meet our developer success team",
      imageSrc: "/images/home/ipad/Frame2.png",
      keyPoints: [
        "Meet with our developer success team members to share your preferences, and they will guide you through our one time pre-screening step.",
      ],
      count: "2",
    },
    {
      show: false,
      title: "Get Interviewed",
      imageSrc: "/images/home/ipad/Frame3.png",
      keyPoints: [
        "Matching companies reach out to you with all the upfront information. And, you choose to interview with the preferred companies.",
      ],
      count: "3",
    },
    {
      show: false,
      title: "Onboard and thrive",
      imageSrc: "/images/home/ipad/Frame4.png",
      keyPoints: [
        "Once you accept your job offer, you will be onboarded to our team and will be enabled with our tools/processes to thrive as a remote developer.",
      ],
      count: "4",
    },
  ];

  const steps = [
    {
      icon: (
        <div className='flex justify-center '>
          <div className='w-[fit-content] h-[fit-content] rounded-full relative overflow-hidden p-3'>
            <div
              className='absolute inset-0  rounded-full'
              style={{
                background: activeBulletIndex === 0 ? "#362AA2" : "#1B1551",
                filter: "blur(21px)",
              }}
            ></div>
            <div className='fill-current relative '>
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.46152 4.50015C4.92096 4.2872 4.65067 4.18072 4.47846 4.23801C4.32892 4.28775 4.21158 4.40509 4.16184 4.55463C4.10455 4.72684 4.21102 4.99713 4.42397 5.53769L9.72461 18.9931C9.89612 19.4285 9.98188 19.6462 10.1216 19.7336C10.2435 19.8097 10.3922 19.8298 10.5299 19.7887C10.6878 19.7415 10.8282 19.5543 11.1089 19.1799L13.2496 16.3257L16.6989 21.0686C16.8885 21.3293 16.9834 21.4597 17.1042 21.5142C17.2102 21.562 17.3296 21.5714 17.4418 21.5407C17.5696 21.5057 17.6836 21.3917 17.9116 21.1637L21.0876 17.9878C21.3155 17.7598 21.4295 17.6458 21.4645 17.518C21.4952 17.4058 21.4859 17.2864 21.438 17.1803C21.3835 17.0595 21.2532 16.9647 20.9924 16.7751L16.2496 13.3257L19.1038 11.1851C19.4781 10.9043 19.6653 10.764 19.7125 10.606C19.7536 10.4684 19.7336 10.3196 19.6574 10.1978C19.57 10.058 19.3524 9.97229 18.917 9.80078L5.46152 4.50015Z'
                  stroke={activeBulletIndex === 0 ? "white" : "#D4CEFD"}
                  strokeOpacity={activeBulletIndex === 0 ? "none" : "0.7"}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <div className='flex justify-center '>
          <div className='w-[fit-content] h-[fit-content] rounded-full relative overflow-hidden p-3'>
            <div
              className='absolute inset-0  rounded-full'
              style={{
                background: activeBulletIndex === 1 ? "#362AA2" : "#1B1551",
                filter: "blur(21px)",
              }}
            ></div>
            <div className='fill-current relative '>
              <svg
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.66602 5.00005C7.67767 5.00082 7.1596 5.01338 6.75803 5.21799C6.38171 5.40973 6.07575 5.71569 5.884 6.09202C5.66602 6.51984 5.66602 7.07989 5.66602 8.2V17.8C5.66602 18.9201 5.66602 19.4802 5.884 19.908C6.07575 20.2843 6.38171 20.5903 6.75803 20.782C7.18586 21 7.74591 21 8.86602 21H16.466C17.5861 21 18.1462 21 18.574 20.782C18.9503 20.5903 19.2563 20.2843 19.448 19.908C19.666 19.4802 19.666 18.9201 19.666 17.8V8.2C19.666 7.07989 19.666 6.51984 19.448 6.09202C19.2563 5.71569 18.9503 5.40973 18.574 5.21799C18.1724 5.01338 17.6544 5.00082 16.666 5.00005M8.66602 5.00005V7H16.666V5.00005M8.66602 5.00005V4.70711C8.66602 4.25435 8.84587 3.82014 9.16602 3.5C9.48616 3.17986 9.92037 3 10.3731 3H14.9589C15.4117 3 15.8459 3.17986 16.166 3.5C16.4862 3.82014 16.666 4.25435 16.666 4.70711V5.00005M16.666 11H14.666M16.666 16H14.666M8.66602 11L9.66602 12L11.666 10M8.66602 16L9.66602 17L11.666 15'
                  stroke={activeBulletIndex === 1 ? "white" : "#D4CEFD"}
                  strokeOpacity={activeBulletIndex === 1 ? "none" : "0.7"}
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <div className='flex justify-center '>
          <div className='w-[fit-content] h-[fit-content] rounded-full relative overflow-hidden p-3'>
            <div
              className='absolute inset-0  rounded-full'
              style={{
                background: activeBulletIndex === 2 ? "#362AA2" : "#1B1551",
                filter: "blur(21px)",
              }}
            ></div>
            <div className='fill-current relative '>
              <svg
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.334 10L18.9108 8.45392C19.7039 7.97803 20.1005 7.74009 20.4268 7.77051C20.7113 7.79703 20.9709 7.944 21.14 8.17433C21.334 8.43848 21.334 8.90095 21.334 9.8259V14.1741C21.334 15.099 21.334 15.5615 21.14 15.8257C20.9709 16.056 20.7113 16.203 20.4268 16.2295C20.1005 16.2599 19.7039 16.022 18.9108 15.5461L16.334 14M6.53398 18H13.134C14.2541 18 14.8141 18 15.242 17.782C15.6183 17.5903 15.9243 17.2843 16.116 16.908C16.334 16.4802 16.334 15.9201 16.334 14.8V9.2C16.334 8.0799 16.334 7.51984 16.116 7.09202C15.9243 6.71569 15.6183 6.40973 15.242 6.21799C14.8141 6 14.2541 6 13.134 6H6.53398C5.41388 6 4.85383 6 4.426 6.21799C4.04968 6.40973 3.74372 6.71569 3.55197 7.09202C3.33398 7.51984 3.33398 8.07989 3.33398 9.2V14.8C3.33398 15.9201 3.33398 16.4802 3.55197 16.908C3.74372 17.2843 4.04968 17.5903 4.426 17.782C4.85383 18 5.41388 18 6.53398 18Z'
                  stroke={activeBulletIndex === 2 ? "white" : "#D4CEFD"}
                  strokeOpacity={activeBulletIndex === 2 ? "none" : "0.7"}
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <div className='flex justify-center '>
          <div className='w-[fit-content] h-[fit-content] rounded-full relative overflow-hidden p-3'>
            <div
              className='absolute inset-0  rounded-full'
              style={{
                background: activeBulletIndex === 3 ? "#362AA2" : "#1B1551",
                filter: "blur(21px)",
              }}
            ></div>
            <div className='fill-current relative '>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 15.0002L9 12.0002M12 15.0002C13.3968 14.469 14.7369 13.799 16 13.0002M12 15.0002V20.0002C12 20.0002 15.03 19.4502 16 18.0002C17.08 16.3802 16 13.0002 16 13.0002M9 12.0002C9.53214 10.6197 10.2022 9.29631 11 8.05025C12.1652 6.18723 13.7876 4.6533 15.713 3.59434C17.6384 2.53538 19.8027 1.98662 22 2.00025C22 4.72025 21.22 9.50025 16 13.0002M9 12.0002H4C4 12.0002 4.55 8.97025 6 8.00025C7.62 6.92025 11 8.00025 11 8.00025M4.5 16.5002C3 17.7602 2.5 21.5002 2.5 21.5002C2.5 21.5002 6.24 21.0002 7.5 19.5002C8.21 18.6602 8.2 17.3702 7.41 16.5902C7.02131 16.2193 6.50929 16.0049 5.97223 15.9883C5.43516 15.9717 4.91088 16.154 4.5 16.5002Z'
                  stroke={activeBulletIndex === 3 ? "white" : "#D4CEFD"}
                  strokeOpacity={activeBulletIndex === 3 ? "none" : "0.7"}
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.icon, icon: item.icon }));

  return (
    <section className='md:py-[100px] py-[72px] '>
      <Container>
        <div className='flex flex-col justify-center items-center mb-[40px] md:mb-[0px] '>
          <p className='green-label'>HOW TO JOIN</p>
          <h1 className='heading pt-2 md:w-[651px] text-center text-[24px] md:text-[40px] '>
            Get started today in 4 easy steps
          </h1>
        </div>
        <div className='hidden md:flex justify-center md:my-[72px] '>
          <Steps
            className='md:w-[661px] w-max'
            current={activeBulletIndex}
            direction='horizontal'
            items={items}
          />
        </div>
        <div id='how-to-join-section'>
          <div ref={swiperContainerRef} className='md:absolute inset-x-0 '>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              loop={true}
              spaceBetween={64}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: "custom-active-bullet",
                bulletClass: "custom-bullet-mobile",
              }}
              modules={[Pagination, Autoplay]}
              onSlideChange={handleSlideChange}
              className='mySwiper md:pb-0 pb-12'
            >
              {features.map((reason, index) => (
                <SwiperSlide
                  key={index}
                  className='md:p-[24px] pb-[20px] rounded-[8px] flex md:flex-row flex-col  
                  gap-4 md:w-[1000px] justify-between bg-[#09071B] '
                >
                  <Image width={1000} height={1000} src={reason.imageSrc} />

                  <div className='flex flex-col gap-[12px] px-[20px] md:px-[40px] place-self-center'>
                    <p className='green-label'>STEP {reason.count}</p>
                    <h1 className='heading  text-[22px] '>{reason.title}</h1>
                    <h3 className='text-[22px] text-[#908E9F]  cursor-pointer'>
                      {reason.keyPoints}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='flex justify-center mt-[56px]'>
          <Link
            href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
          >
            <Button type='primary' className='page-btn px-[16px] py-[24px]'>
              Join us, now
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default HowItWorks;
