
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const REASONS: {
  content: string;
  name: string;
  designation: string;
  image: string;
}[] = [
  {
    content:
      "I faced a lot of challenges related to payroll, related to communicating with clients. But when I joined Appexert, it was a real game changer for me. There are no specific boundaries that are imposed on me. I can work freely at any specific time, also got more new learning opportunities.",
    name: "Arindam ",
    designation: "Lead Software Engineer",
    image: "/images/ArindamImage.png",
  },
  {
    content:"The vision of the high level management and the trust they entrust in the employees is a factor that makes them unique. The freedom we have in terms of work we do can only be seen in a very few companies.",
    name: "Sharon Sara Varghese ",
    designation: "Senior Software QA Engineer",
    image: "/images/sharon.png",
  },
  {
    content:
      "The experience in AppExert is really a great opportunity for me And every day is a new learning, and the learning helped me to step up to the next level of my life.",
    name: "Asarudeen   ",
    designation: "Software Developer ",
    image: "/images/asar.png",
  },
  {
    content:
      "We get the new opportunity, they give us time to learn, and then they want us to show some skills that we can do, so it's the best environment to work with",
    name: "Nidhi Sharma ",
    designation: "Software Developer ",
    image: "/images/nidhi.png",
  },
];

const testimonials = () => {
  const [activeBulletIndex, setActiveBulletIndex] = useState(0); 
  
  const handleSlideChange = (swiper: { realIndex: React.SetStateAction<number>; }) => {   
    setActiveBulletIndex(swiper.realIndex);
  };

  return (
    <div className="md:h-[35vh] ">
      <div className="md:mt-[-25vh] md:absolute inset-x-0 ">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            bulletActiveClass: "custom-active-bullet",
            bulletClass: "custom-bullet",                     
          }}
          modules={[Pagination]}
          className="mySwiper md:p-12 py-12"
          onSlideChange={handleSlideChange}
        >
          {REASONS.map((reason, index) => (
            <SwiperSlide
              key={index}                
              className={`p-[24px] rounded-[8px] flex md:flex-row flex-col  gap-4 md:w-[1000px] justify-between bg-[#1B1929]  ${
                index === activeBulletIndex   ? "opacity-100" : "opacity-[20%]"
              }`}        >
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
                </div>
              </div>
              <div className="md:w-[400px] ">
                <Image
                  width={400} 
                  height={400}
                  src={reason.image} />
              </div>
            </SwiperSlide>
          ))}          
        </Swiper>
      </div>
      
    </div>


  );
};

export default testimonials;
