import Container from "@components/container";
import ComparisionCard from "./comparision-card";

type Platform = {
  title: string;
  items: JSX.Element[];
  buttonText: string;
  buttonLink: string;
  primary: boolean;
};

const warning = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    role='img'
    width='1em'
    height='1em'
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 64 64'
  >
    <path fill='#FFC700' d='M36.989 42.439H27.01L23 2h18z' />
    <ellipse cx='31.999' cy='54.354' fill='#FFC700' rx='7.663' ry='7.646' />
  </svg>
);
const fail = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    role='img'
    width='1em'
    height='1em'
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 24 24'
  >
    <path
      fill='none'
      stroke='#F81212'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);
const pass = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    role='img'
    width='1em'
    height='1em'
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 16 16'
  >
    <path
      fill='none'
      stroke='#37B34A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='m2.75 8.75l3.5 3.5l7-7.5'
    />
  </svg>
);

const platforms: Platform[] = [
  {
    title: "Freelance Platforms",
    primary: false,
    items: [
      <div className='flex' key={0}>
        {fail}
        <p className='-mt-1 pl-1'>No free trial</p>
      </div>,
      <div className='flex' key={0}>
        {warning}
        <p className='-mt-1 pl-1'>Only skill based vetting process</p>
      </div>,
      <div className='flex' key={0}>
        {warning}
        <p className='-mt-1 pl-1'>20-40 days team building speed</p>
      </div>,
      <div className='flex' key={0}>
        {pass}
        <p className='-mt-1 pl-1.5'>AI or Direct assessment matching process</p>
      </div>,
      <div className='flex' key={0}>
        {fail}
        <p className='-mt-1 pl-1'>No project coordinator</p>
      </div>,
      <div className='flex' key={0}>
        {warning}
        <p className='-mt-1 pl-1'>Generally short term duration</p>
      </div>,
    ],
    buttonText: "",
    buttonLink: "",
  },

  {
    title: "AppExert",
    primary: true,
    items: [
      <div className='flex' key={0}>
        {pass}
        <p className='-mt-1 pl-1'>15 days free trial + Employee probation</p>
      </div>,
      <div className='flex' key={1}>
        {pass}
        <p className='-mt-1 pl-1'>4 step vetting process</p>
      </div>,
      <div className='flex' key={2}>
        {pass}
        <p className='-mt-1 pl-1'>21 days team building speed</p>
      </div>,
      <div className='flex' key={3}>
        {pass}
        <p className='-mt-1 pl-1.5'>AI + Direct assessment matching process</p>
      </div>,
      <div className='flex' key={4}>
        {pass}
        <p className='-mt-1 pl-1'>Dedicated account manager</p>
      </div>,
      <div className='flex' key={5}>
        {pass}
        <p className='-mt-1 pl-1'>Flexible duration (short term & long term)</p>
      </div>,
    ],
    buttonText: "Hire Developers",
    buttonLink: "/",
  },
  {
    title: "In-House Hiring",
    primary: false,
    items: [
      <div className='flex' key={0}>
        {pass}
        <p className='-mt-1 pl-1'>Employee probation period</p>
      </div>,
      <div className='flex' key={0}>
        {warning}
        <p className='-mt-1 pl-1'>Varying vetting process</p>
      </div>,
      <div className='flex' key={0}>
        {warning} <p className='-mt-1 pl-1'>30-90 days team building speed</p>
      </div>,
      <div className='flex' key={0}>
        {warning}
        <p className='-mt-1 pl-1.5'>Direct assessment matching process</p>
      </div>,
      <div className='flex' key={0}>
        {pass}
        <p className='-mt-1 pl-1'>Accountability based on team hierarchy</p>
      </div>,
      <div className='flex' key={0}>
        {pass}
        <p className='-mt-1 pl-1'>Long term duration</p>
      </div>,
    ],
    buttonText: "",
    buttonLink: "",
  },
];

const ComparePlatforms = () => {
  return (
    <section className='py-16 '>
      <Container>
        <div className='text-center'>
          <p className='section-preheading pb-2 '>
            {"AppExert way is the easy-efficient way"}
          </p>
          <div className='section-heading inline relative'>
            Get the best of both worlds
            <span className='w-40 border-b-4 border-brand-500 block mt-2 absolute left-0 lg:block hidden'></span>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-14 px-2 lg:px-16'>
          {platforms.map((platform, index) => (
            <ComparisionCard
              key={index}
              primary={platform.primary}
              title={platform.title}
              buttonText={platform.buttonText}
              buttonLink={platform.buttonLink}
              items={platform.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComparePlatforms;
