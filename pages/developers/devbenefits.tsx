/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@components/container";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { icons } from "global/constants";
const BenefitsSection = () => {
  return(
    <>
      {icons.map(
        (benefits: any, index) =>
          index < 15 && (
            <div
              key={benefits.name}
              className='relative flex items-stretch w-full h-[200px] px-5 py-6 overflow-hiddden rounded-br-lg rounded-bl-lg rounded-tr-lg rounded-tl-lg grid gap-2 marquee text-left border-solid border-2 border-[#252234]  '
            >
              <div
                style={{
                  background: "#1B1551",
                  filter: "blur(18px)",
                }}
                className='absolute w-[35%] h-[25%] top-4'
              ></div>
              <p className=' w-full flex md:flex-col z-50 content-center fill-current'>
                {benefits.icon}
              </p>
              <div className="flex items-end">
                <h3 className='font-medium text-[#E4E4E4] text-[14px] '>
                  {benefits.name}
                </h3>
              </div>
            </div>
          )
      )}
    </>)
}
const Hero = () => {
  const [text, setText] = useState("");
  
  
  useEffect(() => {
    const words = ["startups and SMBs"];
    let wordIndex = 0;
    let letterIndex = 0;
    let interval: any = null;
    interval = setInterval(() => {
      if (letterIndex === words[wordIndex].length) {
        if (wordIndex === words.length - 1) {
          clearInterval(interval);
          return;
        }
        setTimeout(() => {
          wordIndex++;
          letterIndex = 0;
          setText("");
        }, 1000);
      } else {
        const currentChar = words[wordIndex][letterIndex];
        if (currentChar === " ") {
          setText((prevText) => prevText + "\u00A0");
        } else {
          setText((prevText) => prevText + currentChar);
        }
        letterIndex++;
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <Container className='px-8 md:flex gap-[76px] md:text-left text-center  items-center overflow-x-hidden'>
        <div className='mt-[100px] md:py-0 content-center md:w-[60%] '>
          <p className='green-label'>BENEFITS</p>
          <h1 className='hero-heading pt-1 text-[24px] md:text-[40px]'>
            {"Get hired to one of our teams and you'll unlock an AppExert+Benefits"}
          </h1>
          <p className='section-paragraph text-[#908E9F] py-[10px] pb-[20px] text-[18px]'>
            Simplify hiring and reduce administartive burdens with our
            innovative EOR model, ensuring compliance and peace of mind and
            enjoy 100% ownership.
          </p>
          <div className='md:flex gap-4 items-center hidden '>
            <Link href='/companies/start-hiring?step=1'>
              <Button type='primary' className='page-btn px-[16px] py-[24px]'>
                Unlock all 25+ benefits
              </Button>
            </Link>
          </div>
          <div className='flex flex-col md:flex-row gap-4 text-gray-400  md:pt-[80px]'></div>
        </div>
        <div className='md:w-[50%] md:flex justify-end  '>
          <div className='relative md:my-[100px] ' style={{ zIndex: "2" }}>
            <div className='relative grid grid-cols-2 lg:grid-cols-3  gap-[10px] h-[540px] overflow-hidden md:gap-6 gap-4 rounded-[8px]'>
              <BenefitsSection/>
              <BenefitsSection/>
              <div
                className='absolute w-full h-[112px]  '
                style={{
                  background:
               "linear-gradient(180deg, #020013 0%, rgba(2, 0, 19, 0.00) 100%)",
                }}
             ></div>
              <div
                className='absolute bottom-0 w-full h-[112px]  '
                style={{
                  background:
               "linear-gradient(0deg, #020013 0%, rgba(2, 0, 19, 0.00) 100%)",
                }}
              ></div>  
            </div>
          </div>
          <div className='flex gap-4 items-center md:hidden '>
            <Link href='/companies/start-hiring?step=1'>
              <Button
                type='primary'
                className='page-btn px-[16px] py-[24px]'
              >
                Unlock all 25+ benefits
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;