import Container from "@components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import cn from "classnames";

const logos: { name: string; path: string; className?: string }[] = [
  {
    name: "walmart",
    path: "/images/home/brand-icons/logo_walmart.svg",
  },
  {
    name: "spotify",
    path: "/images/home/brand-icons/logo_spotify.svg",
  },
  {
    name: "intuit",
    path: "/images/home/brand-icons/logo_intuit.svg",
  },
  {
    name: "atlassian",
    path: "/images/home/brand-icons/logo_atlassian.svg",
  },
  {
    name: "microsoft",
    path: "/images/home/brand-icons/logo_microsoft.svg",
  },
  {
    name: "google",
    path: "/images/home/brand-icons/logo_google.svg",
  },
  {
    name: "autodesk",
    path: "/images/home/brand-icons/autodesk.svg",
  },

];
const BrandShowcase = () => {
  return (
    <section className=' md:pb-[100px] pt-[72px] pb-[56px]'>
      <Container className='flex flex-col  items-center text-center py-4'>
        <p className='section-preheading text-gray-400 w-[186px] md:w-max'>Backed by engineering leaders from</p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='grid grid-cols-3 md:grid-cols-7 md:grid-cols-flow  place-item-center md:gap-[48px] gap-[10px] mt-[32px] md:mt-[24px] md:px-[98px] pl-2 '>
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className={cn(logo.name === "atlassian" ?"hide md:flex ":"flex", " justify-center items-center mt-5 md:mt-0")}
            >
              <Image
                src={logo.path}
                alt={logo.name}
                width={logo.name === "atlassian" ?"165px" : "120px"}
                height='40'
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default BrandShowcase;
