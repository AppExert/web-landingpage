import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@components/container";
import Image from "next/image";
import Link from "next/link";

const WhyChooseAppExert = () => {
  return (
    <section className='md:py-16 py-8 bg-light-gray'>
      <Container>
        <div className='text-center pt-'>
          <p className='section-preheading pb-2'>
          Why top performing start-ups and SMEs are choosing AppExert
          </p>
          <div className='relative inline'>
            <h2 className='section-heading inline '>
            Convenience Meets Performance
            </h2>
            <span className='w-40 border-b-4 border-brand-500 block mt-2 absolute left-0 md:block hidden'></span>
          </div>
        </div>
       
        <div className='flex flex-col flex-col-reverse md:flex-row gap-8 mt-16'>
          <div className='md:w-1/3  text-center '>
            <div className=''>
              <Image
                layout='intrinsic'
                src='/images/home/why-choose-appexert.svg'
                width={"300"}
                height={"300"}
                alt='Why the top-performing Startups and SMEs are choosing AppExert'
              />
            </div>

            <div className='flex gap-4 items-center justify-center mt-4 font-semibold'>
              <Link href='/companies'>
                <a >Want to Know More
                  <ArrowRightOutlined className='pl-4 mt-[2px]'
                    style={{ fontSize: "1.2rem" ,  verticalAlign: "top" }}/>
                </a>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 lg:gap-0 md:grid-cols-2 md:w-2/3'>
            <div className='flex items-center gap-8'>
              <div>
                <Image
                  src='/images/home/hire-me-icon.svg'
                  alt='hire me icon'
                  layout='fixed'
                  width={50}
                  height={50}
                />
              </div>
              <div className='md:w-1/2'>
                <p className='text-xl font-semibold'>Hire Fast, Grow Faster </p>

                <p>
                  Within 21 days, a talented team of remote developers will be
                  working on your project.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-8'>
              <div>
                <Image
                  src='/images/home/talent-management-icon.svg'
                  alt='hire me icon'
                  layout='fixed'
                  width={50}
                  height={50}
                />
              </div>
              <div className='md:w-1/2'>
                <p className='text-xl font-semibold'>
                  Top Talent, at One Third Cost
                </p>

                <p>
                  Prices starting at just 18$ per hour, making it a go-to choice
                  for startups.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-8'>
              <div>
                <Image
                  src='/images/home/account-manager-icon.svg'
                  alt='hire me icon'
                  layout='fixed'
                  width={50}
                  height={50}
                />
              </div>
              <div className='md:w-1/2'>
                <p className='text-xl font-semibold'>
                  Dedicated Account Manager
                </p>

                <p>
                  Account manager to take care of all the operational needs.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-8'>
              <div>
                <Image
                  src='/images/home/free-board-icon.svg'
                  alt='hire me icon'
                  layout='fixed'
                  width={50}
                  height={50}
                />
              </div>
              <div className='md:w-1/2'>
                <p className='text-xl font-semibold'>15-day Free Trial </p>

                <p>
                  100% risk-free trial to assess if we are the right fit for
                  you. What if it doesn’t work out? No charges. No question
                  asked.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseAppExert;
