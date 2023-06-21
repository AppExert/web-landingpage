import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@components/container";
import { Button } from "antd";
import { useEffect } from "react";
import FrequentlyAskedQuestion from "./faq";

const ForCompanies = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>
          Hire Full Time Remote Developers to Work from Anywhere | AppExert
        </title>
        <meta
          name='description'
          content='Hire FastTrack & Remote-Ready Devs to Work From Anywhere. AppExert helps you Hire Developers handpicked from our vetted pool of global tech talents.'
        />
        <meta
          name='keywords'
          content='hire remote developers, hire engineers,  hire full time remote developers, appexert'
        />
        {/* og tags */}
        <meta
          property='og:title'
          content='Hire Full Time Remote Developers to Work from Anywhere | AppExert'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta property='og:url' content='https://appexert.com/companies' />
        <meta
          property='og:description'
          content='Hire FastTrack & Remote-Ready Devs to Work From Anywhere. AppExert helps you Hire Developers handpicked from our vetted pool of global tech talents.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fcompanies%2Freduce_hire_time.svg&w=640&q=75'
        />
      </Head>

      <section className='hero py-16 lg:py-32'>
        <Container>
          <div className='max-w-screen-md lg:max-w-screen-lg m-auto relative '>
            <div className='text-center'>
              <h1 className='hero-heading'>
                Build successful products with our team of vetted remote
                developers
              </h1>

              <p className='section-paragraph my-8'>
                We help you hire great developers handpicked from our vetted
                pool of global tech talent
              </p>
              <div className='flex items-center justify-center'>
                <Link href='/'>
                  <Button
                    type='primary'
                    className='btn-brand px-8'
                    size='large'
                  >
                    Hire Developers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='how-get-started py-16 bg-light-gray  lg:py-32 text-center'>
        <Container>
          <p className='section-preheading'>3 Step Process</p>
          <h2 className='section-heading'>How to get started?</h2>
          <div className='flex flex-col mt-8 gap-8 md:flex-row md:mt-8 lg:mt-16'>
            <div className='flex flex-col gap-2 items-center py-4 md:py-0'>
              <Image
                layout='fixed'
                width='200'
                height='200'
                src='/images/companies/connect.svg'
                alt='connect icon'
              />
              <h3 className='font-semibold text-gray-800 md:text-xl'>
                Connect
              </h3>
              <p>
                {`Let's discuss to understand your requirements, work culture
                better`}
              </p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Image
                layout='fixed'
                width='200'
                height='200'
                src='/images/companies/interview.svg'
                alt='interview icon'
              />
              <h3 className='font-semibold text-gray-800 md:text-xl'>
                Interview
              </h3>
              <p>
                Interview and choose the best fit from our curated developers
                list
              </p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Image
                layout='fixed'
                width='200'
                height='200'
                src='/images/companies/onboard.svg'
                alt='onboard icon'
              />

              <h3 className='font-semibold text-gray-800 md:text-xl'>
                Onboard
              </h3>
              <p>Onboard your next team member. Leave the rest to us!</p>
            </div>
          </div>
        </Container>
      </section>
      <section className='reduce-hire-time py-16 lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row-reverse md:items-center lg:gap-16'>
            <div className='md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>Reduce Hire Time</p>
              <h2 className='section-heading'>Top Developers, On-Demand</h2>

              <p className='section-paragraph'>
                In less than 3 weeks, you will have a team of
                talented-vetted-AWESOME developers onboarded and building the
                product. With AppExert, you can bring down your hiring effort
                and time to almost zero.
              </p>

              <p className='section-tagline'>{"Don't just grow. Grow Fast!"}</p>
            </div>

            <div className='md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='400'
                  src='/images/companies/reduce_hire_time.svg'
                  alt='developer illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='get-exceptional-value py-16 bg-light-gray  lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row md:items-center lg:gap-16'>
            <div className='md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>Get Exceptional Value</p>
              <h2 className='section-heading'>Quality meets Affordability</h2>

              <p className='section-paragraph'>
                {`The world has always asked you to choose between quality and
                affordability (we won't). With AppExert, you can hire a bunch of
                talented developers at one-third of the actual cost. Our pricing
                starts from 18$/Hr.`}
              </p>

              <p className='section-tagline'>
                {"  Don't spend 99$, when you can get it for 33$"}
              </p>
            </div>
            <div className='md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='400'
                  src='/images/companies/get_exceptional_value.svg'
                  alt='choose profiles illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='unique-remote-hire-model py-16 lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row-reverse md:items-center lg:gap-16'>
            <div className='md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>Unique Remote Hire Model</p>
              <h2 className='section-heading'>Remote hiring at its best</h2>

              <p className='section-paragraph'>
                {` Tired of freelance models? We would be too, as the
                accountability remains an issue. We believe, ownership &
                undivided focus is the key to any team's success. Try our full-time engagement Model
                 powered by a sense of belonging.`}
              </p>

              <p className='section-tagline'>
                We exist to solve your pain points!
              </p>
            </div>
            <div className='md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='400'
                  src='/images/companies/unique_remote_model.svg'
                  alt='remote hiring illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='high-quality-developers py-16 bg-light-gray  lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row md:items-center lg:gap-16'>
            <div className='md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>High quality developers</p>
              <h2 className='section-heading'>Consistent Hiring Bar</h2>

              <p className='section-paragraph'>
                Our vetting process is crafted to handpick the best. With our
                unique hiring practices from sourcing, screening, technical
                interviews, coding challenges and interpersonal tests, we ensure
                you have access to the best tech talents.
              </p>
              <p className='section-tagline'>
                {" Let's raise your talent bar, high!"}
              </p>
            </div>
            <div className='md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='400'
                  src='/images/companies/consistent_hiring_bar.svg'
                  alt='select candidates illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='true-partnership-approach py-16 lg:py-32'>
        <Container>
          <div className='flex flex-col gap-2 md:flex-row-reverse md:items-center lg:gap-16'>
            <div className='md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>True partnership approach</p>
              <h2 className='section-heading'>Remote work made easy</h2>

              <p className='section-paragraph'>
                We ensure a smooth & secure remote adoption journey. We
                efficiently manage payroll, health insurance, retirement
                benefits, learning, rewards, hardware provisions and more. Your
                sole focus would be your product.
              </p>

              <p className='section-tagline'>
                You create. We manage pretty much everything else
              </p>
            </div>
            <div className='md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='400'
                  src='/images/companies/remote_work_made_easy.svg'
                  alt='remote work illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='skills py-16 bg-light-gray  lg:py-32'>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row lg:gap-16'>
            <div className='md:w-2/3 lg:w-1/2'>
              <p className='section-preheading'>100+ skills available</p>
              <h2 className='section-heading'>Technologies we use</h2>
              <p className='section-paragraph'>
                {`  We're a global workforce for remote tech talent. We specialize
                in a vast set of technical skills and technologies that you will
                ever need for your product development. Your talent hunt stops
                right here because we have it all.`}
              </p>
              <p className='section-tagline'>
                {"Let's find the skill set your team needs!"}
              </p>
            </div>
            <div className='md:w-1/3 lg:w-1/2'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  layout='fixed'
                  width='400'
                  height='400'
                  src='/images/companies/skills_available.svg'
                  alt='technologies honeycomb illustration'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='testimonials hidden'></section>
      <FrequentlyAskedQuestion feature='company' />
      <section className='start-hiring py-16 bg-light-gray'>
        <Container>
          <div className='flex flex-col gap-8 items-center md:flex-row'>
            <p className='text-center md:text-left section-paragraph text-xl md:w-3/4'>
              We help you build successful products, faster and leaner
            </p>
            <Link href='/'>
              <a>
                <Button type='primary' className='btn-brand px-8' size='large'>
                  Hire Developers
                </Button>
              </a>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ForCompanies;
