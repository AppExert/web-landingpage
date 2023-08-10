import { Button } from "antd";
import Link from "next/link";

const STARTUP_KEYPOINTS: {
  label: string;
  icon: JSX.Element;
  para: JSX.Element;
  heading: string;
}[] = [
  {
    label: "LONGER LIFELINE",
    heading: "Extend your startup runway 3x",
    para: (
      <p className=' landing-para text-[18px] '>
        Most great startups don&apos;t fail, you just end up running out of
        capital before becoming great. By building a capital efficient remote
        team on AppExert, our clients have extended their runway by over 3x
        getting them further much further on their road to Product-Market-Fit.
      </p>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="165" height="160" viewBox="0 0 165 160" fill="none">
  <path d="M99.3939 7.27273H147.879C149.165 7.27273 150.398 7.78355 151.307 8.69282C152.216 9.60208 152.727 10.8353 152.727 12.1212V60.6061C152.727 61.892 152.216 63.1252 151.307 64.0345C150.398 64.9437 149.165 65.4545 147.879 65.4545H99.3939C98.108 65.4545 96.8748 64.9437 95.9655 64.0345C95.0563 63.1252 94.5454 61.892 94.5454 60.6061V12.1212C94.5454 10.8353 95.0563 9.60208 95.9655 8.69282C96.8748 7.78355 98.108 7.27273 99.3939 7.27273ZM9.69697 101.818H58.1818C59.4677 101.818 60.7009 102.329 61.6102 103.238C62.5195 104.148 63.0303 105.381 63.0303 106.667V155.152C63.0303 156.437 62.5195 157.671 61.6102 158.58C60.7009 159.489 59.4677 160 58.1818 160H9.69697C8.41107 160 7.17784 159.489 6.26857 158.58C5.3593 157.671 4.84848 156.437 4.84848 155.152V106.667C4.84848 105.381 5.3593 104.148 6.26857 103.238C7.17784 102.329 8.41107 101.818 9.69697 101.818ZM130.25 94.5261L164.189 152.708C166.073 155.942 163.743 160 160 160H92.1212C88.3782 160 86.0485 155.942 87.9321 152.708L121.871 94.5261C123.743 91.3188 128.378 91.3188 130.25 94.5261ZM36.3636 0C56.446 0 72.7273 16.2812 72.7273 36.3636C72.7273 56.4461 56.446 72.7273 36.3636 72.7273C16.2812 72.7273 0 56.4461 0 36.3636C0 16.2812 16.2812 0 36.3636 0Z" fill="url(#paint0_linear_367_2059)" fill-opacity="0.7"/>
  <defs>
    <linearGradient id="paint0_linear_367_2059" x1="82.428" y1="70" x2="121.065" y2="171.287" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7B5FF"/>
      <stop offset="1" stop-color="#F3ACFF"/>
    </linearGradient>
  </defs>
</svg>
    ),
  },
  {
    label: "IMAGINE ROUND THE CLOCK PRs & DEVELOPMENTS",
    heading: "Round the clock productivity",
    para: (
      <p className=' landing-para text-[18px] '>
        You can partner with AppExert exclusively or in collaboration with your
        in-house team. Both ways, you get the benefits of our tailored uniquely
        for startups. As a result, you give your startup an increased run
        rate/increased runway time.
      </p>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M80 160C124.182 160 160 124.182 160 80C160 35.8176 124.182 0 80 0C35.8176 0 0 35.8176 0 80C0 124.182 35.8176 160 80 160ZM80 115C99.3296 115 115 99.3296 115 80C115 60.6704 99.3296 45 80 45C60.6704 45 45 60.6704 45 80C45 99.3296 60.6704 115 80 115Z" fill="url(#paint0_linear_367_2087)"/>
  <defs>
    <linearGradient id="paint0_linear_367_2087" x1="80" y1="70" x2="119.5" y2="170.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7B5FF"/>
      <stop offset="1" stop-color="#F3ACFF"/>
    </linearGradient>
  </defs>
</svg>
    ),
  },

  {
    label: "HIRE GREAT DEVELOPERS",
    heading: "Escape from freelance gambling",
    para: (
      <>
        <p className=' landing-para text-[18px] '>
          Opting for freelance platforms might appear as a convenient option,
          but once you start scaling the problems with such platform surfaces
        </p>
        <ul className='list-disc mt-2 ml-4 text-left landing-para text-[18px] '>
          <li>Hard to onboard folks for long term</li>
          <li>Finding the right fit is time consuming</li>
          <li>Top rated freelancers are heavy on pocket</li>
          <li>Unreliable screening processes</li>
          <li>
            Exclusivity is missing since most freelancers have multiple
            commitments
          </li>
        </ul>
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
  <path d="M140.458 129.542L100.914 90L140.458 50.4576L180 90L140.458 129.542ZM39.5424 129.542L0 90L39.5424 50.4576L79.0857 90L39.5424 129.542ZM90 180L50.4576 140.458L90 100.914L129.542 140.458L90 180ZM90 79.0857L50.4576 39.5424L90 0L129.542 39.5424L90 79.0857Z" fill="url(#paint0_linear_367_2097)" fill-opacity="0.7"/>
  <defs>
    <linearGradient id="paint0_linear_367_2097" x1="90" y1="78.75" x2="134.437" y2="191.812" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7B5FF"/>
      <stop offset="1" stop-color="#F3ACFF"/>
    </linearGradient>
  </defs>
</svg>
    ),
  },
  {
    label: "PAY ONLY FOR THE OUTPUT & SAVE OVERHEAD COSTS",
    heading: "Scale it up or down",
    para: (
      <p className=' landing-para text-[18px] '>
        How often do you find yourself wasting hours figuring out how to setup a
        complex AWS task or learning information security to protect your data.
        With AppExert, you can scale up or down on talent on demand bringing in
        the right people to help with complex tasks without having to hire a
        full time DevOps or Security Engineer
      </p>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M96 0H64V41.3728L34.7448 12.1176L12.1184 34.7448L41.3728 64H0V96H41.3728L12.1176 125.254L34.7456 147.882L64 118.627V160H96V118.627L125.255 147.882L147.882 125.255L118.627 96H160V64H118.627L147.882 34.7448L125.255 12.1176L96 41.3728V0Z" fill="url(#paint0_linear_367_2125)"/>
  <defs>
    <linearGradient id="paint0_linear_367_2125" x1="80" y1="70" x2="119.5" y2="170.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7B5FF"/>
      <stop offset="1" stop-color="#F3ACFF"/>
    </linearGradient>
  </defs>
</svg>
    ),
  },
  {
    label: "OUR WORK DOESN'T END WITH BUILDING YOUR TEAM, IT BEGINS THERE!",
    heading: "Action meets accountability",
    para: (
      <>
        <p className=' landing-para text-[18px] '>
          We identified these gaps in freelance & hiring platforms and designed
          AppExert in a way that it brings maximum convenience to founders.
        </p>
        <ul className='list-disc mt-2 ml-4 text-left landing-para text-[18px] '>
          <li>Dedicated account managers</li>
          <li>Simplified communication channels</li>
          <li>Accountability for project completion</li>
          <li>Hiring costs suited for startups</li>
          <li>Rigorous vetting process to onboard the best</li>
        </ul>
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="149" height="180" viewBox="0 0 149 180" fill="none">
  <path d="M84.4488 0L5.13906 96.9341C1.72344 101.109 0.015632 103.196 0.000192813 104.956C-0.0132314 106.486 0.674947 107.939 1.86788 108.897C3.23987 110 5.93682 110 11.3307 110H74.4488L64.4488 180L143.759 83.0659C147.174 78.8912 148.882 76.8039 148.897 75.0439C148.911 73.5135 148.223 72.0613 147.03 71.1026C145.658 70 142.961 70 137.567 70H74.4488L84.4488 0Z" fill="url(#paint0_linear_367_2130)" fill-opacity="0.7"/>
  <defs>
    <linearGradient id="paint0_linear_367_2130" x1="74.4488" y1="78.75" x2="125.045" y2="185.238" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7B5FF"/>
      <stop offset="1" stop-color="#F3ACFF"/>
    </linearGradient>
  </defs>
</svg>
    ),
  },
];
const StartupKeypoint = () => {
  return (
    <section className='pb-32'>
      {STARTUP_KEYPOINTS.map((item: any, index: number) => (
        <div
          className={
            index % 2 === 0
              ? "flex  md:gap-[140px] md:flex-row flex-col max-w-4xl mx-auto md:py-[100px] py-[64px]"
              : "flex  md:gap-[140px] md:flex-row-reverse flex-col max-w-4xl mx-auto md:py-[100px] py-[64px]"
          }
          key={index}
        >
          <div className='relative content-center flex justify-center'>
            <div
              style={{
                background: "#0C006F",
                filter: "blur(75px)",
                zIndex: -1,
              }}
              className='absolute md:w-full w-[50%] h-full mx-auto'
            ></div>
            <div className='w-full h-full flex md:flex-col justify-center content-center fill-current'>
              {item.icon}
            </div>
          </div>
          <div className='flex flex-col justify-center items-start md:mt-[0px] mt-[50px]'>
            <p className='green-label'>{item.label}</p>
            <h1 className='heading pt-2 pb-4'>{item.heading}</h1>
            <p className=' landing-para text-[18px] '>{item.para} </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StartupKeypoint;
