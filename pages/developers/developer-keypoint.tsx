import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";


const DEVELOPER_KEYPOINTS: { label: string; icon: JSX.Element; para: string ; heading: string }[] =
  [
    { 
      label: "WORK FROM ANYWHERE",
      heading: "Work Remote, Grow Global",
      para: "Imagine sitting comfortably in your room or in your balcony, laptop in your lap, sipping roasted coffee and working for companies across the globe. With AppExert you can work from anywhere(literally). Save the hours that you waste in commuting and let your talent reach places.We are cool even if you work from a deserted island",
      icon: ( <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3427_102296)">
          <circle cx="225" cy="225" r="75" fill="#0C006F"/>
        </g>
        <g clipPath="url(#clip0_3427_102296)">
          <mask id="mask0_3427_102296" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="145" y="145" width="160" height="160">
            <path d="M145 145H305V305H145V145Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_3427_102296)">
            <path fillRule="evenodd" clipRule="evenodd" d="M305 225.537L225 145L145 225.537H223.934L145 305H305L226.066 225.537H305Z" fill="url(#paint0_linear_3427_102296)" fillOpacity="0.7"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3427_102296" x="0" y="0" width="450" height="450" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_3427_102296"/>
          </filter>
          <linearGradient id="paint0_linear_3427_102296" x1="225" y1="215" x2="264.5" y2="315.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A7B5FF"/>
            <stop offset="1" stopColor="#F3ACFF"/>
          </linearGradient>
          <clipPath id="clip0_3427_102296">
            <rect width="160" height="160" fill="white" transform="translate(145 145)"/>
          </clipPath>
        </defs>
      </svg>   )
      
    },
    { 
      label: "ENJOY WORK-LIFE BALANCE",
      heading: "\"Me\" time matters",
      para: "Working for global clients won’t make you a night owl. Our overlapping hours are pre-defined to ensure a balanced work life. Our engagements are long-term so you naturally get flexibility in your work hours. You can make more time for your family or to just relax more.",
      icon: (<svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3427_102288)">
          <circle cx="225" cy="225" r="75" fill="#0C006F"/>
        </g>
        <g clipPath="url(#clip0_3427_102288)">
          <mask id="mask0_3427_102288" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="145" y="145" width="160" height="160">
            <path d="M145 145H305V305H145V145Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_3427_102288)">
            <path fillRule="evenodd" clipRule="evenodd" d="M224.981 225C180.806 224.99 145 189.176 145 145H305C305 189.176 269.194 224.99 225.019 225C269.194 225.01 305 260.824 305 305H145C145 260.824 180.806 225.01 224.981 225Z" fill="url(#paint0_linear_3427_102288)" fillOpacity="0.7"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3427_102288" x="0" y="0" width="450" height="450" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_3427_102288"/>
          </filter>
          <linearGradient id="paint0_linear_3427_102288" x1="225" y1="215" x2="264.5" y2="315.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A7B5FF"/>
            <stop offset="1" stopColor="#F3ACFF"/>
          </linearGradient>
          <clipPath id="clip0_3427_102288">
            <rect width="160" height="160" fill="white" transform="translate(145 145)"/>
          </clipPath>
        </defs>
      </svg>)
      
    },

    { 
      label: "FEEL SECURE IN YOUR JOB",
      heading: "Remote Work with Stability",
      para: "No more stressing out for project durations, price negotiations with clients etc. etc. You will work for hi-tech startups in engagements that are long -term, steady and secure. You will be a full time member and your sole focus would be the product that you work for",
      icon: ( <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3427_102284)">
          <circle cx="225" cy="225" r="75" fill="#0C006F"/>
        </g>
        <g clipPath="url(#clip0_3427_102284)">
          <path fillRule="evenodd" clipRule="evenodd" d="M185 224.5C207.091 224.5 225 206.591 225 184.5C225 206.591 242.909 224.5 265 224.5C242.909 224.5 225 242.409 225 264.5C225 242.409 207.091 224.5 185 224.5ZM185 224.5C162.909 224.5 145 242.409 145 264.5C145 286.591 162.909 304.5 185 304.5C207.091 304.5 225 286.591 225 264.5C225 286.591 242.909 304.5 265 304.5C287.091 304.5 305 286.591 305 264.5C305 242.409 287.091 224.5 265 224.5C287.091 224.5 305 206.591 305 184.5C305 162.409 287.091 144.5 265 144.5C242.909 144.5 225 162.409 225 184.5C225 162.409 207.091 144.5 185 144.5C162.909 144.5 145 162.409 145 184.5C145 206.591 162.909 224.5 185 224.5Z" fill="url(#paint0_linear_3427_102284)" fillOpacity="0.7"/>
        </g>
        <defs>
          <filter id="filter0_f_3427_102284" x="0" y="0" width="450" height="450" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_3427_102284"/>
          </filter>
          <linearGradient id="paint0_linear_3427_102284" x1="225" y1="214.5" x2="264.5" y2="315" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A7B5FF"/>
            <stop offset="1" stopColor="#F3ACFF"/>
          </linearGradient>
          <clipPath id="clip0_3427_102284">
            <rect width="160" height="160" fill="white" transform="translate(145 144.5)"/>
          </clipPath>
        </defs>
      </svg>)
      
    },
    { 
      label: "GET A HANDSOME PACKAGE + AMAZING PERKS",
      heading: "Great Pay with Great Perks",
      para: "We offer the best in the industry salary packages. You get a special allocation of budget towards your home office setup. We take care of your overall well being through our uniquely designed benefits - health insurance, fitness benefits, internet charges, certifications, virtual lunches, courses, books, hobbies, etc",
      icon: ( <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3427_102280)">
          <circle cx="225" cy="225" r="75" fill="#0C006F"/>
        </g>
        <g clipPath="url(#clip0_3427_102280)">
          <path d="M304.931 199.742C304.852 199.232 304.69 198.733 304.493 198.252C304.449 198.148 304.449 198.042 304.402 197.936C304.395 197.929 304.389 197.921 304.385 197.913C304.385 197.901 304.379 197.895 304.373 197.888L286.678 160.316C286.637 160.23 286.561 160.152 286.514 160.064C286.453 159.959 286.432 159.83 286.364 159.725C286.229 159.497 286.045 159.319 285.886 159.115C285.725 158.906 285.578 158.679 285.399 158.494C285.135 158.218 284.833 157.983 284.525 157.754C284.331 157.602 284.149 157.433 283.938 157.31C283.581 157.094 283.193 156.94 282.8 156.793C282.604 156.718 282.413 156.604 282.207 156.547C281.589 156.37 280.95 156.279 280.307 156.277H176.026C175.407 156.277 174.807 156.363 174.223 156.516C174.019 156.57 173.833 156.676 173.632 156.745C173.274 156.88 172.907 156.997 172.572 157.189C172.357 157.313 172.181 157.478 171.982 157.613C171.694 157.817 171.396 158.012 171.141 158.259C170.961 158.436 170.817 158.646 170.657 158.845C170.468 159.067 170.246 159.268 170.092 159.52L146.062 197.093C145.973 197.239 145.93 197.405 145.849 197.561C145.78 197.684 145.666 197.789 145.606 197.924C145.543 198.065 145.54 198.213 145.48 198.348C145.352 198.689 145.248 199.038 145.167 199.393C145.106 199.67 145.059 199.95 145.026 200.231C144.996 200.583 144.992 200.937 145.013 201.289C145.035 201.578 145.056 201.863 145.101 202.144C145.164 202.49 145.273 202.814 145.383 203.147C145.483 203.431 145.572 203.714 145.706 203.981C145.75 204.073 145.769 204.179 145.813 204.274C145.939 204.508 146.125 204.692 146.279 204.903C146.403 205.086 146.477 205.279 146.618 205.443L219.248 291.229C220.501 292.708 222.378 293.758 224.25 293.705C224.273 293.705 224.297 293.716 224.313 293.716C224.417 293.722 224.517 293.722 224.622 293.722H224.637C225.265 293.722 225.881 293.605 226.473 293.447C226.649 293.391 226.808 293.335 226.984 293.268C227.425 293.111 227.85 292.911 228.251 292.669C228.386 292.59 228.53 292.511 228.662 292.423C229.14 292.091 229.589 291.71 229.976 291.25L303.352 205.465C303.446 205.353 303.499 205.219 303.581 205.101C303.698 204.953 303.845 204.83 303.945 204.662C304.05 204.497 304.103 204.31 304.191 204.133C304.315 203.906 304.431 203.677 304.523 203.431C304.661 203.073 304.755 202.71 304.837 202.347C304.89 202.1 304.949 201.865 304.972 201.619C305.019 201.214 305.001 200.82 304.972 200.418C304.954 200.181 304.965 199.959 304.931 199.742Z" fill="url(#paint0_linear_3427_102280)" fillOpacity="0.7"/>
        </g>
        <defs>
          <filter id="filter0_f_3427_102280" x="0" y="0" width="450" height="450" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_3427_102280"/>
          </filter>
          <linearGradient id="paint0_linear_3427_102280" x1="225" y1="216.409" x2="255.208" y2="305.879" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A7B5FF"/>
            <stop offset="1" stopColor="#F3ACFF"/>
          </linearGradient>
          <clipPath id="clip0_3427_102280">
            <rect width="160" height="160" fill="white" transform="translate(145 145)"/>
          </clipPath>
        </defs>
      </svg>)
      
    },
    { 
      label: "GROW WITH LIKE-MINDED DEVELOPERS",
      heading: "Team that lifts you up",
      para: "At AppExert, you work with like-minded developers and get amazing learning opportunities that make your skills globally competent. Our 1-1 mentorship from engineering leaders and top devs help you achieve your career goals faster.",
      icon: ( <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3427_102276)">
          <circle cx="225" cy="225" r="75" fill="#0C006F"/>
        </g>
        <g clipPath="url(#clip0_3427_102276)">
          <path d="M260.38 194.442C231.82 177.067 245.213 152.543 245.788 151.523C246.198 150.81 246.413 150.002 246.412 149.18C246.41 148.358 246.193 147.551 245.781 146.839C245.369 146.128 244.778 145.537 244.066 145.127C243.353 144.716 242.546 144.5 241.724 144.5C227.023 144.5 215.511 148.677 207.508 156.915C193.833 170.992 194.468 192.9 194.739 202.255C194.769 203.292 194.795 204.187 194.795 204.853C194.795 211.799 195.909 218.211 196.892 223.869C197.526 227.516 198.073 230.664 198.171 233.139C198.275 235.79 197.791 236.397 197.77 236.422C197.701 236.504 197.126 236.809 195.572 236.809C193.799 236.809 192.492 236.23 191.333 234.932C186.81 229.859 186.497 216.008 187.362 208.473C187.438 207.816 187.375 207.151 187.176 206.52C186.977 205.89 186.646 205.308 186.207 204.815C185.767 204.321 185.228 203.926 184.624 203.655C184.021 203.384 183.367 203.244 182.706 203.244C170.536 203.244 161.441 223.147 161.441 240.942C161.441 249.307 163.124 257.502 166.443 265.298C169.651 272.835 174.225 279.637 180.04 285.516C192.149 297.758 208.116 304.5 224.998 304.5C241.949 304.5 257.911 297.853 269.945 285.785C281.948 273.747 288.559 257.822 288.559 240.941C288.559 219.403 271.707 201.333 260.38 194.442Z" fill="url(#paint0_linear_3427_102276)" fillOpacity="0.7"/>
        </g>
        <defs>
          <filter id="filter0_f_3427_102276" x="0" y="0" width="450" height="450" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_3427_102276"/>
          </filter>
          <linearGradient id="paint0_linear_3427_102276" x1="225" y1="214.5" x2="271.113" y2="307.713" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A7B5FF"/>
            <stop offset="1" stopColor="#F3ACFF"/>
          </linearGradient>
          <clipPath id="clip0_3427_102276">
            <rect width="160" height="160" fill="white" transform="translate(145 144.5)"/>
          </clipPath>
        </defs>
      </svg>)
      
    },
    { 
      label: "LET YOUR VOICE BE HEARD",
      heading: "Sense of inclusion is everything",
      para: "Tired of the locked up structure of freelance platforms & IT service companies ? Where you are only a vendor, contractor, outsider, freelancer? Our Full-Time engagement model is designed to give value to your voice. You work as a team on projects and experience a true sense of belongingness",
      icon: ( <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3127_108589)">
          <circle cx="225" cy="225" r="75" fill="#0C006F"/>
        </g>
        <g clipPath="url(#clip0_3127_108589)">
          <path fillRule="evenodd" clipRule="evenodd" d="M225 268.102C257.918 268.102 286.481 247.032 300.702 234.338C306.431 229.224 306.431 220.678 300.702 215.563C286.481 202.87 257.918 181.8 224.999 181.8C192.082 181.8 163.519 202.87 149.298 215.563C143.567 220.678 143.567 229.224 149.298 234.338C163.519 247.032 192.083 268.102 225 268.102ZM225 255.056C241.627 255.056 255.105 241.578 255.105 224.95C255.105 208.324 241.627 194.846 224.999 194.846C208.373 194.846 194.895 208.324 194.895 224.95C194.895 241.578 208.374 255.056 225 255.056Z" fill="url(#paint0_linear_3127_108589)" fillOpacity="0.7"/>
        </g>
        <defs>
          <filter id="filter0_f_3127_108589" x="0" y="0" width="450" height="450" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_3127_108589"/>
          </filter>
          <linearGradient id="paint0_linear_3127_108589" x1="224.999" y1="219.557" x2="237.696" y2="279.447" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A7B5FF"/>
            <stop offset="1" stopColor="#F3ACFF"/>
          </linearGradient>
          <clipPath id="clip0_3127_108589">
            <rect width="160" height="160" fill="white" transform="translate(145 145)"/>
          </clipPath>
        </defs>
      </svg>)
      
    },



  ]




const DeveloperKeypoint = () => {
  return (
    <section className='md:py-[100px] pb-32'>
      {DEVELOPER_KEYPOINTS.map((item: any, index: number) => (
        <div className={index % 2 === 0 ? "flex  md:gap-[140px] md:flex-row flex-col " : "flex  md:gap-[140px] md:flex-row-reverse flex-col "} key={index}>        
          <div className='flex  gap-2 text-center md:p-4 p-2  '
          >
            <div className='w-full flex justify-center fill-current max-h-max'>
              {item.icon}
            </div>
          </div>
          <div className='flex flex-col justify-center items-start '>
            <p className='green-label'>{item.label}</p>
            <h1 className='heading pt-2 '>
              {item.heading}
            </h1>
            <p className=" landing-para text-[18px] ">
              {item.para}          </p>

            <div className='flex gap-4 items-center pt-[40px]'>
              <Link href='/companies/start-hiring?step=1'>
                <Button
                  type='primary'
                  className='page-btn-secondary'
                >
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

export default DeveloperKeypoint;
