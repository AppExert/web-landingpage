/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@components/container";
import { Button } from "antd";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BENEFITS } from "global/constants";

const BenefitsSection = () => {

  return (
    <>
      {BENEFITS.map((benefits: any, index) => (
        <div
          key={benefits.name}          
          className=' marquee relative  px-5 py-6  w-[168px] h-[180px] 
              rounded-lg flex flex-col justify-center items-center text-center gap-2
               border-solid border-[1px] border-[#252234]  '
        >
          <div className='flex justify-center '>
            <div className='w-[fit-content] h-[fit-content] rounded-full relative overflow-hidden p-3'>
              <div
                className='absolute inset-0  rounded-full'
                style={{
                  background: "#1B1551",
                  filter: "blur(16px)",
                }}
              ></div>
              <div className='fill-current relative '>{benefits.icon}</div>
            </div>
          </div>

          <div className='flex items-end '>
            <h3 className='font-medium text-[#E4E4E4] text-[14px] '>
              {benefits.name}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

const DevBenefits = () => {
  
  return (
    <section>
      <Container className='md:my-[100px] px-8 md:flex gap-[76px] md:text-left text-center  items-center justify-between'>
        <div className='md:py-0 content-center md:w-[552px] '>
          <p className='green-label'>PERKS AND BENEFITS</p>
          <h1 className='hero-heading pt-1 text-[24px] md:text-[40px]'>
            {
              "Get hired, and claim your AppExert+ benefits"
            }
          </h1>
          <p className='section-paragraph text-[#908E9F] py-[10px] pb-[20px] text-[18px]'>
            Size the opportunity! your job offer comes with exclusive access to AppExert+ valuable perks and rewards.
          </p>
          <div className='md:flex gap-4 items-center hidden '>
            <Link href='/benefits'>
              <Button type='primary' className='page-btn px-[16px] py-[24px]'>
                Explore all 25+ benefits
              </Button>
            </Link>
          </div>
          <div className='flex flex-col md:flex-row gap-4 text-gray-400  md:pt-[80px]'></div>
        </div>
        <div  style={{ zIndex: "2" }}>
          <div className='relative  marquee-container grid grid-cols-2 lg:grid-cols-3 w-max gap-[10px] h-[540px] overflow-hidden md:gap-6  rounded-[8px] '>
            <BenefitsSection />            
            <BenefitsSection />
            <div
              className='absolute w-full h-[112px]  '
              style={{
                background:
                  "linear-gradient(180deg, #020013 0%, rgba(2, 0, 19, 0.00) 100%)",
              }}
            ></div>
            <div
              className='absolute bottom-0 w-full h-[112px] '
              style={{
                background:
                  "linear-gradient(0deg, #020013 0%, rgba(2, 0, 19, 0.00) 100%)",
              }}
            ></div>
            
          </div>
          <div className='flex gap-4 items-center md:hidden mt-12 '>
            <Link href='/benefits'>
              <Button
                type='primary'
                className='page-btn px-[16px] py-[24px]'
              >
                Explore all 25+ benefits
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default DevBenefits;
