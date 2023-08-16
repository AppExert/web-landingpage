import { Button } from "antd";
import Link from "next/link";

const DEVELOPER_KEYPOINTS: {
  label: string;
  icon: JSX.Element;
  para: string;
  heading: string;
}[] = [
  {
    label: "Acquire new Skills",
    heading: "Acquire new Skills",
    para: "Expand your horizons and acquire new skills confidently. Our platform offers a supportive community where you can freely seek help, resolve doubts, and strengthen existing skills.",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='148'
        height='160'
        viewBox='0 0 148 160'
        fill='none'
      >
        <path
          d='M145.653 40.44L75.6526 0.439985C75.1493 0.151718 74.5793 6.10352e-05 73.9993 6.10352e-05C73.4193 6.10352e-05 72.8493 0.151718 72.346 0.439985L2.34602 40.44C1.83578 40.7314 1.41166 41.1525 1.11662 41.6606C0.821588 42.1687 0.666134 42.7458 0.666016 43.3334V116.667C0.666016 117.86 1.30602 118.967 2.34602 119.56L72.346 159.56C72.8595 159.854 73.426 160 73.9995 160C74.5729 160 75.1395 159.854 75.6529 159.56L145.653 119.56C146.163 119.269 146.587 118.848 146.882 118.34C147.177 117.832 147.333 117.254 147.333 116.667V43.3334C147.333 42.7458 147.177 42.1688 146.882 41.6606C146.587 41.1525 146.163 40.7314 145.653 40.44Z'
          fill='url(#paint0_linear_322_1872)'
          fillOpacity='0.7'
        />
        <defs>
          <linearGradient
            id='paint0_linear_322_1872'
            x1='73.9994'
            y1='70.0002'
            x2='116.022'
            y2='168.008'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A7B5FF' />
            <stop offset='1' stopColor='#F3ACFF' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "Connect with Talented Folks",
    heading: "Connect with Talented Folks",
    para: "Connect with a vibrant community of exceptionally talented developers and expand your professional network, opening doors to endless opportunities and collaborations in the tech industry.",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='157'
        height='117'
        viewBox='0 0 157 117'
        fill='none'
      >
        <path
          d='M154.774 84.566C150.849 107.509 130.321 119.887 115.528 115.66C90.7738 109.925 66.3209 109.925 41.5662 115.66C26.7738 119.887 6.24547 107.509 2.32094 84.566C-0.396042 67.3585 -0.396042 49.8491 2.32094 32.6415C6.24547 9.69812 26.7738 -2.67924 41.5662 1.54718C66.3209 7.28303 90.7738 7.28303 115.528 1.54718C130.321 -2.67924 150.849 9.69812 154.774 32.6415C157.189 50.151 157.189 67.3585 154.774 84.566Z'
          fill='url(#paint0_linear_191_4139)'
          fillOpacity='0.7'
        />
        <defs>
          <linearGradient
            id='paint0_linear_191_4139'
            x1='78.4341'
            y1='51.3692'
            x2='100.958'
            y2='128.752'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A7B5FF' />
            <stop offset='1' stopColor='#F3ACFF' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "Seek Mentor or Be One",
    heading: "Seek Mentor or Be One",
    para: "Become a mentor and share your expertise, or connect with experienced individuals who can provide valuable guidance and mentorship, empowering you to grow personally and professionally in your journey.",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='160'
        height='80'
        viewBox='0 0 160 80'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M160 80H115C115 60.6704 99.3296 45 80 45C60.6704 45 45 60.6704 45 80H0C0 35.8176 35.8176 0 80 0C124.182 0 160 35.8176 160 80Z'
          fill='url(#paint0_linear_191_4145)'
          fillOpacity='0.7'
        />
        <defs>
          <linearGradient
            id='paint0_linear_191_4145'
            x1='80'
            y1='35'
            x2='90.9765'
            y2='90.8554'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A7B5FF' />
            <stop offset='1' stopColor='#F3ACFF' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "Root for Each Other",
    heading: "Root for Each Other",
    para: "Experience a supportive community where you can root for each other's success. Receive peer support, encouragement, and opportunities to grow while also empowering others on their own growth journeys.",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='160'
        height='144'
        viewBox='0 0 160 144'
        fill='none'
      >
        <path
          d='M147.307 14.6806C139.025 5.6975 127.66 0.75 115.304 0.75C106.068 0.75 97.61 3.67 90.1634 9.42812C86.4062 12.3344 83.0016 15.8906 80 20.0406C76.9994 15.8916 73.5938 12.3344 69.8353 9.42812C62.39 3.67 53.9319 0.75 44.6959 0.75C32.34 0.75 20.9741 5.6975 12.6916 14.6806C4.50812 23.5587 0 35.6878 0 48.8347C0 62.3659 5.04281 74.7528 15.8691 87.8166C25.5541 99.5025 39.4737 111.365 55.5931 125.102C61.0975 129.793 67.3366 135.11 73.8147 140.774C75.5264 142.274 77.7246 143.1 80 143.099C82.2742 143.1 84.4713 142.274 86.1828 140.777C92.6609 135.112 98.9038 129.792 104.41 125.098C120.528 111.364 134.447 99.5025 144.132 87.8153C154.958 74.7531 160 62.3662 160 48.8334C160 35.6878 155.492 23.5587 147.307 14.6806Z'
          fill='url(#paint0_linear_191_4171)'
          fillOpacity='0.7'
        />
        <defs>
          <linearGradient
            id='paint0_linear_191_4171'
            x1='80'
            y1='63.0276'
            x2='112.163'
            y2='155.006'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A7B5FF' />
            <stop offset='1' stopColor='#F3ACFF' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const CommunityContent = () => {
  return (
    <section className='pb-32'>
      {DEVELOPER_KEYPOINTS.map((item: any, index: number) => (
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
            {/* <p className='green-label'>{item.label}</p> */}
            <h1 className='heading pt-2 pb-4'>{item.heading}</h1>
            <p className=' landing-para text-[18px] '>{item.para} </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommunityContent;
