import Container from "@components/container";
import Image from "next/image";

const CommunityContent = () => {
  return (
    <>
      <section className='bg-light-gray '>
        <Container className='py-8 md:py-16'>
          <div className='flex flex-col  md:flex-row gap-10 '>
            <div className='md:w-1/3'>
              <div className='w-full h-full flex items-center justify-center '>
                <Image
                  layout='fixed'
                  width='400'
                  height='300'
                  src='/images/community/way-to-success.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>
            <div className='md:w-3/5 text-center md:text-left md:mt-16 mt-4 pt-3 '>
              <div className='section-heading inline relative'>
                {"Acquire new "}{" "}
                <span className='text-yellow-dark'>Skills</span>
              </div>
              <p className='section-preheading pt-2 '>
                Freely seek help or resolve your doubts in learning skills or
                solidifying the existing ones.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className=''>
        <Container className='py-8 md:py-16'>
          <div className='flex flex-col md:flex-row md:gap-10 '>
            <div className='md:w-3/5 text-center md:text-left md:mt-20 mt-6 md:pl-10'>
              <div className='section-heading inline relative'>
                Connect with{" "}
                <span className='text-brand-700'>Talented Folks </span>
              </div>
              <p className='section-preheading pt-2 '>
                Meet amazingly talented developers and expand your network.
              </p>
            </div>
            <div className='md:w-1/3'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='500'
                  height='300'
                  src='/images/community/business-colleagues-celebrating-success.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='bg-light-gray'>
        <Container className='py-8 md:py-16'>
          <div className='flex flex-col flex-col-reverse md:flex-row md:gap-10 '>
            <div className='md:w-1/3'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='300'
                  src='/images/community/goal-achievement-and-choose-correct-way.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>

            <div className='md:w-3/5 text-center md:text-left md:mt-20 mt-6 md:pl-10'>
              <div className='section-heading inline relative'>
                Seek Mentor or<span className='text-green-dark'> Be One</span>
              </div>
              <p className='section-preheading pt-2 '>
                Be a mentor to others or connect with experienced folks who can
                guide you.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className='py-8 md:py-16'>
          <div className='flex flex-col md:flex-row md:gap-10 '>
            <div className='md:w-3/5 text-center md:text-left md:mt-20 pt-5 md:pl-10'>
              <div className='section-heading inline relative'>
                Root for <span className='text-blue-light'>Each Other</span>
              </div>
              <p className='section-preheading pt-2 '>
                Get peer support and encouragement in your journey to grow and
                help other grow too!
              </p>
            </div>
            <div className='md:w-1/3'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='300'
                  src='/images/community/cooperative-work.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CommunityContent;
