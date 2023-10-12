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
    title: "streamlined remote hiring",
    content: "Save time and effort with our curated job listings and verified company profiles, so you can focus on discovering, landing your dream remote job faster.",
    image: "/images/home/reason/reason1.svg",
  },
  {
    title: "Guidance at your side",
    content: "Your dedicated developer success advisor is your co-pilot, ensuring you make the right career moves in the complex world of remote work.",
    image: "/images/home/reason/reason2.svg",
  },
  {
    title: "Personalised opportunities",
    content: "Choose from diverse companies spanning North America, each aligning with your preferences, whether it's industry, company type, or even time zone.",
    image: "/images/home/reason/reason3.svg",
  },
  {
    title: "Escape Freelance Chaos",
    content: "Trade uncertanity for security. Leave freelance unpredictability behind and embrace a stable, long-term, fulfilling remote career path.",
    image: "/images/home/reason/reason4.svg",
  },
  {
    title: "Sense of Inclusion ",
    content: "Say goodbye to the locked up structure of IT service companies where you are only a vendor or contractor. Our fultime EOR model is designed to let your voice be heard.",
    image: "/images/home/reason/reason5.svg",
  },
  {
    title: "Team that lifts you up",
    content: "Access a suite of 10+ powerful remote work tools, resources, activities to not only survive but thrive in the remote work landscape.",
    image: "/images/home/reason/reason6.svg",
  },

];

const WhyChooseAppExert = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section className="md:py-[270px] py-[100px]">
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center md:pb-[72px] pb-[40px]">
            <p className="green-label">WHY APPEXERT</p>
            <h1 className="heading pt-2 md:w-[700px] text-center">
              More Compelling reasons to choose us to transform your remote dev journey</h1>
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
