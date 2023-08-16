import Image from "next/image";
import { devTestimonials } from "global/constants";

const DEVELOPER_TESTIMONIALS = devTestimonials;

const CommunityStorie = () => {
  return (
    <section className='py-24 w-full overflow-visible rounded-md mb-4'>
      <div className='flex flex-col justify-center items-center text-center pb-[72px]'>
        <h1 className='heading pt-2 md:w-[800px]'>What our members feel</h1>
      </div>

      <div className='flex md:flex-row flex-col gap-[32px] md:px-12  justify-center'>
        {DEVELOPER_TESTIMONIALS.filter((q) => q.shortContent)
          .slice(0, 3)
          .map((testimonials: any) => (
            <div
              key={testimonials.name}
              className='text-center p-8 md:min-w-[392px] border-[0.5px] border-[#18171C] rounded-[10px] md:w-[372px] bg-[#09071B] grid grid-cols-1 gap-5'
            >
              <div className='flex justify-center '>
                <div className='flex justify-center w-[80px] h-[80px] relative rounded-full '>
                  <Image
                    src={testimonials.image}
                    layout='fill'
                    alt='developer image'
                    unoptimized={true}
                    objectFit='cover'
                    objectPosition={"top"}
                    className='shadow-md rounded-full'
                  />
                </div>
              </div>

              <p className='py-4 text-base font-normal text-gradient'>
                {testimonials.shortContent}
              </p>
              <div className=''>
                <p className='text-[#E4E4E4] font-medium text-base '>
                  {testimonials.name}
                </p>
                <p className='page-para text-[#908E9F] '>{testimonials.role}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CommunityStorie;
