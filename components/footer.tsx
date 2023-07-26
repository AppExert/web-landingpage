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
              Discover, hire and manage qualified developers. Powered by GPT-4
            </p>
          </div>
          <div className='md:w-2/3 grid grid-cols-2 md:flex flex-row flex-wrap md:gap-[90px] gap-[40px] justify-between md:justify-start px-2 md:px-0'>
            <div>
              <p className='font-normal font-mono text-white pb-[15px]'>
                Employers
              </p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href='/companies/start-hiring?step=1'>
                  <a className=' hover:underline hover:text-white '>
                    How to hire
                  </a>
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?companies`}
                >
                  <a className='hover:underline hover:text-white'>Why us</a>
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?companies`}
                >
                  <a className=' hover:underline hover:text-white'>
                    Hire developers
                  </a>
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?companies`}
                >
                  <a className=' hover:underline hover:text-white'>Resources</a>
                </Link>
                <Link href='/companies/start-hiring?step=1'>
                  <a className='hover:underline hover:text-white'>
                    Book a demo
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <p className='font-normal font-mono text-white pb-[15px]'>
                Developers
              </p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link
                  href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
                >
                  <a className=' hover:underline hover:text-white'>
                    Apply for jobs
                  </a>
                </Link>
                <Link href='/benefits'>
                  <a className='hover:underline hover:text-white'>Benefits</a>
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
                >
                  <a className='hover:underline hover:text-white mb-1'>
                    Resources
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <p className='font-normal font-mono text-white pb-[15px]'>
                Company
              </p>
              <div className='text-[14px] text-gray-400 flex flex-col gap-y-[14px]'>
                <Link href='/about'>
                  <a className=' hover:underline hover:text-white mb-1'>
                    About us
                  </a>
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
                >
                  <a className='hover:underline hover:text-white mb-1'>
                    Careers
                  </a>
                </Link>
                <Link href='/posts'>
                  <a className=' hover:underline hover:text-white mb-1'>
                    Blogs
                  </a>
                </Link>
                <Link href='/faqs'>
                  <a className='hover:underline hover:text-white mb-1'>FAQs</a>
                </Link>
                <Link href='/contact'>
                  <a className='hover:underline hover:text-white mb-1'>
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      )}
      {footerCopyright && (
        <Container className="flex  md:flex-row flex-col-reverse gap-y-[24px] md:gap-y-0 md:justify-between  md:text-center text-gray-400 text-[14px] py-[36.5px] border-t-[1px] border-[#474554] ">
          <p className="md:block hidden">Made by AppExert tribe 🌍</p>
          <div className='flex md:justify-center text-center gap-x-[40px] '>
            <p className="pr-4 md:pr-0"> © {currentYear} AppExert Labs </p>
            <Link href='/privacy'>
              <a className=' hover:underline mb-1'>Privacy</a>
            </Link>
            <Link href='/terms'>
              <a className=' hover:underline mb-1'>Terms</a>
            </Link>
          </div>
          <div className='flex md:justify-center  text-center  gap-[16px] cursor-pointer'>
            <p className="md:hidden pr-4">Made by AppExert tribe 🌍</p>
            <Link href='https://in.linkedin.com/company/appexert'>
              <div className="w-[20px] h-[20px]">
                <svg
                  className="hover-image"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#908E9F"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10"/>
                  <g clip-path="url(#clip0_2576_69387)">
                    <path
                      d="M14.9917 14.9994V14.999H14.9942V11.3315C14.9942 9.53736 14.6079 8.15527 12.5104 8.15527C11.5021 8.15527 10.8254 8.70861 10.5492 9.23319H10.52V8.32277H8.53125V14.999H10.6021V11.6932C10.6021 10.8228 10.7671 9.98111 11.845 9.98111C12.9071 9.98111 12.9229 10.9744 12.9229 11.749V14.9994H14.9917Z"
                      fill="#020013"
                    />
                    <path
                      d="M5.16406 8.32324H7.2374V14.9995H5.16406V8.32324Z"
                      fill="#020013"
                    />
                    <path
                      d="M6.20083 5C5.53792 5 5 5.53792 5 6.20083C5 6.86375 5.53792 7.41292 6.20083 7.41292C6.86375 7.41292 7.40167 6.86375 7.40167 6.20083C7.40125 5.53792 6.86333 5 6.20083 5V5Z"
                      fill="#020013"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2576_69387">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(5 5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            <Link href='https://twitter.com/appexert?lang=en'>
              <div className="w-[20px] h-[20px]">
                <svg
                  className="hover-image"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#908E9F"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" />
                  <path
                    d="M7.90523 14.5053C12.1507 14.5053 14.4724 10.988 14.4724 7.93806C14.4724 7.83817 14.4704 7.73868 14.4659 7.63975C14.9165 7.31392 15.3082 6.90732 15.6172 6.44451C15.2037 6.62841 14.7586 6.75204 14.2918 6.80797C14.7683 6.52211 15.1341 6.07011 15.3067 5.53127C14.8607 5.79567 14.3668 5.98775 13.8411 6.0915C13.4199 5.64287 12.8202 5.3623 12.1562 5.3623C10.8816 5.3623 9.84791 6.39594 9.84791 7.67009C9.84791 7.85131 9.8682 8.02743 9.90776 8.1964C7.98944 8.09988 6.28832 7.18148 5.15005 5.78487C4.95191 6.1259 4.83756 6.52218 4.83756 6.94502C4.83756 7.7457 5.24506 8.45275 5.86466 8.86623C5.48599 8.8546 5.1303 8.75065 4.81933 8.57762C4.81899 8.58732 4.81899 8.59674 4.81899 8.60706C4.81899 9.72491 5.61458 10.6582 6.67085 10.8697C6.47683 10.9225 6.27271 10.9509 6.06218 10.9509C5.91372 10.9509 5.76896 10.9363 5.62834 10.9093C5.92218 11.8264 6.77432 12.4937 7.78456 12.5124C6.99454 13.1316 5.99937 13.5004 4.91778 13.5004C4.73175 13.5004 4.54785 13.4898 4.36719 13.4685C5.38871 14.1232 6.6017 14.5053 7.9053 14.5053"
                    fill="#020013"
                  />
                </svg>
              </div>
            </Link>
            <Link href='https://www.instagram.com/appexert/?hl=en'>
              <div className="w-[20px] h-[20px]">
                <svg
                  className="hover-image"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#908E9F"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" />
                  <g clip-path="url(#clip0_2576_69399)">
                    <path
                      d="M15.9906 7.52803C15.9625 6.89041 15.8594 6.45209 15.7117 6.07223C15.5593 5.66905 15.3249 5.30809 15.0178 5.00801C14.7177 4.70326 14.3543 4.46645 13.9558 4.31647C13.5738 4.16878 13.1377 4.06564 12.5001 4.03755C11.8578 4.00703 11.6538 4 10.0246 4C8.39539 4 8.19146 4.00703 7.55147 4.03516C6.91387 4.06329 6.47553 4.16649 6.09579 4.31408C5.69249 4.46645 5.33153 4.70087 5.03145 5.00801C4.7267 5.30807 4.49001 5.67142 4.33991 6.06994C4.19222 6.45209 4.0891 6.88806 4.06099 7.52564C4.03049 8.16802 4.02344 8.37195 4.02344 10.0012C4.02344 11.6304 4.03049 11.8343 4.0586 12.4743C4.08673 13.1119 4.18992 13.5503 4.33763 13.9301C4.49001 14.3333 4.7267 14.6943 5.03145 14.9943C5.33153 15.2991 5.69488 15.5359 6.0934 15.6859C6.4755 15.8336 6.91148 15.9367 7.5492 15.9648C8.18907 15.993 8.39311 16 10.0223 16C11.6516 16 11.8555 15.993 12.4955 15.9648C13.1331 15.9367 13.5714 15.8336 13.9512 15.6859C14.35 15.5317 14.7122 15.2958 15.0146 14.9935C15.3169 14.6911 15.5528 14.3289 15.707 13.9301C15.8546 13.548 15.9578 13.1119 15.986 12.4743C16.0141 11.8343 16.0211 11.6304 16.0211 10.0012C16.0211 8.37195 16.0187 8.168 15.9906 7.52803ZM14.91 12.4274C14.8842 13.0135 14.7857 13.3299 14.7037 13.5409C14.502 14.0637 14.0871 14.4786 13.5644 14.6803C13.3534 14.7623 13.0346 14.8607 12.4509 14.8865C11.8179 14.9147 11.6281 14.9216 10.027 14.9216C8.42588 14.9216 8.23368 14.9147 7.60302 14.8865C7.01697 14.8607 6.7005 14.7623 6.48952 14.6803C6.22938 14.5841 5.9926 14.4317 5.80037 14.2325C5.60111 14.0379 5.44874 13.8035 5.35258 13.5433C5.27053 13.3323 5.1721 13.0135 5.14638 12.4298C5.11816 11.7969 5.11122 11.607 5.11122 10.0058C5.11122 8.40472 5.11816 8.21252 5.14638 7.58197C5.1721 6.99592 5.27053 6.67945 5.35258 6.46847C5.44874 6.20822 5.60111 5.97148 5.80276 5.77921C5.99724 5.57995 6.23166 5.42758 6.49191 5.33153C6.70289 5.24949 7.02175 5.15103 7.60541 5.12522C8.23835 5.09709 8.42828 5.09006 10.0293 5.09006C11.6328 5.09006 11.8226 5.09709 12.4533 5.12522C13.0393 5.15105 13.3558 5.24946 13.5668 5.33151C13.8269 5.42758 14.0637 5.57995 14.2559 5.77921C14.4552 5.9738 14.6075 6.20822 14.7037 6.46847C14.7857 6.67945 14.8842 6.99819 14.91 7.58197C14.9381 8.21491 14.9452 8.40472 14.9452 10.0058C14.9452 11.607 14.9381 11.7945 14.91 12.4274Z"
                      fill="black"
                    />
                    <path
                      d="M10.0279 6.91855C8.3261 6.91855 6.94531 8.29924 6.94531 10.0012C6.94531 11.7031 8.3261 13.0838 10.0279 13.0838C11.7298 13.0838 13.1106 11.7031 13.1106 10.0012C13.1106 8.29924 11.7298 6.91855 10.0279 6.91855ZM10.0279 12.0008C8.92387 12.0008 8.02829 11.1054 8.02829 10.0012C8.02829 8.89702 8.92387 8.00157 10.0279 8.00157C11.1321 8.00157 12.0276 8.89702 12.0276 10.0012C12.0276 11.1054 11.1321 12.0008 10.0279 12.0008ZM13.9522 6.79665C13.9522 7.19409 13.6299 7.51632 13.2324 7.51632C12.835 7.51632 12.5128 7.19409 12.5128 6.79665C12.5128 6.39917 12.835 6.07703 13.2325 6.07703C13.6299 6.07703 13.9522 6.39914 13.9522 6.79665Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2576_69399">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(4 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            <Link href='https://www.facebook.com/appexert/'>
              <div className="w-[20px] h-[20px]">
                <svg
                className="hover-image"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#908E9F"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0828 3.65684 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.93047 3.93012 12.2146 3.93012C13.3084 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1922C11.95 6.60261 11.5625 7.37822 11.5625 8.17465V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3432 19.2452 20 15.0828 20 10.0611Z"
                    
                  />
                </svg>
              </div>
            </Link>
          </div>
        </Container>
      )}
    </footer>
  );
};

export default Footer;
