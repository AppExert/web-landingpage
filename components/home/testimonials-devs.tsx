import Container from "@components/container";
import Image from "next/image";
import { useEffect, useState } from "react";

const TESTIMONIALS: {
  name: string;
  role: string;
  content: string;
  image: string;
}[] = [
  {
    name: "Jain Thomas",
    role: "Azure BI Architect",
    content: "I've been with AppExert for a year now. It's a great place to work, it provides a very conducive environment to learn, grow and prosper. The freedom to work in a way that allows me to maximize my efficiency and become great in my role. #remote = work + life. I feel great to work with a young, smart and energetic team, \"together we accomplish\". It helped me acquire significant skills and contribute to software development. I am glad to be a part of this organization and an awesome team!",
    image: "/images/home/devs/jain.png",
  },
  {
    name: "Boobalan",
    role: "Full Stack Developer",
    content: "It has been a wonderful journey with AppExert. I am grateful for the opportunity and faith it kept with me. Helped me to rediscover and gain experience not only technically but across different verticals, organically, all with a great work-life balance. Being a remote team, I am fortunate to work with great, like-minded, self-motivated individuals who make the team environment better and healthy. Wishing the best for continued success together.Thanks again for all the love and support.",
    image: "/images/home/devs/boobalan.png",
  },
  {
    name: "Krishveni",
    role: ".NET Developer",
    content: "As an Application Developer, I preferred a place that is supportive, encouraging and upbeat. I'm glad I joined this team of exceptionally talented remote developers. I could say AppExert has a great learning environment which is also fun filled that can keep me motivated to learn and grow. The freedom to work from anywhere remotely is a great way to work more efficiently and for work life balance. It's been great to work as an AppExert Developer.",
    image: "/images/home/devs/krishveni.png",
  },
  {
    name: "Nidhi Sharma",
    role: "Software Developer",
    content: `AppExert is a great place to work, learn and grow. AppExert has great people who are very supportive and encouraging.
    Every day I get new opportunities to learn and grow. The freedom to work from home remotely is a great way to work more efficiently and for work life balance. It's been great to work with AppExert`,
    image: "/images/home/devs/nidhi.png",
  },
  {
    name: "Daslin Davidson",
    role: "Software Developer",
    content: "Working with AppExert has been a fantastic experience, it is an opportunity for me to grow professionally and personally. I have been working here for over 2 years now and everyday is a new experience. AppExert helped me to expand my knowledge, learn something new, and move up the ladder. They helped in training & development with subscriptions for outdoor courses and more to gain additional skills from experienced Tech Leads",
    image: "/images/home/devs/daslin.png",
  },
  {
    name: "Piyush Saxena",
    role: "Senior Software Developer",
    content: `I am with AppExert since August 2020 and it is a very good place to work. AppExert allows us to work on different technologies which helps to upgrade our technical skills. Working remotely allows us to maintain a proper balance in work and life and deliver the best.
    Management is excellent and employee friendly. All team members are very helpful and cooperative and I feel great to be part of such a team.
    Looking forward to work with AppExert for many more years`,
    image: "/images/home/devs/piyush.png",
  },
  {
    name: "Asarudeen",
    role: "Software Developer",
    content: "It's been more than a year now I'm working with AppExert, the work from anywhere model is giving me the freedom of life and control. There is no compromise on work life balance.  The Management team is supportive and down-to-earth, they listen to us in every case and help us to grow.",
    image: "/images/home/devs/asarudeen.png",
  },
  {
    name: "Dinesh Rajendran",
    role: "Staff Software Developer",
    content: "I've been enjoying a good work-life balance for the past 2+ years with AppExert. The fully Remote position has made my life flexible by cutting our commute time. It has provided me with a platform to up-skill, expand my capabilities, and helped to accelerate my growth. To top it off I've had the privilege to work on challenging projects along with talented people. I'm grateful for this opportunity and excited to see what the future holds for me. ",
    image: "/images/home/devs/dinesh.png",
  },
];

const TestimonialsDevs = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isTestimonialActive, setIsTestimonialActive] = useState(true);

  useEffect(() => {
    setIsTestimonialActive(true);
    const interval = setInterval(() => {
      setIsTestimonialActive(true);
      setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
      setTimeout(() => setIsTestimonialActive(false), 7700); // wait for fade-out animation to finish before resetting
    }, 8000);

    return () => clearInterval(interval);
  }, [activeTestimonialIdx]);

  const prev = () => {
    setIsTestimonialActive(true);
    setActiveTestimonialIdx(
      (activeTestimonialIdx + TESTIMONIALS.length - 1) % TESTIMONIALS.length
    );
  };

  const next = () => {
    setIsTestimonialActive(true);
    setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
  };

  return (
    <section className='py-16'>
      <Container>
        <div className='text-center'>
          <p className='section-preheading pb-4'>
            {`Read what it's like to work on global projects from the comfort of
          your home`}
          </p>
          <div className='section-heading inline relative'>
            <span>Developers</span>{" "}
            <Image
              src='/images/home/heart-icon.svg'
              width='20'
              height='20'
              alt='heart icon'
              className=''
            />
            <span className='ml-2'>AppExert</span>
            <span className='w-40 border-b-4 border-brand-500 block mt-2 absolute left-0 md:block'></span>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex justify-center cursor-pointer' onClick={prev}>
            <Image
              width={50}
              height={50}
              src='/images/home/gif/arrow-left.gif'
              alt='left'
            />
          </div>

          <div
            className={`md:mx-40 mx-3 mt-4 testimonial-wrapper w-full ${
              isTestimonialActive ? "" : "fade-out"
            }`}
          >
            <div className='flex flex-col md:flex-row gap-2 justify-between items-center mt-8'>
              <div className='md:w-3/5'>
                <div className='relative '>
                  <span className='absolute -top-6 -left-2'>
                    <Image
                      src='/images/home/quote-icon.svg'
                      width={20}
                      height={20}
                      layout='fixed'
                      alt='quote'
                    />
                  </span>
                  <p className='section-preheading h-[300px] md:h-[300px] lg:h-[160px] '>
                    {TESTIMONIALS[activeTestimonialIdx].content}
                  </p>
                  <span className='absolute -bottom-6 -right-2 -scale-x-1'>
                    <Image
                      src='/images/home/quote-icon.svg'
                      width={20}
                      height={20}
                      layout='fixed'
                      alt='quote'
                    />
                  </span>
                </div>

                <div className='flex gap-4 items-center mt-8 md:mt-0 justify-center md:justify-start'>
                  <div className='md:mt-8'>
                    <p className='font-semibold'>
                      {TESTIMONIALS[activeTestimonialIdx].name}
                    </p>
                    <p>{TESTIMONIALS[activeTestimonialIdx].role}</p>
                  </div>

                  <div className='block md:hidden w-20 h-20 relative rounded-full '>
                    <Image
                      src={TESTIMONIALS[activeTestimonialIdx].image}
                      layout='fill'
                      alt='developer image'
                      unoptimized={true}
                      objectFit='cover'
                      objectPosition={"top"}
                      className='shadow-md rounded-full'
                    />
                  </div>
                </div>
              </div>
              <div className='hidden md:block w-2/5 h-80 relative rounded-md'>
                <Image
                  src={TESTIMONIALS[activeTestimonialIdx].image}
                  layout='fill'
                  unoptimized={true}
                  alt='developer image'
                  objectFit='contain'
                  className='shadow-md'
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center cursor-pointer' onClick={next}>
            <Image
              width={50}
              height={50}
              src='/images/home/gif/arrow-right.gif'
              alt='right'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsDevs;
