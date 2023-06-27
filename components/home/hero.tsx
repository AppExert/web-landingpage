import Container from "@components/container";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const DEV_IMAGES = [
  "/images/home/hero-image1.png",
  "/images/home/hero-image2.png",
  "/images/home/hero-image3.png",
  "/images/home/hero-image4.png",
];

const Hero = () => {
  const startHire = `${process.env.NEXT_PUBLIC_HIRE_APP}/companies/start-hiring?step=1`;
  const devRegister = `${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`;
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((currentImageIdx + 1) % DEV_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIdx]);

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
    <>
      <section className='bg-fixed font-normal!important '>
        <Container className='px-8 md:py-8 md:flex md:justify-between v4 items-center'>
          <div className='pt-16 md:py-0 md:w-1/2'>
            <h1 className='hero-heading '>
              {"Global hiring, simplified"}
              <br />
              for{" "}
              <span className='typing-effect'>
                {text}{" "}
                <span className='blink text-brand-300 text-2xl sm:text-3xl font-light'>
                  |
                </span>
              </span>
            </h1>

            <p className='section-paragraph'>
              We help startups and growing medium sized companies to attract,
              hire and manage qualified remote developers with unmatched speed
              and flexibility.
            </p>

            <div className='flex gap-4 items-center'>
              <Link href={startHire}>
                <Button type='primary' className='btn-brand px-8 ' size='large'>
                  Hire Developers
                </Button>
              </Link>

              <Link href={devRegister}>
                <a>
                  <Button
                    type='link'
                    className='btn-brand-outline md:ml-3'
                    size='large'
                  >
                    Join as Developer
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className='relative' style={{ height: 400 }}>
              <Image
                src={"/images/home/hero.svg"}
                alt='appexert group illustration'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
