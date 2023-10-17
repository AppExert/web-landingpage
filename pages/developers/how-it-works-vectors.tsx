/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Container from "@components/container";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "antd";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import { animate, motion, useScroll, useSpring } from "framer-motion";

const HowItWorks = () => {
  const [activeBulletIndex, setActiveBulletIndex] = useState(0);

  const handleSlideChange = (swiper: {
    realIndex: React.SetStateAction<number>;
  }) => {
    setActiveBulletIndex(swiper.realIndex);
  };

  const swiperContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const swiperContainer = swiperContainerRef.current;

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
      imageSrc: "/images/home/ipad/step1.png",
      className: "",
      keyPoints: [
        "Sign up and create your free profile to become part of our global developer community. Your gateway to permanent remote job opportunities.",
      ],
      count: "1",
    },
    {
      show: false,
      title: "Meet our developer success team",
      imageSrc: "/images/home/ipad/step2.png",
      className: "",
      keyPoints: [
        "Meet with our developer success team members to share your preferences, and they will guide you through our one time pre-screening step.",
      ],
      count: "2",
    },
    {
      show: false,
      title: "Get Interviewed",
      imageSrc: "/images/home/ipad/step3.png",
      className: "my-[-8px]",
      keyPoints: [
        "Matching companies reach out to you with all the upfront information. And, you choose to interview with the preferred companies.",
      ],
      count: "3",
    },
    {
      show: false,
      title: "Onboard and thrive",
      imageSrc: "/images/home/ipad/step4.png",
      className: "",
      keyPoints: [
        "Once you accept your job offer, you will be onboarded to our team and will be enabled with our tools/processes to thrive as a remote developer.",
      ],
      count: "4",
    },
  ];

  const steps = [
    {
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_10466_60474)'>
            <circle
              cx='63'
              cy='63'
              r='21'
              fill={activeBulletIndex === 0 ? "#362AA2" : "#1B1551"}
            />
          </g>
          <path
            d='M56.4615 53.5001C55.921 53.2872 55.6507 53.1807 55.4785 53.238C55.3289 53.2878 55.2116 53.4051 55.1618 53.5546C55.1045 53.7268 55.211 53.9971 55.424 54.5377L60.7246 67.9931C60.8961 68.4285 60.9819 68.6462 61.1216 68.7336C61.2435 68.8097 61.3922 68.8298 61.5299 68.7887C61.6878 68.7415 61.8282 68.5543 62.1089 68.1799L64.2496 65.3257L67.6989 70.0686C67.8885 70.3293 67.9834 70.4597 68.1042 70.5142C68.2102 70.562 68.3296 70.5714 68.4418 70.5407C68.5696 70.5057 68.6836 70.3917 68.9116 70.1637L72.0876 66.9878C72.3155 66.7598 72.4295 66.6458 72.4645 66.518C72.4952 66.4058 72.4859 66.2864 72.438 66.1803C72.3835 66.0595 72.2532 65.9647 71.9924 65.7751L67.2496 62.3257L70.1038 60.1851C70.4781 59.9043 70.6653 59.764 70.7125 59.606C70.7536 59.4684 70.7336 59.3196 70.6574 59.1978C70.57 59.058 70.3524 58.9723 69.917 58.8008L56.4615 53.5001Z'
            stroke={activeBulletIndex === 0 ? "white" : "#D4CEFD"}
            strokeOpacity={activeBulletIndex === 0 ? "none" : "0.7"}
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <filter
              id='filter0_f_10466_60474'
              x='0'
              y='0'
              width='126'
              height='126'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='21'
                result='effect1_foregroundBlur_10466_60474'
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_10466_60479)'>
            <circle
              cx='63.666'
              cy='63'
              r='21'
              fill={activeBulletIndex === 1 ? "#362AA2" : "#1B1551"}
            />
          </g>
          <path
            d='M59.666 56.0001C58.6777 56.0008 58.1596 56.0134 57.758 56.218C57.3817 56.4097 57.0757 56.7157 56.884 57.092C56.666 57.5198 56.666 58.0799 56.666 59.2V68.8C56.666 69.9201 56.666 70.4802 56.884 70.908C57.0757 71.2843 57.3817 71.5903 57.758 71.782C58.1859 72 58.7459 72 59.866 72H67.466C68.5861 72 69.1462 72 69.574 71.782C69.9503 71.5903 70.2563 71.2843 70.448 70.908C70.666 70.4802 70.666 69.9201 70.666 68.8V59.2C70.666 58.0799 70.666 57.5198 70.448 57.092C70.2563 56.7157 69.9503 56.4097 69.574 56.218C69.1724 56.0134 68.6544 56.0008 67.666 56.0001M59.666 56.0001V58H67.666V56.0001M59.666 56.0001V55.7071C59.666 55.2544 59.8459 54.8201 60.166 54.5C60.4862 54.1799 60.9204 54 61.3731 54H65.9589C66.4117 54 66.8459 54.1799 67.166 54.5C67.4862 54.8201 67.666 55.2544 67.666 55.7071V56.0001M67.666 62H65.666M67.666 67H65.666M59.666 62L60.666 63L62.666 61M59.666 67L60.666 68L62.666 66'
            stroke={activeBulletIndex === 1 ? "white" : "#D4CEFD"}
            strokeOpacity={activeBulletIndex === 1 ? "none" : "0.7"}
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <filter
              id='filter0_f_10466_60479'
              x='0.666016'
              y='0'
              width='126'
              height='126'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='21'
                result='effect1_foregroundBlur_10466_60479'
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_10466_60483)'>
            <circle
              cx='63.334'
              cy='63'
              r='21'
              fill={activeBulletIndex === 2 ? "#362AA2" : "#1B1551"}
            />
          </g>
          <path
            d='M67.334 61L69.9108 59.4539C70.7039 58.978 71.1005 58.7401 71.4268 58.7705C71.7113 58.797 71.9709 58.944 72.14 59.1743C72.334 59.4385 72.334 59.901 72.334 60.8259V65.1741C72.334 66.099 72.334 66.5615 72.14 66.8257C71.9709 67.056 71.7113 67.203 71.4268 67.2295C71.1005 67.2599 70.7039 67.022 69.9108 66.5461L67.334 65M57.534 69H64.134C65.2541 69 65.8141 69 66.242 68.782C66.6183 68.5903 66.9243 68.2843 67.116 67.908C67.334 67.4802 67.334 66.9201 67.334 65.8V60.2C67.334 59.0799 67.334 58.5198 67.116 58.092C66.9243 57.7157 66.6183 57.4097 66.242 57.218C65.8141 57 65.2541 57 64.134 57H57.534C56.4139 57 55.8538 57 55.426 57.218C55.0497 57.4097 54.7437 57.7157 54.552 58.092C54.334 58.5198 54.334 59.0799 54.334 60.2V65.8C54.334 66.9201 54.334 67.4802 54.552 67.908C54.7437 68.2843 55.0497 68.5903 55.426 68.782C55.8538 69 56.4139 69 57.534 69Z'
            stroke={activeBulletIndex === 2 ? "white" : "#D4CEFD"}
            strokeOpacity={activeBulletIndex === 2 ? "none" : "0.7"}
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <filter
              id='filter0_f_10466_60483'
              x='0.333984'
              y='0'
              width='126'
              height='126'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='21'
                result='effect1_foregroundBlur_10466_60483'
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_10466_60529)'>
            <circle
              cx='63'
              cy='63'
              r='21'
              fill={activeBulletIndex === 3 ? "#362AA2" : "#1B1551"}
            />
          </g>
          <path
            d='M63 66.0002L60 63.0002M63 66.0002C64.3968 65.469 65.7369 64.799 67 64.0002M63 66.0002V71.0002C63 71.0002 66.03 70.4502 67 69.0002C68.08 67.3802 67 64.0002 67 64.0002M60 63.0002C60.5321 61.6197 61.2022 60.2963 62 59.0502C63.1652 57.1872 64.7876 55.6533 66.713 54.5943C68.6384 53.5354 70.8027 52.9866 73 53.0002C73 55.7202 72.22 60.5002 67 64.0002M60 63.0002H55C55 63.0002 55.55 59.9702 57 59.0002C58.62 57.9202 62 59.0002 62 59.0002M55.5 67.5002C54 68.7602 53.5 72.5002 53.5 72.5002C53.5 72.5002 57.24 72.0002 58.5 70.5002C59.21 69.6602 59.2 68.3702 58.41 67.5902C58.0213 67.2193 57.5093 67.0049 56.9722 66.9883C56.4352 66.9717 55.9109 67.154 55.5 67.5002Z'
            stroke={activeBulletIndex === 3 ? "white" : "#D4CEFD"}
            strokeOpacity={activeBulletIndex === 3 ? "none" : "0.7"}
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <filter
              id='filter0_f_10466_60529'
              x='0'
              y='0'
              width='126'
              height='126'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='21'
                result='effect1_foregroundBlur_10466_60529'
              />
            </filter>
          </defs>
        </svg>
      ),
    },
  ];
  type Swiper = any;

  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  const slideTo = (index: number) => {
    swiperRef.slideTo(index, 0);
    swiperRef.autoplay.start();
  };

  return (
    <section className='py-[100px] '>
      <Container>
        <div className='flex flex-col justify-center items-center '>
          <p className='green-label'>HOW TO JOIN</p>
          <h1 className='heading pt-2 md:w-[651px] text-center text-[24px] md:text-[40px] '>
            Get started today in 4 easy steps
          </h1>
        </div>
        <div className='flex justify-center my-[20px] '>
          {/* Manual progress bar */}
          <div>
            {/* <div className='md:w-[450px]  progressbar ml-14 '>
              <motion.div
                className='bar '
                animate={{
                  width: `${
                    activeBulletIndex === 0
                      ? 35
                      : activeBulletIndex === 1
                        ? 70
                        : activeBulletIndex === 2
                          ? 100
                          : 0
                  }%`,
                }}
                transition={{
                  duration: activeBulletIndex === 3 ? 0 : 6,
                }}
              />
            </div> */}
            <div className='flex md:gap-8 justify-center  '>
              {steps.map((step, index) => (
                <div
                  className=' -mx-5  md:w-max md:h-max '
                  key={index}
                  onClick={() => slideTo(index)}
                >
                  {step.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id='how-to-join-section' className='md:min-h-[385px] '>
          <div
            ref={swiperContainerRef as React.LegacyRef<HTMLDivElement>}
            className='md:absolute inset-x-0 '
          >
            <Swiper
              onSwiper={(swiper: any) => {
                setSwiperRef(swiper);
              }}
              allowTouchMove={true}
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={64}
              // autoplay={{
              //   delay: 4000,
              //   disableOnInteraction: false,
              //   pauseOnMouseEnter: false,
              // }}
              modules={[Pagination, Virtual, Navigation, Autoplay]}
              onSlideChange={handleSlideChange}
              className='mySwiper md:pb-0 pb-12 mobile-only'
            >
              {features.map((reason, index) => (
                <SwiperSlide
                  key={index}
                  className='md:px-[24px] pb-[20px] md:pb-[0px] rounded-[8px] flex md:flex-row flex-col  
               gap-4 md:w-[1000px] justify-between bg-[#09071B] border-2 border-[#18171C]'
                >
                  <div className={reason.className}>
                    <Image width={900} height={900} src={reason.imageSrc} />
                  </div>
                  <div className='flex flex-1 border-l border-[#18171C]'></div>

                  <div className='flex flex-col gap-[12px] px-[20px] md:px-[40px] place-self-center '>
                    <p className='green-label'>STEP {reason.count}</p>
                    <h1 className='heading text-white text-[22px] '>
                      {reason.title}
                    </h1>
                    <h3 className='text-[18px] text-[#908E9F] cursor-pointer'>
                      {reason.keyPoints}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='flex justify-center mt-[36px]'>
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
