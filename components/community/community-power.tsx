import Image from "next/image";

const CommunityPower = () => {
  return (
    <section className='md:pb-[100px] pb-[32px] md:px-10 text-center '>
      <div className='flex flex-col justify-center items-center pb-[72px]'>
        <div className='heading mb-[16px]'>More Power To You</div>
        <p className='landing-para md:text-[18px] max-w-[606px]'>
          When you join our community, you not only expand your professional
          network but also get access to special resources to alleviate your
          career{" "}
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <div className='grid-cols-1 grid lg:grid-cols-3 md:gap-x-[56px] gap-y-[24px] text-gray-400 gap-4 justify-items-start  '>
          <div className='flex items-start gap-2 w-[200px] '>
            <div className='flex w-[18px] h-[18px] flex-shrink-0'>
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt='Check icon'
              />
            </div>
            <p className='mt-[-2px]'>Remote Job Opportunities</p>
          </div>
          <div className='flex items-start gap-2 w-[200px]'>
            <div className='flex w-[18px] h-[18px] flex-shrink-0'>
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt='Check icon'
              />
            </div>
            <p className='mt-[-2px] text-left'>Content by community members</p>
          </div>
          <div className='flex items-start gap-2 w-[200px]'>
            <div className='flex w-[18px] h-[18px] flex-shrink-0'>
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt='Check icon'
              />
            </div>
            <p className='mt-[-2px]'>Mentorship programs</p>
          </div>
          <div className='flex items-start gap-2 w-[200px]'>
            <div className='flex w-[18px] h-[18px] flex-shrink-0'>
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt='Check icon'
              />
            </div>
            <p className='mt-[-2px]'>Remote work seminars</p>
          </div>
          <div className='flex items-start gap-2 w-[200px]'>
            <div className='flex w-[18px] h-[18px] flex-shrink-0'>
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt='Check icon'
              />
            </div>
            <p className='mt-[-2px]'>Meetups and tech. events</p>
          </div>
          <div className='flex items-start gap-2 w-[200px]'>
            <div className='flex w-[18px] h-[18px] flex-shrink-0'>
              <Image
                width={18}
                height={18}
                src={"/images/home/tic-icon.svg"}
                alt='Check icon'
              />
            </div>
            <p className='mt-[-2px]'>Career guide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPower;
