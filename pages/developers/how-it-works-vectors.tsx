/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { animate, motion, useMotionValue, useTransform, Variants } from "framer-motion";
import Container from "@components/container";
import { useEffect, useState } from "react";
import cn from "classnames";
import { Button } from "antd";
import Item from "antd/lib/descriptions/Item";
import Link from "next/link";
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
        <div className=' flex justify-center items-center '>
          <motion.div className=' bg-[#09071B] ' variants={cardVariants}>
            <Image
              className='rounded-lg p-2 '
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
            className={cn(
              "h-[100vh] flex justify-center items-end  px-5 md:px-12"
            )}
          >
            <div className='bg-[#020013] text-white '>
              <div className='flex flex-col gap-4 text-[#908E9F]'>
                {refItem.keyPoints.map((keyPoint: any, keyIndex: any) => (
                  <div
                    className='flex flex-col items-start gap-2'
                    key={keyIndex}
                  >
                    <div className='relative content-center mb-10 flex justify-center'>
                      <div
                        style={{
                          background: "#1B1551",
                          filter: "blur(18px)",
                          zIndex: 100,
                        }}
                        className='absolute md:w-full w-[50%] h-full mx-auto'
                      ></div>
                      <p className=' w-full h-full flex md:flex-col justify-center content-center fill-current text-[14px] md:text-[18px]'>
                        {refItem.count}{" "}
                      </p>
                    </div>
                    <h2 className='text-white pb-4 text-[18px] md:text-[22px] font-medium  md:font-semibold '>
                      {refItem.title}{" "}
                    </h2>
                    <p className='text-[14px] md:text-[18px] pb-[20px]'>{keyPoint} </p>
                    <Link href='/developerSignup'>
                    <Button type='primary' className='page-btn px-[16px] py-[24px]'>
                Join Now
                    </Button>
                    </Link>
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
      title: "Join our platform. Forever free for developers",
      imageSrc: "/images/home/ipad/Frame1.png",
      keyPoints: [
        "Get the best value for your investment. Direct connection with talent, and 100% transparency throughout the hiring processes that ensure your fulfilment."
      ],
      count: "01",
    },
    {
      show: false,
      title: "Clear our one-time screening process",
      imageSrc: "/images/home/ipad/Frame2.png",
      keyPoints: [
        "Get the best value for your investment. Direct connection with talent, and 100% transparency throughout the hiring processes that ensure your fulfilment.",
      ],
      count: "02",
    },
    {
      show: false,
      title: "Discover exciting global opportunities ",
      imageSrc: "/images/home/ipad/Frame3.png",
      keyPoints: [
        "Get the best value for your investment. Direct connection with talent, and 100% transparency throughout the hiring processes that ensure your fulfilment. ",
      ],
      count: "03",
    },
    {
      show: false,
      title: "Team up and thrive as a remote developer",
      imageSrc: "/images/home/ipad/Frame4.png",
      keyPoints: [
        "Get the best value for your investment. Direct connection with talent, and 100% transparency throughout the hiring processes that ensure your fulfilment.",
      ],
      count: "04",
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
          <p className='green-label'>HOW TO JOIN</p>
          <h1 className='heading pt-2 md:w-[651px] text-center text-[40px]'>
            Get started today in 4 easy steps
          </h1>
        </div>
        <div className='gap-[100px] md:grid md:grid-cols-2 hidden '>
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
                    <div className='flex justify-center mb-[40px] '>
                      <Image
                        className='rounded-lg p-2 '
                        width={302}
                        height={319}
                        src={item.imageSrc}
                        alt='Talent pool'
                      />
                    </div>
                    <div className=' h-[300px] '>
                      <div className=' text-white '>
                        <div className='flex flex-col gap-4 text-[#908E9F]'>
                          <div className='relative content-center flex justify-left'>
                            <div
                              style={{
                                background: "#1B1551",
                                filter: "blur(18px)",
                                zIndex: 100,
                              }}
                              className='absolute  md:w-full w-[10%] h-full mx-auto'
                            ></div>
                            <p className=' w-full h-full flex md:flex-col justify-left content-center fill-current text-[14px] md:text-[18px]'>
                              {item.count}{" "}
                            </p>
                          </div>
                          <h2 className='text-white pb-4 text-[18px] md:text-[22px] font-medium  md:font-semibold '>
                            {item.title}{" "}
                          </h2>
                          {item.keyPoints.map(
                            (keyPoint: any, keyIndex: any) => (
                              <div
                                className='flex items-start gap-10'
                                key={keyIndex}
                              >
                                <p className='text-[14px] md:text-[18px]'>
                                  {keyPoint}{" "}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                      <Button type='primary' className='page-btn'>
                Join Now
                      </Button>
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