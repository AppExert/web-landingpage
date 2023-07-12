import Container from "@components/container";
import { Button } from "antd";
import Link from "next/link";

const StartupHero = () => {
  const startHire = `${process.env.NEXT_PUBLIC_HIRE_APP}/companies/start-hiring?step=1`;
  return (
    <div className="text-center flex flex-col justify-center items-center ">
      <p className="green-label">START. SCALE. SUCCEED</p>
      <h1 className="heading pt-2 text-center md:w-[850px] text-[48px]">
        Fueling Your Startup for Growth
      </h1>
      <p className='section-paragraph text-[#908E9F] py-[10px] pb-[20px] md:w-[672px] '>
        Whether you are taking your first step or looking to scale your team,we are ready with our team of rockstar remote engineers to help your startup grow and elevate it to the next level.
      </p>
      <div className='flex gap-4 items-center'>
        <Link href={startHire}>
          <Button
            type='primary'
            className='page-btn'
          >
            Hire Developers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StartupHero;
