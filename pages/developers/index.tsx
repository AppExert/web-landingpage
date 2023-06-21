import Head from "next/head";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

import Container from "@components/container";
import FrequentlyAskedQuestion from "pages/companies/faq";
import DeveloperBenefits from "./developer-benefits";

const isHideDeveloperPage = process.env.NEXT_PUBLIC_HIDE_DEVELOPER_PAGE;

const Developers = () => {
  return (
    <>
      <Head>
        <title>AppExert | Join our Community of (100+) Remote Developers</title>
        <meta
          name='description'
          content={
            "AppExert | Join a network of the World's Best Developers & get full-time, long-term Remote Software Jobs with better compensation and career growth."
          }
        />
        <meta
          name='keywords'
          content='development jobs remote, work from home jobs, full time remote jobs, remote working employees, appexert'
        />

        {/* og tags */}
        <meta
          property='og:title'
          content='AppExert | Join our Community of (100+) Remote Developers'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta property='og:url' content='https://appexert.com/developers' />
        <meta
          property='og:description'
          content="AppExert | Join a network of the World's Best Developers & get full-time, long-term Remote Software Jobs with better compensation and career growth."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fdevelopers%2Fwork-from-anywhere.svg&w=640&q=75'
        />
      </Head>
      <section className='hero py-16 lg:py-32'>
        <Container>
          <div className='max-w-screen-lg m-auto'>
            <div className='text-center'>
              <h1 className='hero-heading'>
                Remote work is <span className='line-through'>hard to get</span>
                , <span className='line-through'>inconsistent</span>, <br />{" "}
                <span className='line-through'>low paying</span> easy to find,
                regular & well paid
              </h1>

              <p className='section-paragraph'>
                Join our team of brilliant developers and work with high tech
                startups across the world. <br />
                AppExert gives remote work the stability of a full time job.
              </p>
              {!isHideDeveloperPage && (
                <Button
                  type='primary'
                  className='btn-brand px-8 '
                  size='large'
                  // onClick={() => {}}
                >
                  Become an AppExert Developer
                </Button>
              )}
              <div className='flex items-center justify-center'>
                <Link href='http://jobs.appexert.com'>
                  <Button
                    type='link'
                    className='btn-brand-outline md:ml-3'
                    size='large'
                  >
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='how-get-started py-16 bg-light-gray  lg:py-32'>
        <Container>
          <p className='section-preheading'>4 Step Process</p>
          <h2 className='section-heading'>
            How to become an AppExert Developer?
          </h2>
          <div className='flex flex-col mt-4 gap-8 md:flex-row md:mt-8 lg:mt-16'>
            <div className='flex flex-col gap-2 items-center md:items-start'>
              <div className='w-48 h-48'>
                <Image
                  layout='fixed'
                  width='200'
                  height='200'
                  src='/images/developers/sign-up.svg'
                  alt='sign up icon'
                />
              </div>
              <h3 className='font-semibold text-gray-800 md:text-xl'>Signup</h3>
              <p>
                {` Signup on our platform, let us understand you better! 
`}
              </p>
            </div>
            <div className='flex flex-col gap-2 items-center md:items-start'>
              <div className='w-48 h-48'>
                <Image
                  layout='fixed'
                  width='200'
                  height='200'
                  src='/images/developers/interview.svg'
                  alt='interview icon'
                />
              </div>
              <h3 className='font-semibold text-gray-800 md:text-xl'>
                Interview
              </h3>
              <p>Go through our 1 time vetting process to be an AppExert Dev</p>
            </div>
            <div className='flex flex-col gap-2 items-center md:items-start'>
              <div className='w-48 h-48'>
                <Image
                  layout='fixed'
                  width='200'
                  height='200'
                  src='/images/developers/meet.svg'
                  alt='interview icon'
                />
              </div>
              <h3 className='font-semibold text-gray-800 md:text-xl'>Meet</h3>
              <p>Meet your next team. Know your project beforehand!</p>
            </div>
            <div className='flex flex-col gap-2 items-center md:items-start'>
              <div className='w-48 h-48'>
                <Image
                  layout='fixed'
                  width='200'
                  height='200'
                  src='/images/developers/onboard.svg'
                  alt='interview icon'
                />
              </div>
              <h3 className='font-semibold text-gray-800 md:text-xl'>
                Onboard
              </h3>
              <p>Join your team. We’ll support your career growth!</p>
            </div>
          </div>
        </Container>
      </section>
      <section className='reduce-hire-time py-16 lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row-reverse lg:gap-16'>
            <div className='w-full md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>Work from anywhere</p>
              <h2 className='section-heading'>Work Remote, Grow Global</h2>

              <p className='section-paragraph'>
                Imagine sitting comfortably in your room or in your balcony,
                laptop in your lap, sipping roasted coffee and working for
                companies across the globe. With AppExert you can work from
                anywhere(literally). Save the hours that you waste in commuting
                and let your talent reach places.
                <br />
                We are cool even if you work from a deserted island
              </p>

              <p className='section-tagline'>
                {"(just have internet and your laptop)"}
              </p>
            </div>

            <div className='w-full md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='600'
                  height='300'
                  src='/images/developers/work-from-anywhere.svg'
                  alt='work from anywhere illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='get-exceptional-value py-16 bg-light-gray  lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row lg:gap-16'>
            <div className='w-full md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>Enjoy work-life balance</p>
              <h2 className='section-heading'>{"'Me' time matters"}</h2>

              <p className='section-paragraph'>
                {
                  " Working for global clients won’t make you a night owl. Our overlapping hours are pre-defined to ensure a balanced work life. Our engagements are long-term so you naturally get flexibility in your work hours. You can make more time for your family or to just relax more."
                }
              </p>

              <p className='section-tagline'>
                {" Your work life is not your only life. We get it!"}
              </p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='800'
                  height='300'
                  src='/images/developers/work-life-balance.svg'
                  alt='work life balance illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='unique-remote-hire-model py-16 lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row-reverse lg:gap-16'>
            <div className='w-full md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>
                Get a Handsome Package + Amazing Perks
              </p>
              <h2 className='section-heading'>Great Pay with Great Perks</h2>

              <p className='section-paragraph'>
                {` We offer the best in the industry salary packages. You get a special allocation of budget towards your home office setup. We take care of your overall well being through our uniquely designed benefits - health insurance, fitness benefits, internet charges, certifications, virtual lunches, courses, books, hobbies, etc
`}
              </p>

              <p className='section-tagline'>
                You deserve more than just your paycheque
              </p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='800'
                  height='300'
                  src='/images/developers/great-pay.svg'
                  alt='great pay illustration'
                />
              </div>
            </div>
          </div>
        </Container>
        <DeveloperBenefits />
      </section>
      <section className='high-quality-developers py-16 bg-light-gray  lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row lg:gap-16'>
            <div className='w-full md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>
                Grow with like-minded developers
              </p>
              <h2 className='section-heading'>Team that lifts you up</h2>

              <p className='section-paragraph'>
                At AppExert, you work with like-minded developers and get
                amazing learning opportunities that make your skills globally
                competent. Our 1-1 mentorship from engineering leaders and top
                devs help you achieve your career goals faster.
              </p>
              <p className='section-tagline'>
                {" You don’t just work for us, you grow with us "}
              </p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='800'
                  height='300'
                  src='/images/developers/grow-with-best.svg'
                  alt='great pay illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='true-partnership-approach py-16 lg:py-32'>
        <Container>
          <div className='flex flex-col gap-2 md:flex-row-reverse lg:gap-16'>
            <div className='w-full md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>Feel secure in your job</p>
              <h2 className='section-heading'>Remote Work with Stability</h2>

              <p className='section-paragraph'>
                No more stressing out for project durations, price negotiations
                with clients etc. etc. You will work for hi-tech startups in
                engagements that are long -term, steady and secure. You will be
                a full time member and your sole focus would be the product that
                you work for.
              </p>

              <p className='section-tagline'>
                A stable-smooth-stress free journey for you
              </p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='800'
                  height='300'
                  src='/images/developers/full-time.svg'
                  alt='long time commitment illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='skills py-16 bg-light-gray  lg:py-32'>
        <Container>
          <div className='flex gap-4 flex-col md:flex-row lg:gap-16'>
            <div className='w-full md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>Let your voice be heard</p>
              <h2 className='section-heading'>
                Sense of inclusion is everything
              </h2>
              <p className='section-paragraph'>
                {`Tired of the locked up structure of freelance platforms & IT service companies ? Where you are only a vendor, contractor, outsider, freelancer? Our Full-Time engagement model is designed to give value to your voice. You work as a team on projects and experience a true sense of belongingness.
`}
              </p>
              <p className='section-tagline'>
                {"You become a part of our squad"}
              </p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='800'
                  height='300'
                  src='/images/developers/sense-of-inclusion.svg'
                  alt='sense of inclusion illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='testimonials hidden'></section>
      <FrequentlyAskedQuestion feature='developer' />
      <section className='start-hiring py-16  bg-light-gray'>
        <Container>
          <div className='flex flex-col gap-8 items-center md:flex-row'>
            <p className='section-paragraph text-xl w-3/4'>
              Join our community of (100+) remote developers
            </p>
            <Link href='https://jobs.appexert.com/jobs'>
              <Button
                type='link'
                className='btn-brand-outline md:ml-3'
                size='large'
              >
                View Open Positions
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Developers;
