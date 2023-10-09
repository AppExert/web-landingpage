import Container from "@components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const REASONS: {
  title: string;
  content: string;
  image: string;
}[] = [
  {
    title: "Hire 5x faster with AI powered interviews",
    content: "Get ahead of the competition with our AI-powered hiring process, enabling you to identify and onboard top talent in a fraction of the time.",
    image: "/images/home/reason/reason1.svg",
  },
  {
    title: "Discover 100% flexibility with our remote EOR model",
    content: "Simplify hiring and reduce administrative burdens with our innovative EOR model, ensuring compliance and peace of mind and enjoy 100% ownership",
    image: "/images/home/reason/reason2.svg",
  },
  {
    title: "Maximize interview-to-hire ratio by at-least 3x",
    content: "Boost up your Interview-to-Hire ratio at the same time achieve minimal candidate dropouts with our optimised process.",
    image: "/images/home/reason/reason3.svg",
  },
  {
    title: "No more gambling on freelance platforms",
    content: "Eliminate the risks associated with hiring freelancers by hiring dedicated qualified professionals in AppExert to ensure reliability and stability",
    image: "/images/home/reason/reason4.svg",
  },
  {
    title: "Take advantage of our fair price guarantee",
    content: "Get the best value for your investment. Direct connection with talent, and  100% transparency throughout the hiring processes that ensure your fulfilment.",
    image: "/images/home/reason/reason5.svg",
  },
  {
    title: "Lead the remote work best practices like a champ",
    content: "Stay ahead of the curve and tap into our expertise in remote work, leveraging our industry-leading best practices for seamless collaboration and productivity.",
    image: "/images/home/reason/reason6.svg",
  },

];

const WhyChooseAppExert = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section className="md:py-[200px] py-[48px]">
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center md:pb-[72px] pb-[40px]">
            <p className="green-label">WHY APPEXERT</p>
            <h1 className="heading pt-2 md:w-[700px] text-center">
              More reasons to choose us to help you gain unmatched hiring capabilities</h1>
          </div>
          <div
            className="grid md:grid-cols-3 grid-cols-1 gap-[48px] ">
            {REASONS.map((reason, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                initial={{ backgroundColor: "#09071B" }}
                animate={{
                  backgroundColor: hoveredIndex === index ? "rgb(5 2 38)" : "#09071B",
                  cursor: "pointer"
                }}
                transition={{ duration: 0.3 }}
                className="p-[24px] rounded-[8px]"
              >
                <div className="w-[160px] h-[160px]  -my-12 -ml-12">
                  <Image
                    width={160}
                    height={160}
                    src={reason.image}
                    alt={reason.title}
                  />
                </div>

                <h3 className="text-white mt-[24px] mb-[16px] text-[18px] md:text-[22px]  font-semibold cursor-pointer">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-[16px] md:text-[18px] cursor-pointer">
                  {reason.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseAppExert;
