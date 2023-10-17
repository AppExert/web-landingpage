/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { animate, motion, useMotionValue, useTransform, Variants } from "framer-motion";
import Container from "@components/container";
import { useEffect, useState } from "react";
import cn from "classnames";
function LoadImage({
  refItem,
  index,
  length,
}: {
  refItem: any;
  index: number;
  length: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardVariants: Variants = {
    offscreen: {
      opacity: index === 0  ? 1 : 0,
      y: 0,
    },
    onscreen: {
      opacity: 1,
      y: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const threshold = windowHeight / 2; // Adjust the threshold as needed
  
    if (scrollPosition > threshold) {
      setActiveIndex(activeIndex + 1);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);
  return (
    <>
      <motion.div
        className='md:sticky top-12 md:top-[20vh] md:h-[100vh] h-[50vh]'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: false, amount: 0.8, margin: "0% 0px 0% 0px" }}
      >
        <div className='flex justify-center items-center '>
          <motion.div className='bg-[#09071B]' variants={cardVariants}>
            <Image
              className='rounded-lg'
              width={572}
              height={646}
              src={refItem.imageSrc}
              alt='Talent pool'
            />
          </motion.div>
        </div>
      </motion.div>
      <div>
        <div>
          <div 
            className={cn( "h-[100vh] flex justify-center items-end px-5 md:px-12")}>
            <div className='bg-[#020013] text-white '>
              <div className='flex flex-col gap-4 text-[#908E9F]'>
                <h2 className='text-[#C3C2CB] pb-4 text-[18px] md:text-[22px] font-medium  md:font-semibold '>
                  {refItem.title}{" "}
                </h2>
                {refItem.keyPoints.map((keyPoint: any, keyIndex: any) => (
                  <div className='flex items-start gap-2' key={keyIndex}>
                    <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] flex-shrink-0 mt-1'>
                      <Image
                        width={24}
                        height={24}
                        layout='responsive'
                        src='/images/home/tic-icon.svg'
                        alt='Check icon'
                      />
                    </div>
                    <p className='text-[14px] md:text-[18px]'>{keyPoint} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={index == length - 1 ? "md:h-[50vh]" : ""}></div>
      </div>
    </>
  );
}
const HowItWorks = () => {
  const features = [
    {
      show: true,
      title: "AI Powered Resume",
      imageSrc: "/images/home/ipad/UnifiedDeveloperProfile.png",
      keyPoints: [
        "Create your 360' developer profile enriched by AI, in few clicks.",
        "Include interactive pre-screening reports for potential employers.",
        "Showcase your skills, experience, assessments and standout instantly.",
      ],
    },
    {
      show: false,
      title: "Audio-Video Cover Letter",
      imageSrc: "/images/home/ipad/VideoCoverLetter.png",
      keyPoints: [
        "Personalize video or audio cover letters for impactful communication.",
        "Seamlessly integrate them into your profile for a unique introduction.",
        "Enhance your chances by showcasing your communication skills visually.",
      ],
    },
    {
      show: false,
      title: "Jobs Board with Interview Pipeline ",
      imageSrc: "/images/home/ipad/VerifiedCompanyProfile.png",
      keyPoints: [
        "Discover matching jobs based on your preferences and qualifications. ",
        "Visualize and manage interviews and job prospects effectively.",
        "Enjoy an intuitive and user-friendly interface.",
      ],
    },
    {
      show: false,
      title: "Verified Company Profiles",
      imageSrc: "/images/home/ipad/JobBoard.png",
      keyPoints: [
        "Dive deep into verified company profiles for in-depth insights.",
        "Access upfront salary info, tech stack details, and more.",
        "Make informed decisions about employers in your job search.",
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(features);
  useEffect(() => {
    showSlide();
  }, [currentIndex]);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [100, 0, -100], [0, 1, 0]);
  const handleDrag = (
    _: any,
    { offset }: { offset: { x: number; y: number } },
  ) => {
    x.set(offset.x);
  };
  const handleDragEnd = (_:any, { offset, velocity }: { offset: { x: number; y: number }; velocity: { x: number; y: number } }) => {
    const swipeThreshold = 100;
    const isSwiped = Math.abs(offset.x) > swipeThreshold;
  
    if (isSwiped) {
      if (offset.x < 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
      }
    }
  
    // Reset swipe position and velocity
    x.set(0);
  
    // Animate the scroll position to the new slide
    animate(x, 0, { type: "spring", stiffness: 500, damping: 30 });
  };
  const showSlide = () => {
    const updatedSlides = slides.map((slide, index) => ({
      ...slide,
      show: index === currentIndex,
    }));
    setSlides(updatedSlides);
  };
  return (
    <section className='md:pt-[100px] pt-[72px]'>
      <Container>
        <div className='flex flex-col items-center md:pb-[72px] pb-[40px]'>
          <p className='green-label'>FEATURES</p>
          <h1 className='heading pt-2 md:w-[651px] text-center'>
          Say Goodbye to all your remote job search hassles and freelance uncertainities
          </h1>
        </div>
        <div className='md:grid md:grid-cols-2 hidden '>
          {features.map((item, index) => (
            <LoadImage
              refItem={item}
              key={index}
              index={index}
              length={features.length}
            />
          ))}
        </div>
        {/* mobile device slider  */}
        <div className='min-w-screen  pb-[40px] flex items-center justify-center md:hidden '>
          <div className='w-full mx-auto '>
            <div className='overflow-hidden relative'>
              <motion.div
                className='overflow-hidden relative cursor-grab'
                style={{ x, opacity }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5} // Resistance to the drag movement
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
              >
                {slides.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`w-full overflow-hidden ${
                      item.show ? "" : "hidden"
                    }`}
                  >
                    <div className=' h-[300px] '>
                      <div className=' text-white '>
                        <div className='flex flex-col gap-4 text-[#C3C2CB]'>
                          <h2 className='text-white pb-4 text-[18px] md:text-[22px] font-medium  md:font-semibold '>
                            {item.title}{" "}
                          </h2>
                          {item.keyPoints.map(
                            (keyPoint: any, keyIndex: any) => (
                              <div
                                className='flex items-start gap-2'
                                key={keyIndex}
                              >
                                <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] flex-shrink-0 mt-1'>
                                  <Image
                                    width={24}
                                    height={24}
                                    layout='responsive'
                                    src='/images/home/tic-icon.svg'
                                    alt='Check icon'
                                  />
                                </div>
                                <p className='text-[14px] md:text-[18px]'>
                                  {keyPoint}{" "}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center mb-[40px] '>
                      <Image
                        className='rounded-lg p-2 '
                        width={302}
                        height={319}
                        src={item.imageSrc}
                        alt='Talent pool'
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className='flex justify-center'>
              {slides.map((item: any, index: any) => (
                <span
                  key={index}
                  id={`slideDot${index}`}
                  className={` h-2 rounded-full mx-1 ${
                    index === currentIndex
                      ? " w-4 bg-indigo-500"
                      : " w-2 bg-gray-200"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HowItWorks;