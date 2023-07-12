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
          <div className='md:w-2/3 grid grid-cols-2 md:flex flex-row flex-wrap md:gap-[90px] gap-[40px] justify-between md:justify-start px-2 md:px-0'>
            <div >
              <p className='font-normal font-mono text-white pb-[15px]'>Companies</p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href='/companies/start-hiring?step=1'>
                  <a className=' hover:underline'>How to hire</a>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?companies`}>
                  <a className='hover:underline'>Why us</a>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?companies`}>
                  <a className=' hover:underline'>Hire developers</a>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?companies`}>
                  <a className=' hover:underline'>Resources</a>
                </Link>
                <Link href='/companies/start-hiring?step=1'>
                  <a className='hover:underline'>Book a demo</a>
                </Link>
              </div>
            </div>



            <div >
              <p className='font-normal font-mono text-white pb-[15px]'>Developers</p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}>
                  <a className=' hover:underline '>Apply for jobs</a>
                </Link>
                <Link href='/benefits'>
                  <a className='hover:underline '>Benefits</a>
                </Link>                
                <Link href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}>
                  <a className='hover:underline mb-1'>Resources</a>
                </Link>
              </div>
            </div>

            <div >
              <p className='font-normal font-mono text-white pb-[15px]'>Company</p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href='/about'>
                  <a className=' hover:underline mb-1'>About us</a>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}>
                  <a className='hover:underline mb-1'>Careers</a>
                </Link>
                <Link href='/posts'>
                  <a className=' hover:underline mb-1'>Blogs</a>
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
            <p className="pr-4 md:pr-0"> © {currentYear} AppExert Labs </p>
            <Link href='/privacy'>
              <a className=' hover:underline mb-1'>Privacy</a>
            </Link>
            <Link href='/terms'>
              <a className=' hover:underline mb-1'>
                    Terms
              </a>
            </Link>
          </div>
          <div className='flex md:justify-center  text-center  gap-[16px] cursor-pointer'>
            <p className="md:hidden pr-4" >
                  Made by AppExert tribe 🌍
            </p>
            <Link href='https://in.linkedin.com/company/appexert' >
              <div className="w-[20px] h-[20px]">
                <Image
                  width={"100%"}
                  height={"100%"}
                  src='/images/home/social/linkedin.svg'
                  alt='linkedin'
                />
              </div>

            </Link>
            <Link href='https://twitter.com/appexert?lang=en'>
              <div className="w-[20px] h-[20px]">
                <Image
                  width={"100%"}
                  height={"100%"}
                  src='/images/home/social/twitter.svg'
                  alt='twitter'
                />

              </div>
            </Link>
            <Link href='https://www.instagram.com/appexert/?hl=en'>
              <div className="w-[20px] h-[20px]">
                <Image
                  width={"100%"}
                  height={"100%"}

                  src='/images/home/social/insta.svg'
                  alt='insta'
                />
              </div>
            </Link>
            <Link href='https://www.facebook.com/appexert/'>
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
