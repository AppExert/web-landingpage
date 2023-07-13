import Image from "next/image";
import Container from "@components/container";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS: {
  name: string;
  company: string;
  content: string;
  image: string;
  width: string;
}[] = [
  {
    name: "Co-founder & CTO",
    company: "gomaterials ",
    content: "When building our tech team and software application, we often have trouble hiring tech talents and are in shortage of resources during certain periods. AppExert did great in both managing the remote development team to finish tasks and finding qualified tech talents as a remote hiring platform. We really enjoyed their quick and professional service!",
    image: "/images/home/brand-icons/logo_gomaterial.svg",
    width: "153px",
  },
  {
    name: "VP, IT & Engineering",
    company: "sekure",
    content: "In my experience, I have tried various offshore & freelance models in the past but most of the times it was a pain. I am happy to say we finally hired Senior Remote Developers from AppExert and they’ve worked closely with us throughout the process, staying on task, on target, and on budget. It’s certainly feel like having our own distributed team. I am really impressed!",
    image: "/images/home/brand-icons/logo_sekure.svg",
    width: "118px",
  },
  // {
  //   name: "Vice President",
  //   company: "oproma",
  //   content: "AppExert is a primary reason that litmus exists today and is able to create interactive learning experiences for thousands of students. AppExert proactively guided us to adding developers adhoc with the right expertise at the right time and more importantly, the right amount of time. This flexibility allowed us to get some of the best talent for important roles without needing to spend the overhead for a full-time hire",
  //   image: "/images/home/brand-icons/logo_oproma.svg",
  //   width: "134px",
  // },
  {
    name: "Founder & CEO",
    company: "litmus",
    content: "AppExert is a primary reason that litmus exists today and is able to create interactive learning experiences for thousands of students. AppExert proactively guided us to adding developers adhoc with the right expertise at the right time and more importantly, the right amount of time. This flexibility allowed us to get some of the best talent for important roles without needing to spend the overhead for a full-time hire",
    image: "/images/home/brand-icons/logo_litmus.svg",
    width: "133px",
  },
  // {
  //   name: "Vice President",
  //   company: "wandrian",
  //   content: "AppExert is a primary reason that litmus exists today and is able to create interactive learning experiences for thousands of students. AppExert proactively guided us to adding developers adhoc with the right expertise at the right time and more importantly, the right amount of time. This flexibility allowed us to get some of the best talent for important roles without needing to spend the overhead for a full-time hire",
  //   image: "/images/home/brand-icons/logo_wandrian.svg",
  //   width: "140px",
  // },
];
const TestimonialsClients = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
      }
    }, 3000);

    const container = document.getElementById("testimonials-container");

    const handleMouseEnter = () => {
      setIsHovered(true);
      clearInterval(interval);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    container?.addEventListener("mouseenter", handleMouseEnter);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [TESTIMONIALS.length, isHovered]);

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  const handleImageClick = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <section className="md:pb-[100px] pb-[48px]">
      <Container className="flex flex-col justify-center items-center text-center">
        <div className="mb-[24px] ">
          <Image width={46} height={32} src={"/images/home/quote.svg"} alt="Check icon" />
        </div>

        <div className="flex flex-col justify-center md:max-w-[810px] overflow-hidden "  >
          <div id="testimonials-container"  className=" md:h-[350px] h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="pb-[68px] "
              key={currentTestimonialIndex}
            >
              <motion.p
                className="text-text-gray pb-[24px] md:text-[26px] text-[22px] font-medium "
              >
                “{currentTestimonial.content}”
              </motion.p>
              <motion.p
                className="text-white text-[18px]"
              >
                {currentTestimonial.name}
              </motion.p>
            </motion.div>
          </div>


          <div className="flex flex-col  md:flex-row justify-center items-center mt-[10px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index}
                className={`flex cursor-pointer px-[12px] w-max ${testimonial.company === currentTestimonial.company ? "md:border-t-[2px] block " : "md:block hidden md:border-t-[1px] border-[#26252C]"}`}
              >

                <motion.div
                  className="mt-2"
                  onClick={() => handleImageClick(index)}
                  initial={{ scale: 1 }}
                  animate={{
                    // scale: testimonial.company === currentTestimonial.company ? 1.2 : 1 ,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.company}
                    width={testimonial.width}
                    height="48"
                  />
                </motion.div>
              </div>

            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsClients;

