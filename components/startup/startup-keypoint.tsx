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
      <p className=" landing-para text-[18px] ">
        Most great startups don&apos;t fail, you just end up running out of capital
        before becoming great. By building a capital efficient remote team on
        AppExert, our clients have extended their runway by over 3x getting them
        further much further on their road to Product-Market-Fit.
      </p>
    ),
    icon: (
      <svg
        width="450"
        height="451"
        viewBox="0 0 450 451"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3127_101491)">
          <circle cx="225" cy="225.5" r="75" fill="#0C006F" />
          <circle cx="225" cy="225.5" r="74.5" stroke="#D0CAFF" />
        </g>
        <path
          d="M242.394 142.273H290.879C292.165 142.273 293.398 142.784 294.307 143.693C295.216 144.602 295.727 145.835 295.727 147.121V195.606C295.727 196.892 295.216 198.125 294.307 199.034C293.398 199.944 292.165 200.455 290.879 200.455H242.394C241.108 200.455 239.875 199.944 238.966 199.034C238.056 198.125 237.545 196.892 237.545 195.606V147.121C237.545 145.835 238.056 144.602 238.966 143.693C239.875 142.784 241.108 142.273 242.394 142.273ZM152.697 236.818H201.182C202.468 236.818 203.701 237.329 204.61 238.238C205.519 239.148 206.03 240.381 206.03 241.667V290.152C206.03 291.437 205.519 292.671 204.61 293.58C203.701 294.489 202.468 295 201.182 295H152.697C151.411 295 150.178 294.489 149.269 293.58C148.359 292.671 147.848 291.437 147.848 290.152V241.667C147.848 240.381 148.359 239.148 149.269 238.238C150.178 237.329 151.411 236.818 152.697 236.818ZM273.25 229.526L307.189 287.708C309.073 290.942 306.743 295 303 295H235.121C231.378 295 229.048 290.942 230.932 287.708L264.871 229.526C266.743 226.319 271.378 226.319 273.25 229.526ZM179.364 135C199.446 135 215.727 151.281 215.727 171.364C215.727 191.446 199.446 207.727 179.364 207.727C159.281 207.727 143 191.446 143 171.364C143 151.281 159.281 135 179.364 135Z"
          fill="url(#paint0_linear_3127_101491)"
          fillOpacity="0.7"
        />
        <defs>
          <filter
            id="filter0_f_3127_101491"
            x="0"
            y="0.5"
            width="450"
            height="450"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_3127_101491"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3127_101491"
            x1="225.428"
            y1="205"
            x2="264.065"
            y2="306.287"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7B5FF" />
            <stop offset="1" stopColor="#F3ACFF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "IMAGINE ROUND THE CLOCK PRs & DEVELOPMENTS",
    heading: "Round the clock productivity",
    para: (
      <p className=" landing-para text-[18px] ">
        You can partner with AppExert exclusively or in collaboration with your
        in-house team. Both ways, you get the benefits of our tailored uniquely
        for startups. As a result, you give your startup an increased run
        rate/increased runway time.
      </p>
    ),
    icon: (
      <svg
        width="450"
        height="451"
        viewBox="0 0 450 451"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3127_101519)">
          <circle cx="225" cy="225.5" r="75" fill="#0C006F" />
        </g>
        <g opacity="0.7" clipPath="url(#clip0_3127_101519)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225 305C269.182 305 305 269.182 305 225C305 180.818 269.182 145 225 145C180.818 145 145 180.818 145 225C145 269.182 180.818 305 225 305ZM225 260C244.33 260 260 244.33 260 225C260 205.67 244.33 190 225 190C205.67 190 190 205.67 190 225C190 244.33 205.67 260 225 260Z"
            fill="url(#paint0_linear_3127_101519)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3127_101519"
            x="0"
            y="0.5"
            width="450"
            height="450"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_3127_101519"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3127_101519"
            x1="225"
            y1="215"
            x2="264.5"
            y2="315.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7B5FF" />
            <stop offset="1" stopColor="#F3ACFF" />
          </linearGradient>
          <clipPath id="clip0_3127_101519">
            <rect
              width="160"
              height="160"
              fill="white"
              transform="translate(145 145)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },

  {
    label: "HIRE GREAT DEVELOPERS",
    heading: "Escape from freelance gambling",
    para: (
      <>
        <p className=" landing-para text-[18px] ">
          Opting for freelance platforms might appear as a convenient option,
          but once you start scaling the problems with such platform surfaces
        </p>
        <ul className="list-disc mt-2 ml-4 text-left landing-para text-[18px] ">
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
      <svg
        width="450"
        height="451"
        viewBox="0 0 450 451"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3127_101525)">
          <circle cx="225" cy="225.5" r="75" fill="#0C006F" />
        </g>
        <g clipPath="url(#clip0_3127_101525)">
          <mask
            id="mask0_3127_101525"
            maskUnits="userSpaceOnUse"
            x="135"
            y="135"
            width="180"
            height="180"
          >
            <path d="M135 135H315V315H135V135Z" fill="white" />
          </mask>
          <g mask="url(#mask0_3127_101525)">
            <path
              d="M275.458 264.542L235.914 225L275.458 185.458L315 225L275.458 264.542ZM174.542 264.542L135 225L174.542 185.458L214.086 225L174.542 264.542ZM225 315L185.458 275.458L225 235.914L264.542 275.458L225 315ZM225 214.086L185.458 174.542L225 135L264.542 174.542L225 214.086Z"
              fill="url(#paint0_linear_3127_101525)"
              fillOpacity="0.7"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_3127_101525"
            x="0"
            y="0.5"
            width="450"
            height="450"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_3127_101525"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3127_101525"
            x1="225"
            y1="213.75"
            x2="269.437"
            y2="326.812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7B5FF" />
            <stop offset="1" stopColor="#F3ACFF" />
          </linearGradient>
          <clipPath id="clip0_3127_101525">
            <rect
              width="180"
              height="180"
              fill="white"
              transform="translate(135 135)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "PAY ONLY FOR THE OUTPUT & SAVE OVERHEAD COSTS",
    heading: "Scale it up or down",
    para: (
      <p className=" landing-para text-[18px] ">
        How often do you find yourself wasting hours figuring out how to setup a
        complex AWS task or learning information security to protect your data.
        With AppExert, you can scale up or down on talent on demand bringing in
        the right people to help with complex tasks without having to hire a
        full time DevOps or Security Engineer
      </p>
    ),
    icon: (
      <svg
        width="450"
        height="450"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3127_101557)">
          <circle cx="225" cy="225" r="75" fill="#0C006F" />
          <circle cx="225" cy="225" r="74.5" stroke="#D0CAFF" />
        </g>
        <g clipPath="url(#clip0_3127_101557)">
          <path
            opacity="0.7"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M241 145H209V186.373L179.745 157.118L157.118 179.745L186.373 209H145V241H186.373L157.118 270.254L179.746 292.882L209 263.627V305H241V263.627L270.255 292.882L292.882 270.255L263.627 241H305V209H263.627L292.882 179.745L270.255 157.118L241 186.373V145Z"
            fill="url(#paint0_linear_3127_101557)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3127_101557"
            x="0"
            y="0"
            width="450"
            height="450"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_3127_101557"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3127_101557"
            x1="225"
            y1="215"
            x2="264.5"
            y2="315.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7B5FF" />
            <stop offset="1" stopColor="#F3ACFF" />
          </linearGradient>
          <clipPath id="clip0_3127_101557">
            <rect
              width="160"
              height="160"
              fill="white"
              transform="translate(145 145)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "OUR WORK DOESN'T END WITH BUILDING YOUR TEAM, IT BEGINS THERE!",
    heading: "Action meets accountability",
    para: (
      <>
        <p className=" landing-para text-[18px] ">
          We identified these gaps in freelance & hiring platforms and designed
          AppExert in a way that it brings maximum convenience to founders.
        </p>
        <ul className="list-disc mt-2 ml-4 text-left landing-para text-[18px] ">
          <li>Dedicated account managers</li>
          <li>Simplified communication channels</li>
          <li>Accountability for project completion</li>
          <li>Hiring costs suited for startups</li>
          <li>Rigorous vetting process to onboard the best</li>
        </ul>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="450"
        height="450"
        viewBox="0 0 450 450"
        fill="none"
      >
        <g filter="url(#filter0_f_3127_101563)">
          <circle cx="225" cy="225" r="75" fill="#0C006F" />
        </g>
        <path
          d="M235.449 135L156.139 231.934C152.723 236.109 151.016 238.196 151 239.956C150.987 241.486 151.675 242.939 152.868 243.897C154.24 245 156.937 245 162.331 245H225.449L215.449 315L294.759 218.066C298.174 213.891 299.882 211.804 299.897 210.044C299.911 208.514 299.223 207.061 298.03 206.103C296.658 205 293.961 205 288.567 205H225.449L235.449 135Z"
          fill="url(#paint0_linear_3127_101563)"
          fillOpacity="0.7"
        />
        <defs>
          <filter
            id="filter0_f_3127_101563"
            x="0"
            y="0"
            width="450"
            height="450"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_3127_101563"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3127_101563"
            x1="225.449"
            y1="213.75"
            x2="276.045"
            y2="320.238"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7B5FF" />
            <stop offset="1" stopColor="#F3ACFF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
const StartupKeypoint = () => {
  return (
    <section className="md:py-[100px] pb-32">
      {STARTUP_KEYPOINTS.map((item: any, index: number) => (
        <div
          className={
            index % 2 === 0
              ? "flex  md:gap-[140px] md:flex-row flex-col "
              : "flex  md:gap-[140px] md:flex-row-reverse flex-col "
          }
          key={index}
        >
          <div className="flex  gap-2 text-center md:p-4 p-2  ">
            <div className="w-full flex justify-center fill-current max-h-max">
              {item.icon}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start ">
            <p className="green-label">{item.label}</p>
            <h1 className="heading pt-2 pb-4">{item.heading}</h1>
            {item.para}
            <div className="flex gap-4 items-center pt-[40px]">
              <Link href="/companies/start-hiring?step=1">
                <Button type="primary" className="page-btn-secondary">
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

export default StartupKeypoint;
