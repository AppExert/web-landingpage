/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@components/container";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"

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
          setText(prevText => prevText + "\u00A0");
        } else {
          setText(prevText => prevText + currentChar);
        }
        letterIndex++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section  >
      <Container className='px-8 md:py-[100px] md:flex md:justify-between items-center overflow-x-hidden'>
        <div className='pt-16 md:py-0 md:w-[60%]'>
          <p className="green-label text-[14px]">START. BUILD. THRIVE</p>
          <h1 className='hero-heading pt-2 text-[40px] md:text-[48px]'>
            Securing global work opportunities for remote developers
          </h1>

          <p className='section-paragraph text-[#908E9F] text-[18px] py-[10px] pb-[20px]'>
            Join our team of talented developers and work full-time for exciting companies worldwide. Experience the happiest remote developer community in the country.
          </p>

          <div className='flex gap-4 items-center'>
            <Link href='/companies/start-hiring?step=1'>
              <Button
                type='primary'
                className='page-btn px-[16px] py-[24px]'
              >
                Get started for free
              </Button>
            </Link>
          </div>

          <div className='flex flex-col md:flex-row gap-4 text-gray-400 pt-[48px] md:pt-[80px]'>

            <div className="flex items-start gap-2 ">
              <div className="flex w-[18px] h-[18px] flex-shrink-0">
                <Image
                  width={18}
                  height={18}
                  src={"/images/home/tic-icon.svg"}
                  alt="Check icon"
                />
              </div>
              <p className="-mt-1">
                Global oppurtunities on tap
              </p>
            </div>
            <div className="flex items-start gap-2 ">
              <div className="flex w-[18px] h-[18px] flex-shrink-0">
                <Image
                  width={18}
                  height={18}
                  src={"/images/home/tic-icon.svg"}
                  alt="Check icon"
                />
              </div>
              <p className="-mt-1">
                Streamlined job matching
              </p>
            </div>
            <div className="flex items-start gap-2 ">
              <div className="flex w-[18px] h-[18px] flex-shrink-0">
                <Image
                  width={18}
                  height={18}
                  src={"/images/home/tic-icon.svg"}
                  alt="Check icon"
                />
              </div>
              <p className="-mt-1">
                Backend 100% by our community
              </p>
            </div>

          </div>
        </div>
        <div className='md:w-[40%] md:flex hidden justify-end  '>
          <motion.div className='w-[400px] h-[400px] flex-shrink-0' style={{ height: 400 }}  
            initial={{ opacity: 0, scale: 0  }}
            whileInView={{ opacity: 1,   scale: [ 2, 2, 1, 1] ,
              x: [300 , 300 , 0, 0] ,
              y: [-300 , -300 , 0 , 0 ] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              width={400}
              height={400}
              src={"/images/herodevimg.svg"}
              alt='hero developer image'
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
