import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@components/container";
import Image from "next/image";
import Link from "next/link";

const StartupContent = () => {
  return (
    <>
      <section className='bg-light-gray '>
        <Container className='py-8 md:py-16'>
          <div className='flex flex-col flex-col-reverse md:flex-row gap-10 '>
            <div className='md:w-1/3'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='300'
                  height='300'
                  src='/images/startup/business-growth.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>
            <div className='md:w-3/5 text-center md:text-left md:mt-16 mt-4 pt-3 '>
              <p className='section-preheading pb-2 '>{"Longer lifeline"}</p>
              <div className='section-heading inline relative'>
                Extend your startup runway 3x
              </div>
              <p className='section-preheading pt-2 '>
                {
                  " Most great startups don't fail, you just end up running out of capital before becoming great. By building a capital efficient remote team on AppExert, our clients have extended their runway by over 3x getting them further much further on their road to Product-Market-Fit."
                }
              </p>
              <div className='flex gap-4 font-semibold pt-8 text-center justify-center md:justify-start'>
                <Link href='/'>
                  <a className='flex  text-brand-700 hover:text-brand-500 '>
                    Lets talk about extending your runway
                    <ArrowRightOutlined
                      className='pl-2 mt-[3px]'
                      style={{ fontSize: "1.05rem", verticalAlign: "top" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className=''>
        <Container className='py-8 md:py-16'>
          <div className='flex flex-col md:flex-row md:gap-10 '>
            <div className='md:w-3/5 text-center md:text-left md:mt-10 mt-6 md:pl-10'>
              <p className='section-preheading pb-2 '>
                {"Imagine round the clock PRs & deployments"}
              </p>
              <div className='section-heading inline relative'>
                Round the clock productivity
              </div>
              <p className='section-preheading pt-2 '>
                You can partner with AppExert exclusively or in collaboration
                with your in-house team. Both ways, you get the benefits of our
                tailored uniquely for startups. As a result, you give your
                startup an increased run rate/increased runway time.
              </p>
            </div>
            <div className='md:w-1/3'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='300'
                  height='300'
                  src='/images/startup/devops-development.svg'
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
                  src='/images/startup/confused-employee.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>

            <div className='md:w-3/5 text-center md:text-left md:mt-10 mt-6 md:pl-10'>
              <p className='section-preheading pb-2 '>
                {"Stop gambling on freelance platforms"}
              </p>
              <div className='section-heading inline relative'>
                De-risking you from gambling on freelance platforms
              </div>
              <p className='section-preheading pt-2 '>
                Opting for freelance platforms might appear as a convenient
                option, but once you start scaling the problems with such
                platform surfaces
              </p>
              <ul className='list-disc mt-2 ml-4 text-left'>
                <li>Hard to onboard folks for long term</li>
                <li>Finding the right fit is time consuming</li>
                <li>Top rated freelancers are heavy on pocket</li>
                <li>Unreliable screening processes</li>
                <li>
                  Exclusivity is missing since most freelancers have multiple
                  commitments
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className='py-8 md:py-16'>
          <div className='flex flex-col md:flex-row md:gap-10 '>
            <div className='md:w-3/5 text-center md:text-left md:mt-10 pt-5 md:pl-10'>
              <p className='section-preheading pb-2 '>
                {"Pay only for the output & save overhead costs"}
              </p>
              <div className='section-heading inline relative'>
                Scale it up or down
              </div>
              <p className='section-preheading pt-2 '>
                How often do you find yourself wasting hours figuring out how to
                setup a complex AWS task or learning information security to
                protect your data. With AppExert, you can scale up or down on
                talent on demand bringing in the right people to help with
                complex tasks without having to hire a full time DevOps or
                Security Engineer.
              </p>
              <div className='flex gap-4 font-semibold pt-8 text-center justify-center md:justify-start'>
                <Link href='/'>
                  <a className='flex  text-brand-700 hover:text-brand-500 '>
                    Learn more
                    <ArrowRightOutlined
                      className='pl-2 mt-[3px]'
                      style={{ fontSize: "1.05rem", verticalAlign: "top" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className='md:w-1/3'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='300'
                  src='/images/startup/salary-notification.svg'
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
                  height='350'
                  src='/images/startup/account.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>

            <div className='md:w-3/5 text-center md:text-left md:mt-10 pt-5 md:pl-10'>
              <p className='section-preheading pb-2 '>
                {
                  "Our work doesn't end with building your team, it begins there!"
                }
              </p>
              <div className='section-heading inline relative'>
                Action meets accountability
              </div>
              <p className='section-preheading pt-2 '>
                We identified these gaps in freelance & hiring platforms and
                designed AppExert in a way that it brings maximum convenience to
                founders.
              </p>
              <ul className='list-disc mt-2  text-left'>
                <li className='flex '>
                  <svg
                    className='w-4 h-4 mt-1 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='img'
                    width='1em'
                    height='1em'
                    preserveAspectRatio='xMidYMid meet'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill='none'
                      stroke='#37B34A'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='m2.75 8.75l3.5 3.5l7-7.5'
                    />
                  </svg>
                  Dedicated account managers
                </li>
                <li className='flex '>
                  <svg
                    className='w-4 h-4 mt-1 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='img'
                    width='1em'
                    height='1em'
                    preserveAspectRatio='xMidYMid meet'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill='none'
                      stroke='#37B34A'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='m2.75 8.75l3.5 3.5l7-7.5'
                    />
                  </svg>
                  Simplified communication channels
                </li>
                <li className='flex '>
                  <svg
                    className='w-4 h-4 mt-1 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='img'
                    width='1em'
                    height='1em'
                    preserveAspectRatio='xMidYMid meet'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill='none'
                      stroke='#37B34A'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='m2.75 8.75l3.5 3.5l7-7.5'
                    />
                  </svg>
                  Accountability for project completion
                </li>
                <li className='flex '>
                  <svg
                    className='w-4 h-4 mt-1 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='img'
                    width='1em'
                    height='1em'
                    preserveAspectRatio='xMidYMid meet'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill='none'
                      stroke='#37B34A'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='m2.75 8.75l3.5 3.5l7-7.5'
                    />
                  </svg>
                  Hiring costs suited for startups
                </li>
                <li className='flex '>
                  <svg
                    className='w-4 h-4 mt-1 mr-2 '
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='img'
                    width='1em'
                    height='1em'
                    preserveAspectRatio='xMidYMid meet'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill='none'
                      stroke='#37B34A'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='m2.75 8.75l3.5 3.5l7-7.5'
                    />
                  </svg>
                  Rigorous vetting process to onboard the best
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StartupContent;
