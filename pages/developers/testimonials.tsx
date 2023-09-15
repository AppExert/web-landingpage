
import Container from "@components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const REASONS: {
  content: string;
  name: string;
  designation: string;
  image: string;
}[] = [
  {
    content:
      "I really like that I can have all in one place:I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website. ",
    name: "Kunsheng Zhao ",
    designation: "",
    image: "/images/gif/arindam-testimonial.gif",
  },
];

const testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section className='md:py-[100px] py-[48px]'>
      <Container>
        <div>
          <div className='grid md:grid-cols-1 grid-cols-1  '>
            {REASONS.map((reason, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                initial={{ backgroundColor: "#09071B" }}
                animate={{
                  backgroundColor:
                    hoveredIndex === index ? "rgb(5 2 38)" : "#09071B",
                  cursor: "pointer",
                }}
                transition={{ duration: 0.3 }}
                className='p-[24px] rounded-[8px] md:w-[1000px]  m-auto h-auto w-auto '
              >
                <div className='grid md:grid-cols-2 gap-4   '>
                  <div className='flex flex-col justify-between'>
                    <div>
                      <Image
                        width={40}
                        height={40}
                        src={"/images/home/ipad/quotation.svg"}
                        alt='quotation'
                      />
                      <h3 className='text-white mt-[24px] mb-[16px] text-[18px] md:text-[22px]  cursor-pointer'>
                        {reason.content}
                      </h3>
                    </div>

                    <div>
                      <p className='text-gray-400 text-[16px] md:text-[18px] cursor-pointer'>
                        {reason.name}
                      </p>
                      <p className='text-gray-400 text-[16px] md:text-[18px] cursor-pointer'>
                        {reason.designation}
                      </p>
                    </div>
                  </div>
                  <Image
                    width={380} 
                    height={380}
                    src={reason.image} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default testimonials;
