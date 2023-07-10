import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { useLayout } from "@hooks/useLayout";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { state } = useLayout();
  const { footer, footerCopyright } = state;
  return (
    <footer className='text-gray-400 border-t-[1px] border-[#26252C]'>
      {footer && (
        <Container className='flex flex-col md:flex-row md:py-[107.5px] py-[48px]'>
          <div className='md:w-3/5'>
            <div className='relative w-[185px] h-[48px]'>
              <Image
                layout='fill'
                src='/images/AppExert_logo_white.svg'
                alt='appexert logo'
              />
            </div>

            <p className='mt-[20px] text-[18px] text-gray-400 max-w-xs pb-[48px] '>
            Discover, hire and manage qualified  developers. Powered by GPT-4
            </p>


          </div>
          <div className='md:w-2/3 flex flex-row flex-wrap md:gap-x-[90px] justify-between md:justify-start px-2 md:px-0'>
            <div >
              <p className='font-normal font-mono text-white pb-[15px]'>Employers</p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href='/contact'>
                  <a className=' hover:underline'>Features</a>
                </Link>
                <Link href='/register?developers'>
                  <a className='hover:underline'>Resources</a>
                </Link>
                <Link href='/posts'>
                  <a className=' hover:underline'>Pricing</a>
                </Link>
                <Link href='/faqs'>
                  <a className='hover:underline'>Book a demo</a>
                </Link>
              </div>
            </div>



            <div >
              <p className='font-normal font-mono text-white pb-[15px]'>Developers</p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href='/contact'>
                  <a className=' hover:underline '>Apply for jobs</a>
                </Link>
                <Link href='/benefits'>
                  <a className='hover:underline '>Benefits</a>
                </Link>
                <Link href='/posts'>
                  <a className=' hover:underline'>Perks & benefits</a>
                </Link>
                <Link href='/faqs'>
                  <a className='hover:underline mb-1'>How to register</a>
                </Link>
                <Link href='/faqs'>
                  <a className='hover:underline mb-1'>Why us</a>
                </Link>
              </div>
            </div>

            <div >
              <p className='font-normal font-mono text-white pb-[15px]'>Company</p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href='/contact'>
                  <a className=' hover:underline mb-1'>About us</a>
                </Link>
                <Link href='/register?developers'>
                  <a className='hover:underline mb-1'>Careers</a>
                </Link>
                <Link href='/posts'>
                  <a className=' hover:underline mb-1'>Blog</a>
                </Link>
                <Link href='/faqs'>
                  <a className='hover:underline mb-1'>FAQs</a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      )}
      {footerCopyright && (
        <Container className="flex  md:flex-row flex-col-reverse gap-y-[24px] md:gap-y-0 md:justify-between  md:text-center text-gray-400 text-[14px] py-[36.5px] border-t-[1px] border-[#474554] ">
          <p className="md:block hidden" >
                  Made by AppExert tribe 🌍
          </p>
          <div className='flex md:justify-center text-center gap-x-[40px] '>
            <p> © {currentYear} AppExert Labs </p>
            <Link href='/privacy'>
              <a className=' hover:underline mb-1'>Privacy</a>
            </Link>
            <Link href='/terms'>
              <a className=' hover:underline mb-1'>
                    Terms
              </a>
            </Link>
          </div>
          <div className='flex md:justify-center  text-center  gap-[16px]'>
            <Link href='/privacy' >
              <div className="w-[20px] h-[20px]">
                <Image
                  width={"100%"}
                  height={"100%"}
                  src='/images/home/social/linkedin.svg'
                  alt='linkedin'
                />
              </div>

            </Link>
            <Link href='/privacy'>
              <div className="w-[20px] h-[20px]">
                <Image
                  width={"100%"}
                  height={"100%"}
                  src='/images/home/social/twitter.svg'
                  alt='twitter'
                />

              </div>
            </Link>
            <Link href='/privacy'>
              <div className="w-[20px] h-[20px]">
                <Image
                  width={"100%"}
                  height={"100%"}

                  src='/images/home/social/insta.svg'
                  alt='insta'
                />
              </div>
            </Link>
            <Link href='/privacy'>
              <div className="w-[20px] h-[20px]">
                <Image
                  width={"100%"}
                  height={"100%"}
                  src='/images/home/social/facebook.svg'
                  alt='facebook'
                />
              </div>
            </Link>
          </div>
        </Container>
      )}
    </footer>
  );
};

export default Footer;
