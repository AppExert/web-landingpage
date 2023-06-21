import Image from "next/image";
import Container from "@components/container";

const HowItWorks = () => {
  return (
    <section className='py-8 md:py-16 text-md  bg-light-gray'>
      <Container className=''>
        <div className='text-center'>
          <p className='section-preheading pb-2'>
            Spin up your dream team in 4 easy steps
          </p>

          <div className='relative inline'>
            <h2 className='section-heading inline'>How it works?</h2>
            <span className='w-20 border-b-4 border-brand-500 block mt-2 absolute left-0 md:block hidden'></span>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center md:gap-8 mt-8'>
          <div className='md:w-1/2 pb-6 md:pb-0'>
            <h4 className='text-lg font-semibold'>Getting to Know You</h4>
            <p>
              We will set up a call and understand your requirements, vision,
              and short term - long term goals
            </p>
          </div>
          <div className='relative h-60 md:h-96 w-full md:w-1/2'>
            <div className=''>
              <Image
                layout='fill'
                objectFit='contain'
                src='/images/home/how-it-works1.png'
                alt='select skills illustration'
                className='z-0'
              />
            </div>

            <div
              className='absolute transform hidden lg:block'
              style={{
                top: "75%",
                left: "-25%",
                transform: "translateY(-50%)",
              }}
            >
              <Image
                layout='fixed'
                width={200}
                height={200}
                src='/images/home/curve-1.svg'
                alt='curve'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center md:gap-8 mt-8'>
          <div className='relative h-60 md:h-96 w-full md:w-1/2 shadow-md'>
            <div>
              <Image
                layout='fill'
                objectFit='contain'
                src='/images/home/how-it-works2.png'
                alt='select skills illustration'
              />
            </div>

            <div
              className='absolute transform hidden lg:block'
              style={{
                top: "45%",
                right: "-30%",
                transform: "translateY(-50%)",
              }}
            >
              <Image
                layout='fixed'
                width={200}
                height={300}
                src='/images/home/curve-2.svg'
                alt='curve'
              />
            </div>
          </div>
          <div className='md:w-1/2 pb-6 md:pb-0'>
            <h4 className='text-lg font-semibold'>Matching the Best Talent</h4>
            <p>
            We recommend the best developers from our pre-vetted talent pool based on your requirements (budget, timezone, seniority, stack, culture, duration)
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center md:gap-8 mt-8'>
          <div className='md:w-1/2 pb-6 md:pb-0'>
            <h4 className='text-lg font-semibold'>Pick Your Team</h4>
            <p>
              You can interview/interact with the candidates and select the
              developers for your team
            </p>
          </div>
          <div className='relative h-60 md:h-96 w-full md:w-1/2'>
            <div className=''>
              <Image
                layout='fill'
                objectFit='contain'
                src='/images/home/how-it-works3.png'
                alt='pick your team illustration'
                className='z-0'
              />
            </div>

            <div
              className='absolute transform hidden lg:block'
              style={{
                top: "65%",
                left: "-25%",
                transform: "translateY(-50%)",
              }}
            >
              <Image
                layout='fixed'
                width={200}
                height={200}
                src='/images/home/curve-3.svg'
                alt='curve'
              />
            </div>
          </div>

          <div
            className='absolute transform hidden lg:block'
            style={{
              top: "75%",
              left: "-25%",
              transform: "translateY(-50%)",
            }}
          >
            <Image
              layout='fixed'
              width={200}
              height={200}
              src='/images/home/curve-1.svg'
              alt='curve'
            />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center gap-8 mt-8'>
          <div className='relative h-60 md:h-96 w-full md:w-1/2'>
            <div className='shadow-lg'>
              <Image
                layout='fill'
                objectFit='contain'
                src='/images/home/how-it-works4.png'
                alt='select skills illustration'
                className='z-0'
              />
            </div>
          </div>
          <div className='md:w-1/2'>
            <h4 className='text-lg font-semibold'>Get Started</h4>
            <p>Your dream team is ready to get started on your project!</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
