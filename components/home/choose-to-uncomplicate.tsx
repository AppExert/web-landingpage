import Container from "@components/container";
import Image from "next/image";

const STEPS: { icon: string; title: string; content: string }[] = [
  {
    icon: "/images/home/icon-vetted.svg",
    title: "Vetted & Verified Resources",
    content: `Developers effectively screened through a 3 step process of
    coding challenges, tech & soft skills tests, and background
    checks`,
  },
  {
    icon: "/images/home/icon-ai-driven.svg",
    title: "AI-Driven Matchmaking",
    content: "AI-backed technology to easily find, hire and manage the best remote developers",
  },
  {
    icon: "/images/home/icon-remote-team.svg",
    title: "Remote Team Management",
    content: "From payroll to retirement benefits, leave the heavy lifting of team management on us",
  },
  {
    icon: "/images/home/icon-skills.svg",
    title: "100+ Skills",
    content: "Vetted developers with profound technical skills in Linux, Apache, Node, Python, MySQL, and many more",
  },
];

const ChooseToUncomplicate = () => {
  return (
    <section className='py-16'>
      <Container className=''>
        <div className='text-center'>
          <p className='section-preheading pb-2'>
            We are obsessed with making your work life simple!
          </p>
          <div className='relative inline'>
            <h2 className='section-heading inline '>Choose to uncomplicate with AppExert
            </h2>
            <span className='w-40 border-b-4 border-brand-500 block mt-2 absolute left-0 md:block'></span>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mt-16 items-center gap-8 md:justify-between'>
          
          <div className='md:w-1/2 flex flex-col gap-8 max-w-lg'>
            {STEPS.map(({ icon, title, content }, idx) => (
              <div className='flex gap-4' key={idx}>
                <div className=''>
                  <Image
                    src={icon}
                    layout='fixed'
                    width={64}
                    height={64}
                    alt='icons'
                  />
                </div>
                <div className='w-full'>
                  <p className='text-lg font-semibold'>{title}</p>

                  <p className='mt-2'>{content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='relative w-full md:w-1/2' style={{ height: 400 }}>
            <Image
              src='/images/home/choose-to-uncomplicate.png'
              alt='choose to uncomplicate'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChooseToUncomplicate;
