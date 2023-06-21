import Container from "@components/container";
import Image from "next/image";
import { useEffect, useState } from "react";

const TESTIMONIALS: {
  name: string;
  company: string;
  content: string;
  image: string;
}[] = [
  {
    name: "Founders",
    company: "Bamboo Labs Inc., California ",
    content: "AppExert proactively guided us to adding developers adhoc with the right expertise at the right time and more importantly, the right amount of time. This flexibility allowed us to get some of the best talent for important roles without needing to spend the overhead for a full time hire. The developers we’ve been working with at AppExert are some of the best, but more importantly, are extremely comfortable with products that are closer to ideation stage.",
    image: "/images/bamboo.png",
  },
  {
    name: "Co-Founder | CTO",
    company: "GoMaterials",
    content: "When building our tech team and software application, we often have trouble hiring tech talents and are in shortage of resources during certain periods. AppExert helped us a lot in these situations. We used different ways to work together, AppExert did great in both managing the remote development team to finish tasks and finding qualified tech talents as a remote hiring platform. We are really enjoyed their quick and professional service!",
    image: "/images/go-material.png",
  },
  {
    name: "Vice President",
    company: "Sekure Merchant Solutions",
    content: "In my experience, I have tried various offshore & freelance models in the past but most of the times it was a pain. I am happy to say we finally hired Senior Remote Developers from AppExert and they’ve worked closely with us throughout the process, staying on task, on target, and on budget. We have dedicated developers working hand-in-hand with the rest of the teams. It’s certainly feel like having our own distributed team. I am really impressed!",
    image: "/images/sekure.png",
  },
];

const TestimonialsClients = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isTestimonialActive, setIsTestimonialActive] = useState(true);
  useEffect(() => {
    setIsTestimonialActive(true);
    const interval = setInterval(() => {
      setIsTestimonialActive(true);
      setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
      setTimeout(() => setIsTestimonialActive(false), 9700); // wait for fade-out animation to finish before resetting
    }, 10000);

    return () => clearInterval(interval);
  }, [activeTestimonialIdx]);

  const next = () => {
    setIsTestimonialActive(true);
    setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
  };
  const prev = () => {
    setIsTestimonialActive(true);
    setActiveTestimonialIdx(
      (activeTestimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section className='py-16 bg-light-gray'>
      <Container>
        <div className='text-center pb-6'>
          <p className='section-preheading pb-2 '>
            {"Our team of remote developers is trusted by companies of all sizes"}
          </p>
          <div className='section-heading inline relative'>
            Customers Story
            <span className='w-40 border-b-4 border-brand-500 block mt-2 absolute left-0 md:block'></span>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center cursor-pointer' onClick={prev}>
            <Image
              width={50}
              height={50}
              src='/images/home/gif/arrow-left.gif'
              alt='left'
            />
          </div>

          <div
            className={`md:mx-40 mx-3 w-full testimonial-wrapper ${
              isTestimonialActive ? "" : "fade-out"
            }`}
          >
            <div className='relative'>
              <p className='section-preheading h-[280px] md:h-[200px] lg:h-[100px] md:mb-4'>
                {TESTIMONIALS[activeTestimonialIdx].content}
              </p>
            </div>

            <div className='flex gap-4 items-center mt-8 md:mt-0 justify-center'>
              <div className='w-[4rem] h-[4rem] relative rounded-full '>
                <Image
                  src={TESTIMONIALS[activeTestimonialIdx].image}
                  layout='fill'
                  alt='developer image'
                  objectFit='cover'
                  unoptimized={true}
                  objectPosition={"top"}
                  className='shadow-md rounded-full'
                />
              </div>
              <div className='w-[50%] lg:w-[25%]'>
                <p className='font-semibold'>
                  {TESTIMONIALS[activeTestimonialIdx].name}
                </p>
                <p>{TESTIMONIALS[activeTestimonialIdx].company}</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center cursor-pointer' onClick={next}>
            <Image
              width={50}
              height={50}
              src='/images/home/gif/arrow-right.gif'
              alt='right'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsClients;
