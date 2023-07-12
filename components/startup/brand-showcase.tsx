import Container from "@components/container";
import Image from "next/image";

const logos: { name: string; path: string, width:string, height:string }[] = [
  {
    name: "Wallmart",
    path: "/images/startup/Walmart_logo.svg",
    width: "120px",
    height: "40px",
  },
  {
    name: "sequoia",
    path: "/images/startup/Sequoia-1b-Home-Logo.png",
    width: "120px",
    height: "40px",
  },
  {
    name: "y-combinator",
    path: "/images/startup/Y_Combinator_logo.svg",
    width: "120px",
    height: "40px",
  },
  
];
const BrandShowcase = () => {
  return (
    <section className='pt-8'>
      <Container className='flex flex-col gap-4 justify-center items-center py-4'>
        <p className='section-preheading text-center'>Trusted by start-up founders backed by top VCs & accelerators like </p>
        <div className='grid grid-cols-3 gap-[48px]  md:mt-0 text-center item-center '>
          {logos.map((logo, idx) => (
            <div key={idx}>
              <Image
                src={logo.path}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandShowcase;
