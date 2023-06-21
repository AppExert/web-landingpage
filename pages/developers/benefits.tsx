import Container from "@components/container";
import { useSimpleLayout } from "@hooks/useSimpleLayout";
import Image from "next/image";
import Head from "next/head";
import { devTestimonials, developerBenefits } from "global/constants";

const DEVELOPER_BENEFITS = developerBenefits;

const DEVELOPER_TESTIMONIALS = devTestimonials;

const DevBenefits = () => {
  useSimpleLayout();

  return (
    <>
      <Head>
        <title>Developer Benefits | AppExert</title>
      </Head>

      <section className='hero  md:pt-6'>
        <Container className=''>
          <section className='md:flex '>
            <div className=' md:p-12 py-8 text-center w-full'>
              <h1 className='page-title md:text-[32px]'>
              Enjoy your AppExert+ benefits! 🎊
              </h1>
             
            </div>
           
          </section>

          <section className='md:mx-12 mb-12 -mt-1'>
            <div className='grid grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 relative p-5  shadow-box '>
              {DEVELOPER_BENEFITS.map((benefits: any) => (
                <div
                  key={benefits.name}
                  className='w-full h-full grid gap-2 text-center md:p-4 p-2  rounded-md   '
                >
                  <div className=' flex justify-center '>
                    <div className='flex justify-center items-center '>
                      {benefits.icon}
                    </div>
                  </div>

                  <h3 className='page-subheading1 py-2'>
                    {benefits.name}
                  </h3>
                  <p className='hidden md:flex page-para justify-center '>
                    {benefits.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className='py-6  w-full overflow-visible rounded-md mb-4'>
            <h1 className='md:pb-4 page-title flex justify-center items-center text-center px-4 md:text-[32px]'>
              What our developers have to say 😊
            </h1>

            <div className='flex md:flex-row flex-col gap-6 p-6 md:px-12 justify-center'>
              {DEVELOPER_TESTIMONIALS.filter(q=>q.shortContent).slice(0, 3).map((testimonials: any) => (
                <div
                  key={testimonials.name}
                  className='text-center p-8  border-[1px] rounded-lg md:w-[372px] shadow-box grid grid-cols-1 gap-5'
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

                  <p className='page-para  py-4 text-base font-normal'>
                    {testimonials.shortContent}
                  </p>
                  <div className=''>
                    <p className='text-text-black font-medium text-base '>
                      {testimonials.name}
                    </p>
                    <p className='page-para '>{testimonials.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default DevBenefits;
