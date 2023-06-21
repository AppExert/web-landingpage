import Container from "@components/container";
import Image from "next/image";

const logos: { name: string; path: string; className?: string }[] = [
  {
    name: "amazon",
    path: "/images/home/brand-icons/amazon.svg",
    className: "pt-[2px] pl-[20px]",
  },
  {
    name: "google",
    path: "/images/home/brand-icons/google.svg",
    className: "md:px-[12px]",
  },
  {
    name: "meta",
    path: "/images/home/brand-icons/meta.svg",
    className: "md:px-[10px]",
  },
  {
    name: "microsoft",
    path: "/images/home/brand-icons/microsoft.svg",
    className: "md:px-[1px]",
  },
  {
    name: "spotify",
    path: "/images/home/brand-icons/spotify.svg",
    className: "md:px-[1px]",
  },
  {
    name: "autodesk",
    path: "/images/home/brand-icons/autodesk.svg",
    className: "mt-[1px]",
  },
  {
    name: "intuit",
    path: "/images/home/brand-icons/intuit.svg",
    className: "px-3",
  },
  {
    name: "morgan-stanley",
    path: "/images/home/brand-icons/morgan-stanley.svg",
    className: "mt-[1px]",
  },
];
const BrandShowcase = () => {
  return (
    <section className=''>
      <Container className='flex flex-col lg:flex-row gap-4 justify-center items-center py-4'>
        <p className='section-preheading md:-mt-2'>Backed by engineering leaders from</p>
        <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 md:mt-0 '>
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className='w-20 md:h-8 flex flex-col justify-center items-center'
            >
              <Image
                className={logo.className}
                src={logo.path}
                alt={logo.name}
                width='80'
                height='20'
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandShowcase;
