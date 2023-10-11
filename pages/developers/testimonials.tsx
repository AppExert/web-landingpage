import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "@components/container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const REASONS: {
  content: string;
  name: string;
  designation: string;
  image: string;
  location: string;
}[] = [
  {
    content:
      "There are no specific boundaries that are imposed on me. I can work freely at any specific time, and AppExert also gives me new learning opportunities and also teaches other folks as well in my company.",
    name: "Arindam ",
    designation: "Lead Software Engineer",
    image: "/images/ArindamImage.png",
    location: "West Bengal, India",
  },
  {
    content:
      "The vision of the high level management and the trust they entrust in the employees is a factor that makes them unique. The freedom we have in terms of work we do can only be seen in a very few companies.",
    name: "Sharon Sara Varghese ",
    designation: "Senior Software QA Engineer",
    image: "/images/sharon.png",
    location: "Texas, US",
  },
  {
    content:
      "The experience in AppExert is really a great opportunity for me. Every day is a new learning, and the learning helped me to step up to the next level of my life.",
    name: "Asarudeen   ",
    designation: "Software Developer ",
    image: "/images/asar.png",
    location: "Tamil Nadu, India",
  },
  {
    content:
      "We get the new opportunity, they give us time to learn, and then they want us to show some skills that we can do, so it's the best environment to work with.",
    name: "Nidhi Sharma ",
    designation: "Software Developer ",
    image: "/images/nidhi.png",
    location: "Punjab, India",
  },
];

const testimonials = () => {
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
        const section = document.getElementById("testimonial-section");
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

  return (
    <section id='testimonial-section'>
      <Container>
        <div ref={swiperContainerRef} className='md:absolute inset-x-0 '>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            spaceBetween={100}
            pagination={{
              clickable: true,
              bulletActiveClass: "custom-active-bullet",
              bulletClass: "custom-bullet",
            }}
            modules={[Pagination]}
            className='mySwiper md:p-12 py-12'
            onSlideChange={handleSlideChange}
          >
            {REASONS.map((reason, index) => (
              <SwiperSlide
                key={index}
                className={`p-[24px] rounded-[8px] flex md:flex-row flex-col  gap-4 md:w-[1000px] justify-between bg-[#1B1929]  ${
                  index === activeBulletIndex ? "opacity-100" : "opacity-[20%]"
                }`}
              >
                <div className='md:w-[496px] flex flex-col justify-between '>
                  <div>
                    <Image
                      width={40}
                      height={40}
                      src={"/images/home/ipad/quotation.svg"}
                      alt='quotation'
                    />
                    <h3 className='text-white mt-[24px] mb-[16px] text-[22px] md:text-[#C3C2CB]  cursor-pointer'>
                      {reason.content}
                    </h3>
                  </div>
                  <div>
                    <p className='text-gray-400 text-[#FFFFFF] text-[18px] cursor-pointer'>
                      {reason.name}
                    </p>
                    <p className='text-gray-400 text-[18px] cursor-pointer'>
                      {reason.designation}
                    </p>
                    <div className='flex  w-max mt-[12px] p-[4px] px-[8px] text-[#908E9F] bg-[#715ef914] rounded-[20px] text-[14px] cursor-pointer font-normal'>
                      <div className='mr-1 mt-[1px]'>
                        <Image
                          width={14}
                          height={14}
                          src={"/images/home/location.svg"}
                          alt='location'
                        />
                      </div>

                      {reason.location}
                    </div>
                  </div>
                </div>
                <div className='md:w-[400px] '>
                  <Image width={400} height={400} src={reason.image} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default testimonials;
