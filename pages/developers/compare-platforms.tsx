import Container from "@components/container";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const ComparePlatforms = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCircleExpanded, setIsCircleExpanded] = useState(false);
  const hide = {
    opacity: 0,
    display: "none",
    transition: {
      duration: 2,
    },
  };
  const show = {
    opacity: 1,
    display: "block",
    transition: {
      duration: 3,
    },
  };
  const handleClick = () => {
    setIsCircleExpanded(isVisible);
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(!isVisible);
      setIsAnimating(false);
    }, 100);
  };
  const circleVariant = {
    expanded: {
      width: "900px",
      height: "900px",
      borderRadius: 0,
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };
  const [activeItem, setActiveitem] = useState(0);
  const items = [
    {
      title: <div className="flex items-center gap-x-[4px] ">
        <div className="flex-shrink-0 w-[24px] h-[24px] ">
          <Image
            width={24}
            height={24}
            src={"/images/home/x.svg"}
            alt='Check icon'
          />
        </div>
        {" "}
        Without AppExert
      </div>
    },
    {
      title: <div className="flex items-center gap-x-[4px]">
        <div className="flex-shrink-0 w-[24px] h-[24px] ">
          <Image
            width={24}
            height={24}
            src={"/images/home/tic.svg"}
            alt='Check icon'
          />
        </div>
        {" "}
        With AppExert
      </div>
    }
  ]
  return (
    <section className="py-[48px] " >
      <Container>
        <div className='flex flex-col justify-center items-center pb-[32px] md:pb-[38px]'>
          <p className='green-label uppercase text-[14px]'>making a difference</p>
          <h1 className='heading pt-2 md:w-[651px] text-center'>
          Find remote opportunities, tailored just for you.
          </h1>
        </div>
        <div className='relative overflow-hidden'>
          {isCircleExpanded && (
            <><motion.div
              initial="initial"
              animate='expanded'
              variants={circleVariant}
              className='absolute flex top-[62%] justify-center  left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-[#0FAC98] rounded-full ' />
            <motion.div /></>)}
          <div className='flex justify-center pt-[32px] md:pb-[56px] pb-[32px]'>
            <LayoutGroup>
              <div className="flex justify-center bg-[#1B182A] rounded-[32px] p-[6px] text-[16px] text-white font-medium">
                {items.map((item, i) => {
                  const isActive = i === activeItem;
                  return (
                    <motion.div
                      whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
                      key={i}
                    >
                      <button
                        onClick={() => {
                          setActiveitem(i),
                          handleClick()
                        }}
                        type="button"
                        disabled={i === activeItem}
                        className="relative m-0 p-[12px] pr-[18px] bg-transparent border-none outline-none cursor-pointer"
                      >
                        {isActive && (
                          <motion.div
                            layoutId="SegmentedControlActive"
                            className={i === 0 ? "border-[#FF5C5C] drop-shadow-[0_32px_50px_rgba(255,92,92,0.08)] absolute inset-0 z-10 border-[0.5px] drop-shadow-[0_32px_50px_rgba(15,172,152,0.08)] bg-[#FFF5F51A] rounded-[24px] shadow-md" : "border-[#0FAC98] absolute inset-0 z-10 border-[0.5px] bg-[#FFF5F51A] rounded-[24px] shadow-md"}
                          />
                        )}
                        <div className="relative z-20 md:text-[16px] text-[12px] font-medium">{item.title}</div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className='flex flex-col md:flex-row justify-between md:items-center pl-7 md:pl-0 md:my-6 text-[#E4E4E4] md:text-[22px] text-[14px] font-medium'
          >
            <div className='md:w-[400px]'>
              <AnimatePresence>
                {isVisible ? (
                  <motion.div
                    initial={hide}
                    animate={show}
                    exit={hide}
                    key='visible-content'
                    transition={{ duration: 2 }}
                  >
                    <div className='flex items-center '>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                      <p className='text-[#E4E4E4]'>Battling with long daily commutes</p>
                    </div>
                    <div className='flex items-center md:gap-2 md:my-[100px] '>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                      <span className='text-[#E4E4E4]'>
                      Being away from loved ones
                        <br className="md:block hidden"/>
                       for work
                      </span>
                    </div>
                    <div className='flex items-center md:gap-2'>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                      <p className='text-[#E4E4E4]'>
                      Full-time 100% remote work {" "}
                        <br className="md:block hidden"/>
                        are hard finds
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={hide}
                    animate={show}
                    exit={hide}
                    key='hidden-content'
                    transition={{ duration: 2 }}
                  >
                    <div className='flex items-center md:gap-2'>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/green-pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                      <p className='text-[#E4E4E4]'>No more long daily 
                        <br className="md:block hidden"/>
                      commutes.</p>
                    </div>
                    <div className='flex items-center md:gap-2 md:my-[100px] '>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/green-pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                      <span className='text-[#E4E4E4]'>
                      Stay closer to elderly parents 
                        <br className="md:block hidden"/>
                      and family
                      </span>
                    </div>
                    <div className='flex items-center md:gap-2'>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/green-pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                      <p className='text-[#E4E4E4]'>
                      Cultivate high-paying, remote 
                        <br className="md:block hidden"/>
                      fulltime careers
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.div
              whileHover={{
                image: "/images/home/Processorintermidiategreen.png",
              }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handleClick(),
                setActiveitem(activeItem === 1 ? 0 : 1)
              }}
              className="md:w-[300px] md:h-[300px] -my-10 md:my-0 w-[200px] h-[200px] cursor-pointer hidden md:block"
            >
              <Image
                width={300}
                height={300}
                src={activeItem === 1 ? "/images/home/Processoraftergreen.png" : "/images/home/Processorbeforegreen.png"}
                alt='Check icon'
              />
            </motion.div>
            <div className='md:w-[400px]'>
              <AnimatePresence>
                {isVisible ? (
                  <motion.div
                    initial={hide}
                    animate={show}
                    exit={hide}
                    key='visible-content'
                    transition={{ duration: 2 }}
                  >
                    <div className='flex md:flex-row flex-row-reverse items-center justify-end md:gap-2 '>
                      <p className='text-[#E4E4E4] md:text-right text-left'>
                      Making career sacrifices to 
                        <br className="md:block hidden"/>
                      prioritize childcare
                      </p>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                    </div>
                    <div className='flex md:flex-row flex-row-reverse items-center justify-end md:gap-2 md:my-[100px] '>
                      <p className='text-[#E4E4E4] md:text-right text-left'>
                      Surging costs of living with 
                        <br className="md:block hidden"/>
                      metro relocation
                      </p>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                    </div>
                    <div className='flex md:flex-row flex-row-reverse  items-center md:gap-2 justify-end'>
                      <p className='text-[#E4E4E4] md:text-right text-left'>
                      Tired of burnouts as
                        <br className="md:block hidden"/>
                       freelancers
                      </p>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={hide}
                    animate={show}
                    exit={hide}
                    key='hidden-content'
                    transition={{ duration: 2 }}
                  >
                    <div className='flex md:flex-row flex-row-reverse items-center justify-end md:gap-2'>
                      <p className='text-[#E4E4E4] text-right'>
                      Balance career and family 
                        <br className="md:block hidden"/>
                      effortlessly
                      </p>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/green-pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                    </div>
                    <div className='flex md:flex-row flex-row-reverse items-center justify-end md:gap-2 md:my-[100px] '>
                      <p className='text-[#E4E4E4] text-right'>
                      Slash living expenses
                        <br className="md:block hidden"/>
                       by half
                      </p>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/green-pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                    </div>
                    <div className='flex md:flex-row flex-row-reverse items-center md:gap-2 justify-end'>
                      <p className='text-[#E4E4E4] md:text-right text-left'>
                      Thrive in a supportive developer community
                      </p>
                      <div className='md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex-shrink-0'>
                        <Image
                          width={60}
                          height={60}
                          src={"/images/home/green-pointer.svg"}
                          alt='Check icon'
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
export default ComparePlatforms;