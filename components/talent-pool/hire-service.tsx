import Image from "next/image";

const HireService = () => {
  return (
    <section className='md:pt-[70px] mt-[36px] lg:px-10 text-center '>
      <div className='flex flex-col place-items-center text-center'>
        <p className='mt-2 heading'>
          Revolutionizing Tech Hiring
        </p>
        <p className='mt-2 landing-para text-[18px] '>
          Hire Great Developers with Zero Upfront Commitment and Flexible Pricing!
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-6 text-gray-400 pt-[48px] md:pt-[80px] justify-center items-center'>
        <div className="flex items-start gap-2">
          <div className="flex w-[18px] h-[18px] flex-shrink-0">
            <Image
              width={18}
              height={18}
              src={"/images/home/tic-icon.svg"}
              alt="Check icon"
            />
          </div>
          <p className="-mt-1 max-w-[180px] text-left">
          Access to a collection of diversified developers
          </p>
        </div>
        <div className="flex items-start gap-2 ">
          <div className="flex w-[18px] h-[18px] flex-shrink-0">
            <Image
              width={18}
              height={18}
              src={"/images/home/tic-icon.svg"}
              alt="Check icon"
            />
          </div>
          <p className="-mt-1 max-w-[180px] text-left">
          Convenient & swift hiring process
          </p>
        </div>
        <div className="flex items-start gap-2 ">
          <div className="flex w-[18px] h-[18px] flex-shrink-0">
            <Image
              width={18}
              height={18}
              src={"/images/home/tic-icon.svg"}
              alt="Check icon"
            />
          </div>
          <p className="-mt-1 max-w-[180px] text-left">
          Highly talented developers at a cost-effective budget
          </p>
        </div>

      </div>
    </section>
  );
};

export default HireService;
