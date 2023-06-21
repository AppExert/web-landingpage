/* eslint-disable @typescript-eslint/no-unused-vars */
import { LinkedinFilled } from "@ant-design/icons";
import Container from "@components/container";
import Image from "next/image";
import { useEffect, useState } from "react";

const TESTIMONIALS: {
  name: string;
  company: string;
  content: string;
  image: string;
}[] = [
  {
    name: "Daslin Davidson",
    company: "daslindavidson18",
    content: `Wow! This is awesome. Received my swags from @AppExert ! Thanks for taking the effort in sending out the swag kit. I'm fortunate to work for a company where employees are treated so well. Looking forward to more success in the upcoming years.

      #WorkFromAnywhere #CompanyAnniversaryGifts #RemoteDevelopers @AppExert 🙏👕🎉  #AppExertSwag`,
    image: "/images/community/dasapp.png",
  },
  {
    name: "Sonu Sing",
    company: "sonu-singh-1202a2207",
    content: "At a time when most companies are calling employees back to the office or firing them over a meet, I am chilling in Manali while working on a key deliverable . One of the many perks of #WorkFromAnywhere Thank you #AppExert",
    image: "/images/community/sonu.png",
  },

];

const CommunityStorie = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeTestimonialIdx]);

  const next = () => {
    setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS.length);
  };
  const prev = () => {
    setActiveTestimonialIdx(
      (activeTestimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section className='md:py-16 py-8  '>
      <Container>
        <div className=' text-center pb-6'>

          <div className='section-heading '>
            What our members feel
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='md:w-1/2 rounded-md bg-brand-100 p-5 shadow-2xl md:rounded-r-[15%] z-50'>
            <div className='flex grid-row'>
              <div className='w-[90%]'>
                <p className='section-preheading font-semibold text-black pb-2'>
                  {TESTIMONIALS[activeTestimonialIdx].name}
                </p>
                <p className='section-preheading pb-6'>
                  @{TESTIMONIALS[activeTestimonialIdx].company}
                </p>
              </div>
              <div className=' w-[10%]'>
                <LinkedinFilled  
                  className='mt-[2px] '
                  style={{ fontSize: "2rem", verticalAlign: "top", color: "#0077b5" }} />
              </div>

            </div>
            <div>
              <p className='section-preheading pb-2 h-[230px] lg:h-[120px]'>
                {TESTIMONIALS[activeTestimonialIdx].content}
              </p>
            </div>
          </div>

          <div className='w-[20rem] h-[20rem] relative  -ml-20 md:block hidden'>
            <Image
              src={TESTIMONIALS[activeTestimonialIdx].image}
              layout='fill'
              alt='developer image'
              objectFit='cover'
              objectPosition={"top"}
              className='shadow-md rounded-[40%]'
              
            />
          </div>

        </div>
        
       

      </Container>
    </section>
  );
};

export default CommunityStorie;
