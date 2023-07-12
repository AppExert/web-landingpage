import Head from "next/head";
import Container from "@components/container";
import Link from "next/link";
import { Button } from "antd";

const ABOUT_PARA: {
  content: any;
}[] = [
  {
    content:
      "Our story of AppExert didn't begin with a sudden burst of inspiration or a grand eureka moment. It was born out of our genuine quest to solve the global hiring challenges faced by tech. SMBs and developers like you. We understood the struggles of small and medium-sized tech companies in attracting, hiring, and retaining skilled software developers. We recognized the lengthy hiring cycles, the soaring costs, and the constant talent war against tech giants and big corporations. On the other side, we saw a pool of talented developers worldwide, especially in emerging economies, who yearned for opportunities to engage with exciting companies. The available options, freelance platforms or IT outsourcing models, fell short with their overhead charges and lack of transparency, stability, and accountability. We knew there had to be a better way.",
  },
  {
    content:
      "With a deep understanding of these pain points and a shared belief that 'Talent is universal, and opportunities are not,' we embarked on a mission to disrupt the traditional freelance and outsourcing models. Our goal was to simplify global hiring for tech SMBs and qualified remote developers. We wanted to help companies like yours win the talent war, enabling developers to connect and thrive in a trusting work environment like yours.",
  },
  {
    content:
      "We analyzed the existing models tirelessly, seeking out the gaps and shortcomings that hindered the hiring process. That's when AppExert was born – an AI-powered talent marketplace and hiring platform. We leveraged the power of AI + Large Language Models to seamlessly connect small and medium-sized tech companies with highly qualified developers. Our platform is designed to discover, attract, hire, and engage qualified developers with unparalleled convenience.",
  },
  {
    content:
      "But our mission goes beyond connecting talent with companies. What sets AppExert apart is our unwavering commitment to developers like you. We understood that talent knows no boundaries and that you often yearn for exciting global work opportunities without sacrificing your connection to your home, family, and roots.",
  },
  {
    content:
      "With AppExert, we have created the fastest-growing, happiest remote developer community where you can pursue your passions while staying close to what truly matters to you. We have shattered the barriers that limited your potential, empowering you to find work opportunities that align with your values and goals. You no longer have to choose between a fulfilling career and a meaningful connection to your roots.",
  },
  {
    content:
      "The impact of our platform on startups and tech SMBs has been profound. AppExert has transformed its hiring processes, making them more efficient, cost-effective, and successful. By connecting companies with a pool of highly skilled developers like you, we have become the catalyst for innovation and growth.",
  },
  {
    content:
      "Our story is one of perseverance, innovation, and a deep understanding of your needs as a developer and the needs of businesses like yours. We are rewriting the narrative of technical recruitment, paving the way for a future where your dreams can be realized, communities can be strengthened, and the world of remote work can reach unprecedented heights.",
  },
  {
    content:
      "As we continue to evolve and grow, our mission remains the same: to empower developers like you, enable companies to thrive, and create a world where talent knows no boundaries. With AppExert, the possibilities are endless, and our story is only just beginning. Together, let's shape the future of work and unleash the true potential of remote work.",
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>
          About Us - AppExert | Hire Remote Developers without Hassle
        </title>
        <meta
          name='description'
          content='Get in touch with us to Hire Remote Top Developers. Contact us for getting connected with best global companies and startups from independent location'
        />
        <meta
          name='keywords'
          content='appexert contact, call appexert, enquire @ appexert'
        />
        {/* og tags */}
        <meta
          property='og:title'
          content='About US Us - AppExert | Hire Remote Developers without Hassle'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta property='og:url' content='https://appexert.com/about' />
        <meta
          property='og:description'
          content='Get in touch with us to Hire Remote Top Developers. Contact us for getting connected with the best global companies and startups from an independent location'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fcontact_us.svg&w=1920&q=75'
        />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fcontact_us.svg&w=1920&q=75'
        />
      </Head>
      <section className=''>
        <Container>
          <div
            className='px-8 md:py-[100px] text-center overflow-x-hidden max'
            style={{
              backgroundImage: "url('/images/about-us/map.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 150px",
            }}
          >
            <div className='pt-16 md:py-0' />
            <p className='green-label'>ABOUT US</p>
            <h1 className='hero-heading md:text-[48px] text-[32px] pt-2'>
              We’re a distributed team
            </h1>
            <div
              className='p-[30px] mt-[100px] md:py-[48px] md:px-[48px] border-[1px] border-[#43424D] rounded-[12px] text-center max-w-3xl mx-auto'
              style={{
                background:
                  "linear-gradient(135deg, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className='green-label'>OUR MISSION</p>
              <h1 className='heading md:text-[26px] text-[] pt-2'>
                “Simplifying technical hiring for small and medium-sized
                companies by fostering a thriving remote work environment for
                developers to thrive”
              </h1>
            </div>
            <div style={{ position: "relative" }}>
              <div
                className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]'
                style={{
                  width: "1000px",
                  height: "1000px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(37.76% 37.76% at 50.00% 38.71%, rgba(231, 180, 255, 0.20) 0%, rgba(137, 118, 254, 0.20) 100%)",
                  filter: "blur(80px)",
                  zIndex: "1",
                  top: "370px",
                  bottom: "auto",
                }}
              ></div>

              <div
                className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]'
                style={{
                  width: "1000px",
                  height: "800px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(37.76% 37.76% at 50.00% 38.71%, rgba(231, 180, 255, 0.20) 0%, rgba(137, 118, 254, 0.20) 100%)",
                  filter: "blur(80px)",
                  zIndex: "1",
                  bottom: "-100px",
                  top: "auto",
                }}
              ></div>
              <div className='  z-40 relative '>
                <div className='relative my-[100px] ' style={{ zIndex: "2" }}>
                  <div className=' bg-[#020013]  md:px-[32px] md:py-[72px] rounded-[8px]'>
                    <h2 className='text-white text-[36px] mb-[70px]'>
                      Our story
                    </h2>
                    {ABOUT_PARA.map((para, index) => (
                      <p key={index} className='text-[#908E9F] text-[20px] pb-[32px] md:max-w-3xl mx-auto text-left'>
                        {para.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className='flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between items-center p-[30px] md:py-[72px] mb-[72px] md:px-[100px] border-[1px] border-[#43424D] rounded-[12px] '
                style={{
                  background:
                    "linear-gradient(135deg, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h1 className='heading pt-2 pb-4 md:pb-0 md:w-[560px] text-left'>
                  Interested to work with us and contribute to our mission? We
                  would love to chat
                </h1>
                <Link href='/contact'>
                  <Button type='primary' className='page-btn-white'>
                    Get in touch with us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
