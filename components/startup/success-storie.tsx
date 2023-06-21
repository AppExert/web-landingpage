import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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
  
];

const SuccessStorie = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeTestimonialIdx]);

  const next = () => {
    setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
  };
  const prev = () => {
    setActiveTestimonialIdx(
      (activeTestimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section className='md:py-16 py-8 bg-light-gray '>
      <Container>
        <div className='text-center pb-2'>
          <p className='section-preheading pb-2 '>
            {"We work with some interesting startups backed by leading VCs & accelerators"}
          </p>
          <div className='section-heading inline relative'>
          Startup Success Stories
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <LeftOutlined
            style={{ fontSize: "1.5rem" }}
            className='cursor-pointer text-gray-500'
            onClick={prev}
          />
          <div className='md:mx-40 mx-3'>
            <div className='relative'>
              <p className='section-preheading h-[280px] md:h-[200px] lg:h-[100px]'>
                {TESTIMONIALS[activeTestimonialIdx].content}
              </p>
            </div>

            <div className='flex gap-4 items-center mt-6 justify-center '>
              <div className='w-[4rem] h-[4rem] relative rounded-full '>
                <Image
                  src={TESTIMONIALS[activeTestimonialIdx].image}
                  layout='fill'
                  alt='developer image'
                  objectFit='cover'
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
          <RightOutlined
            style={{ fontSize: "1.5rem" }}
            className='cursor-pointer text-gray-500'
            onClick={next}
          />
        </div>
      </Container>
    </section>
  );
};

export default SuccessStorie;
