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
        width='450'
        height='450'
        viewBox='0 0 450 450'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f_1_204)'>
          <circle cx='225' cy='225' r='75' fill='#0C006F' />
        </g>
        <g clipPath='url(#clip0_1_204)'>
          <path
            d='M296.653 185.44L226.653 145.44C226.15 145.152 225.58 145 225 145C224.42 145 223.85 145.152 223.347 145.44L153.347 185.44C152.837 185.731 152.413 186.153 152.117 186.661C151.822 187.169 151.667 187.746 151.667 188.333V261.667C151.667 262.86 152.307 263.967 153.347 264.56L223.347 304.56C223.86 304.854 224.427 305 225 305C225.574 305 226.14 304.854 226.654 304.56L296.654 264.56C297.164 264.269 297.588 263.848 297.883 263.34C298.178 262.832 298.334 262.255 298.334 261.667V188.333C298.334 187.746 298.178 187.169 297.883 186.661C297.588 186.153 297.164 185.731 296.653 185.44Z'
            fill='url(#paint0_linear_1_204)'
            fillOpacity='0.7'
          />
        </g>
        <defs>
          <filter
            id='filter0_f_1_204'
            x='0'
            y='0'
            width='450'
            height='450'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='75'
              result='effect1_foregroundBlur_1_204'
            />
          </filter>
          <linearGradient
            id='paint0_linear_1_204'
            x1='225'
            y1='215'
            x2='267.022'
            y2='313.008'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A7B5FF' />
            <stop offset='1' stopColor='#F3ACFF' />
          </linearGradient>
          <clipPath id='clip0_1_204'>
            <rect
              width='160'
              height='160'
              fill='white'
              transform='translate(145 145)'
            />
          </clipPath>
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
        width='450'
        height='450'
        viewBox='0 0 450 450'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f_3180_110494)'>
          <circle cx='225' cy='225' r='75' fill='#0C006F' />
        </g>
        <path
          d='M300.774 251.566C296.849 274.509 276.321 286.887 261.528 282.66C236.774 276.924 212.321 276.924 187.566 282.66C172.774 286.887 152.245 274.509 148.321 251.566C145.604 234.358 145.604 216.849 148.321 199.641C152.245 176.698 172.774 164.321 187.566 168.547C212.321 174.283 236.774 174.283 261.528 168.547C276.321 164.321 296.849 176.698 300.774 199.641C303.189 217.151 303.189 234.358 300.774 251.566Z'
          fill='url(#paint0_linear_3180_110494)'
          fillOpacity='0.7'
        />
        <defs>
          <filter
            id='filter0_f_3180_110494'
            x='0'
            y='0'
            width='450'
            height='450'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='75'
              result='effect1_foregroundBlur_3180_110494'
            />
          </filter>
          <linearGradient
            id='paint0_linear_3180_110494'
            x1='224.434'
            y1='218.369'
            x2='246.958'
            y2='295.752'
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
        width='450'
        height='451'
        viewBox='0 0 450 451'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f_3180_110500)'>
          <circle cx='225' cy='225.5' r='75' fill='#0C006F' />
        </g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M305 265H260C260 245.67 244.33 230 225 230C205.67 230 190 245.67 190 265H145C145 220.818 180.818 185 225 185C269.182 185 305 220.818 305 265Z'
          fill='url(#paint0_linear_3180_110500)'
          fillOpacity='0.7'
        />
        <defs>
          <filter
            id='filter0_f_3180_110500'
            x='0'
            y='0.5'
            width='450'
            height='450'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='75'
              result='effect1_foregroundBlur_3180_110500'
            />
          </filter>
          <linearGradient
            id='paint0_linear_3180_110500'
            x1='225'
            y1='220'
            x2='235.977'
            y2='275.855'
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
        width='450'
        height='451'
        viewBox='0 0 450 451'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f_3180_110526)'>
          <circle cx='225' cy='225.5' r='75' fill='#0C006F' />
        </g>
        <path
          d='M292.307 167.681C284.025 158.697 272.66 153.75 260.304 153.75C251.068 153.75 242.61 156.67 235.163 162.428C231.406 165.334 228.002 168.891 225 173.041C221.999 168.892 218.594 165.334 214.835 162.428C207.39 156.67 198.932 153.75 189.696 153.75C177.34 153.75 165.974 158.697 157.692 167.681C149.508 176.559 145 188.688 145 201.835C145 215.366 150.043 227.753 160.869 240.817C170.554 252.502 184.474 264.365 200.593 278.102C206.097 282.793 212.337 288.11 218.815 293.774C220.526 295.274 222.725 296.1 225 296.099C227.274 296.1 229.471 295.274 231.183 293.777C237.661 288.112 243.904 282.792 249.41 278.098C265.528 264.364 279.447 252.502 289.132 240.815C299.958 227.753 305 215.366 305 201.833C305 188.688 300.492 176.559 292.307 167.681Z'
          fill='url(#paint0_linear_3180_110526)'
          fillOpacity='0.7'
        />
        <defs>
          <filter
            id='filter0_f_3180_110526'
            x='0'
            y='0.5'
            width='450'
            height='450'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='75'
              result='effect1_foregroundBlur_3180_110526'
            />
          </filter>
          <linearGradient
            id='paint0_linear_3180_110526'
            x1='225'
            y1='216.028'
            x2='257.163'
            y2='308.006'
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
              ? "flex  md:gap-[140px] md:flex-row flex-col "
              : "flex  md:gap-[140px] md:flex-row-reverse flex-col "
          }
          key={index}
        >
          <div className='flex  gap-2 text-center md:p-4 p-2  '>
            <div className='w-full flex justify-center fill-current max-h-max'>
              {item.icon}
            </div>
          </div>
          <div className='flex flex-col justify-center items-start '>
            {/* <p className='green-label'>{item.label}</p> */}
            <h1 className='heading pt-2 pb-4'>{item.heading}</h1>
            <p className=' landing-para text-[18px] '>{item.para} </p>

            <div className='pt-[40px]'>
              <Link
                href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
              >
                <Button type='primary' className='page-btn-secondary'>
                  Explore now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommunityContent;
