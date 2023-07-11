import Image from "next/image";
const TrustedDevelopers = () => {
  return (
    <section className='md:pb-[100px] pb-[32px] md:px-10 text-center '>
      <div className='flex flex-col justify-center items-center pb-[72px]'>
        <p className="green-label">SPIN UP YOUR DREAM TEAM WITH US</p>
        <div className='heading mb-[16px]'>
          Fully vetted, fully trusted developers
        </div>
        <p className='landing-para md:text-[18px] max-w-[606px]'>
          Startup founders need a team they can rely on. At AppExert, we only pick the best engineering talent for you. </p>
      </div>
      <div className="flex justify-center items-center">
        <div className='grid-cols-1 grid lg:grid-cols-3 md:gap-x-[56px] gap-y-[24px] text-gray-400 gap-4 justify-items-start  '>
          <div className="flex items-start gap-2 w-[200px] ">
            <div className="flex w-[18px] h-[18px] flex-shrink-0">
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt="Check icon"
              />
            </div>
            <p className="mt-[-2px]">
          3 Step Selection
            </p>
          </div>
          <div className="flex items-start gap-2 w-[200px]">
            <div className="flex w-[18px] h-[18px] flex-shrink-0">
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt="Check icon"
              />
            </div>
            <p className="mt-[-2px]">
          AI-Driven Matchmaking
            </p>
          </div>
          <div className="flex items-start gap-2 w-[200px]">
            <div className="flex w-[18px] h-[18px] flex-shrink-0">
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt="Check icon"
              />
            </div>
            <p className="mt-[-2px]">
          Industry Experience
            </p>
          </div>
          <div className="flex items-start gap-2 w-[200px]">
            <div className="flex w-[18px] h-[18px] flex-shrink-0">
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt="Check icon"
              />
            </div>
            <p className="mt-[-2px]">
          Top Talent
            </p>
          </div>
          <div className="flex items-start gap-2 w-[200px]">
            <div className="flex w-[18px] h-[18px] flex-shrink-0">
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt="Check icon"
              />
            </div>
            <p className="mt-[-2px]">
          Test Before You Invest
            </p>
          </div>
          <div className="flex items-start gap-2 w-[200px]">
            <div className="flex w-[18px] h-[18px] flex-shrink-0">
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt="Check icon"
              />
            </div>
            <p className="mt-[-2px]">
          Hub of Skills
            </p>
          </div>

        </div>
      </div> 
    </section>
  );
};

export default TrustedDevelopers;
