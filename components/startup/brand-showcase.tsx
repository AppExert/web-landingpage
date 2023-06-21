import Container from "@components/container";
import Image from "next/image";

const logos: { name: string; path: string }[] = [
  {
    name: "founder institute",
    path: "/images/startup/founder-institute-logo.svg",
  },
  {
    name: "sequoia",
    path: "/images/startup/Sequoia-Capital-logo.svg",
  },
  {
    name: "NRC",
    path: "/images/startup/NRC-Logo.svg",
  },
  {
    name: "y-combinator",
    path: "/images/startup/y-combinator.svg",
  },
  
];
const BrandShowcase = () => {
  return (
    <section className='pt-8'>
      <Container className='flex flex-col gap-4 justify-center items-center py-4'>
        <p className='section-preheading text-center'>Trusted by start-up founders backed by top VCs & accelerators like </p>
        <div className='grid grid-cols-4 gap-4  md:mt-0 text-center item-center'>
          {logos.map((logo, idx) => (
            <div key={idx} className='w-16 h-6 md:w-20 md:h-8 text-center'>
              <Image
                src={logo.path}
                alt={logo.name}
                layout='responsive'
                width='80'
                height='30'
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandShowcase;
