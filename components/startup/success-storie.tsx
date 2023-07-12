import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Container from "@components/container";
import Image from "next/image";
import { useEffect, useState } from "react";

const TESTIMONIALS: {
  name?: string;
  company?: string;
  content?: string;
  image?: string;
  role?: string;
  width?: string;
  height?: string;
}[] = [
  // {
  //   name: "Founders",
  //   company: "Bamboo Labs Inc., California ",
  //   content: "AppExert proactively guided us to adding developers adhoc with the right expertise at the right time and more importantly, the right amount of time. This flexibility allowed us to get some of the best talent for important roles without needing to spend the overhead for a full time hire. The developers we’ve been working with at AppExert are some of the best, but more importantly, are extremely comfortable with products that are closer to ideation stage.",
  //   image: "/images/bamboo.png",
  // },
  // {
  //   name: "Co-Founder | CTO",
  //   company: "GoMaterials",
  //   content: "When building our tech team and software application, we often have trouble hiring tech talents and are in shortage of resources during certain periods. AppExert helped us a lot in these situations. We used different ways to work together, AppExert did great in both managing the remote development team to finish tasks and finding qualified tech talents as a remote hiring platform. We are really enjoyed their quick and professional service!",
  //   image: "/images/go-material.png",
  // },
  {
    name: "Kunsheng Zhao",
    role: "Co-Founder",
    company: "GoMaterials",
    content: "“When building our tech team and software application, we often have trouble hiring techtalents and are in shortage of resources during certain periods. AppExert did great in bothmanaging the remote development team to finish tasks and finding qualified tech talents as a remote hiring platform. We really enjoyed their quick and professional service!”",
    image: "/images/startup/GoMaterials.svg",
    width: "153px",
    height: "24px",
  },
  {
    name: "Jenny WilsonTony Nero",
    role: "Vice President",
    company: "Information Technology, Sekure",
    content: "“In my experience, I have tried various offshore & freelance models in the past but most ofthe times it was a pain. I am happy to say we finally hired Senior Remote Developers fromAppExert and they’ve worked closely with us throughout the process, staying on task, ontarget, and on budget. It’s certainly feel like having our own distributed team. I am really impressed!”",
    image: "/images/startup/sekure1.svg",
    width: "118px",
    height: "36px",
  },
  {
    name: "Litmus - VP",
    role: "Vice President",
    company: "litmus",
    content: "“AppExert is a primary reason that litmus exists today and is able to create interactive learning experiences for thousands of students. AppExert proactively guided us to adding developers adhoc with the right expertise at the right time and more importantly, the right amount of time. This flexibility allowed us to get some of the best talent for important roles without needing to spend the overhead for a full-time hire.”",
    image: "/images/startup/litmus.svg",
    width: "133px",
    height: "48px",
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
    <section className='py-6  w-full overflow-visible rounded-md mb-4'>
      <div className='flex flex-col justify-center items-center text-center pb-[72px]'>
        <h1 className='heading pt-2 md:w-[800px]'>Startup Success Stories</h1>
        <p className='landing-para md:text-[18px] pt-[16px]'>
          We work with some interesting startups backed by leading VCs &
          accelerators
        </p>
      </div>

      <div className='flex md:flex-row flex-col gap-[32px] pt-6 px-6 md:px-12  justify-center pb-[100px]'>
        {TESTIMONIALS.filter((q) => q.name)
          .slice(0, 3)
          .map((testimonials: any) => (
            <div
              key={testimonials.name}
              className='text-center p-8 border-[0.5px] border-[#18171C] rounded-[10px] md:w-[372px] bg-[#09071B] grid grid-cols-1 gap-5'
            >
              <div className='flex justify-center'>
                <Image
                  className="py-[12px]"
                  src={testimonials.image}
                  alt='client image'
                  width={testimonials.width}
                  height={testimonials.height}
                />
              </div>

              <p className='page-para  pt-4 pb-8 text-base font-normal text-gradient'>
                {testimonials.content}
              </p>
              <div className=''>
                <p className='text-[#E4E4E4] font-medium text-base '>
                  {testimonials.name}
                </p>
                <p className='page-para text-[#908E9F] '>{testimonials.role}</p>
              </div>
            </div>
          ))}
      </div>
    </section>

  );
};

export default SuccessStorie;
