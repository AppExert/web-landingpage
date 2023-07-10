import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import Container from "@components/container";
import { Button } from "antd";
import { useState, useRef } from "react";

const DEVELOPER_BENEFITS: { name: string; icon: JSX.Element; text: string }[] =
  [
    {
      name: "Home Office Support",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3189_110749)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3189_110749)'>
            <mask
              id='mask0_3189_110749'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='51'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M74.9691 74.3V51.7001H52.3692V74.3H74.9691Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3189_110749)'>
              <path
                d='M73.4192 67.875V73.125H64.4192V67.875'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M64.4192 67.875V62.625H73.4192V67.875'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M53.9192 62.625V74.2969'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M74.966 62.625H52.3723'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M72.2942 73.125V74.2969'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M65.5442 73.125V74.2969'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M64.4192 67.125H53.9192'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M56.5442 62.625C56.5442 61.4241 57.4676 60.0689 58.1314 59.25'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M60.2004 59.25C60.8642 60.0689 61.7876 61.4241 61.7876 62.625'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M54.6223 59.25H63.716C64.1043 59.25 64.4192 58.9352 64.4192 58.5469V52.4063C64.4192 52.018 64.1043 51.7031 63.716 51.7031H54.6223C54.234 51.7031 53.9192 52.018 53.9192 52.4063V58.5469C53.9192 58.9352 54.234 59.25 54.6223 59.25Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M68.1223 54.4688H72.716C73.1044 54.4688 73.4192 54.7836 73.4192 55.1719V61.9219C73.4192 62.3102 73.1044 62.625 72.716 62.625H68.1223C67.734 62.625 67.4192 62.3102 67.4192 61.9219V55.1719C67.4192 54.7836 67.734 54.4688 68.1223 54.4688Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M73.4192 58.5H67.4192'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3189_110749'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3189_110749'
              />
            </filter>
            <clipPath id='clip0_3189_110749'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51.6692 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Support to set up your home office - a laptop, keyboard, mouse, headphones, chair, & additional monitors as needed",
    },
    {
      name: "Remote Co-Working Pods",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111474)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111474)'>
            <mask
              id='mask0_3647_111474'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='51'
              y='51'
              width='24'
              height='24'
            >
              <path
                d='M74.2999 74.3V51.7001H51.7V74.3H74.2999Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111474)'>
              <path
                d='M68.2812 56.3742V54.0243H72.4666V60.3438'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M51.7031 74.2969H74.2968'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M53.5312 74.2891V60.5851'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M72.4609 60.5851V74.2891'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M73.7903 61.7891L63.0469 51.7051'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M52.25 61.7891L62.9935 51.7051'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M57.9766 74.2656V68.2793C57.9766 67.1774 58.8699 66.2841 59.9717 66.2841H66.0261C67.128 66.2841 68.0213 67.1774 68.0213 68.2793V69.1003'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M60.3985 62.0391V59.8382C60.3892 58.8253 61.2096 58.0042 62.2216 58.0042H65.6009V60.8305'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M63.3567 66.2461H62.6425C61.4032 66.2461 60.3984 65.2404 60.3984 63.9999V62.0393C60.3984 61.0224 61.2221 60.8307 62.2381 60.8307H65.6008V63.9999C65.6008 65.2404 64.596 66.2461 63.3567 66.2461Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M61 74.2656V69.1003H69.1958V74.2656'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111474'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111474'
              />
            </filter>
            <clipPath id='clip0_3647_111474'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Utilize our remote co-working pods for noise control, privacy, and personal space to maximize productivity",
    },
    {
      name: "Career Mentorship Program",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111492)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111492)'>
            <mask
              id='mask0_3647_111492'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='51'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M74.9718 74.3V51.7001H52.3719V74.3H74.9718Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111492)'>
              <path
                d='M61.2812 54.5156V53.1094C61.2812 52.3328 60.6516 51.7031 59.875 51.7031C59.0984 51.7031 58.4688 52.3328 58.4688 53.1094V54.5156'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M61.2812 58.2656V61.0781'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M58.4688 61.0781V58.2656'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M58.4688 64.8282V74.2969H61.2812V64.8282'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M74.0312 74.2969H66.5312C66.0135 74.2969 65.5938 73.8772 65.5938 73.3594V67.7344C65.5938 67.2166 66.0135 66.7969 66.5312 66.7969H74.0312C74.549 66.7969 74.9687 67.2166 74.9687 67.7344V73.3594C74.9687 73.8772 74.549 74.2969 74.0312 74.2969Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M71.2187 63.9844H69.3437C68.826 63.9844 68.4062 64.4041 68.4062 64.9219V66.7969H72.1562V64.9219C72.1562 64.4041 71.7365 63.9844 71.2187 63.9844Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M73.0937 69.6094H67.4687C66.4332 69.6094 65.5938 68.7699 65.5938 67.7344C65.5938 67.2166 66.0135 66.7969 66.5312 66.7969H74.0312C74.549 66.7969 74.9687 67.2166 74.9687 67.7344C74.9687 68.7699 74.1293 69.6094 73.0937 69.6094Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M72.1562 71.0156V69.6094'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M68.4062 71.0156V69.6094'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M65.5 58.2656L67.375 56.3906L65.5 54.5156H55.1875V58.2656H65.5Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M54.25 64.8281L52.375 62.9531L54.25 61.0781H64.5625V64.8281H54.25Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111492'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111492'
              />
            </filter>
            <clipPath id='clip0_3647_111492'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51.6719 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Develop skills & support equality, diversity, and inclusion efforts. A mentor guides you & helps excel in your career",
    },
    {
      name: "Learning & Development Program",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111511)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111511)'>
            <path
              d='M75.2967 54.1781H71.5273L64.2224 51.7431C64.0746 51.6939 63.9147 51.6951 63.7677 51.7465L56.8202 54.1781H52.7033C52.3149 54.1781 52 54.493 52 54.8814V70.7678C52 71.1562 52.3149 71.4711 52.7033 71.4711H59.0604V72.8886H56.9395C56.5511 72.8886 56.2362 73.2035 56.2362 73.5919C56.2362 73.9803 56.5511 74.2952 56.9395 74.2952H71.0605C71.4489 74.2952 71.7638 73.9803 71.7638 73.5919C71.7638 73.2035 71.4489 72.8886 71.0605 72.8886H68.9396V71.4711H75.2967C75.6851 71.4711 76 71.1562 76 70.7678V54.8814C76 54.493 75.6852 54.1781 75.2967 54.1781ZM60.1141 56.7377C63.8813 58.0593 63.8291 58.0559 64 58.0559C64.1628 58.0559 64.1107 58.0593 67.8859 56.7987V58.6347L64 60.1295L60.1141 58.6347V56.7377ZM64.0055 53.1535L69.1895 54.8815L64.0055 56.6095L59.0684 54.8815L64.0055 53.1535ZM67.533 72.8886H60.467V71.4711H67.533V72.8886H67.533ZM74.5934 70.0645H53.4066V55.5847H56.8197L58.7075 56.2454V59.1178C58.7075 59.2599 58.7506 59.3987 58.8311 59.5159C58.9115 59.6331 59.0256 59.7231 59.1583 59.7742C63.8514 61.5837 63.8133 61.5863 64 61.5863C64.1866 61.5863 64.1506 61.5877 68.8417 59.7742C68.9744 59.7231 69.0885 59.6331 69.1689 59.5159C69.2494 59.3987 69.2925 59.2599 69.2925 59.1178V56.3298L70.7103 55.8572V59.8239C70.7103 60.2123 71.0252 60.5272 71.4136 60.5272C71.802 60.5272 72.1169 60.2123 72.1169 59.8239V55.5847H74.5934V70.0645Z'
              fill='#D0CAFF'
            />
            <path
              d='M58.3478 63.7109H55.5236C55.1352 63.7109 54.8203 64.0258 54.8203 64.4142V67.2384C54.8203 67.6268 55.1352 67.9417 55.5236 67.9417H58.3478C58.7362 67.9417 59.0511 67.6268 59.0511 67.2384V64.4142C59.0511 64.0258 58.7362 63.7109 58.3478 63.7109ZM57.6445 66.5351H56.2269V65.1175H57.6445V66.5351ZM61.172 63.7109C60.7836 63.7109 60.4687 64.0258 60.4687 64.4142C60.4687 64.8026 60.7836 65.1175 61.172 65.1175H72.4688C72.8572 65.1175 73.1721 64.8026 73.1721 64.4142C73.1721 64.0258 72.8572 63.7109 72.4688 63.7109H61.172ZM72.4688 66.5351H61.172C60.7836 66.5351 60.4687 66.85 60.4687 67.2384C60.4687 67.6268 60.7836 67.9417 61.172 67.9417H72.4688C72.8572 67.9417 73.1721 67.6268 73.1721 67.2384C73.1721 66.85 72.8572 66.5351 72.4688 66.5351Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111511'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111511'
              />
            </filter>
            <clipPath id='clip0_3647_111511'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Learn something new and develop a new skill that you’ve been eyeing. Pursue dream courses & obtain certifications ",
    },
    {
      name: "Conferences",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111518)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111518)'>
            <path
              d='M60.3687 59.9875C61.6166 59.9875 62.6281 58.9759 62.6281 57.7281C62.6281 56.4803 61.6166 55.4688 60.3687 55.4688C59.1209 55.4688 58.1094 56.4803 58.1094 57.7281C58.1094 58.9759 59.1209 59.9875 60.3687 59.9875Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M69.0281 65.2594C70.6919 65.2594 72.0407 63.9107 72.0407 62.2469C72.0407 60.5831 70.6919 59.2344 69.0281 59.2344C67.3644 59.2344 66.0156 60.5831 66.0156 62.2469C66.0156 63.9107 67.3644 65.2594 69.0281 65.2594Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M64.8812 64.507C64.8812 62.0115 62.8591 59.9883 60.3625 59.9883C57.8659 59.9883 55.8438 62.0115 55.8438 64.507H64.8812ZM74.2953 70.5321C74.2953 67.6205 71.9342 65.2602 69.0234 65.2602C66.1126 65.2602 63.7515 67.6205 63.7515 70.5321V74.2977H74.2953V70.5321Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M69.025 59.2344V51.7031H51.7031V64.5062H67.033M55.4687 68.2719H64.1749M63 64.5062H57.7281L56.975 68.2719H63.7531L63 64.5062Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111518'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111518'
              />
            </filter>
            <clipPath id='clip0_3647_111518'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Pick up information and share experiences with colleagues at conferences",
    },
    {
      name: "Stat Holidays",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111527)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111527)'>
            <path
              d='M75.4009 72.8387C71.3808 69.7067 66.6538 71.5414 61.9946 72.7562L59.8952 64.9206C60.3062 64.9252 60.722 65.0277 61.1086 65.2375C61.4454 65.4326 61.8689 65.3143 62.0634 64.9928C62.7235 63.9012 64.1417 63.3434 65.5568 64.0672C66.098 64.344 66.7107 63.8474 66.5562 63.2622C65.5387 59.4097 61.7582 57.0828 57.97 57.7349L57.6364 56.4898C57.536 56.1148 57.1505 55.892 56.7753 55.9926C56.4002 56.0931 56.1777 56.4787 56.2782 56.8538L56.6117 58.0988C52.9887 59.4342 50.8953 63.3528 51.9412 67.1864C52.1029 67.7788 52.9014 67.8954 53.2215 67.3645C53.9108 66.2216 55.386 65.7266 56.7108 66.4334C57.0437 66.61 57.4519 66.4935 57.6432 66.1772C57.8725 65.7982 58.1823 65.4983 58.5374 65.2865L60.6283 73.0904C57.9402 73.6948 55.239 73.9324 52.6689 72.7542C52.316 72.5924 51.8986 72.7474 51.7368 73.1004C51.575 73.4534 51.7299 73.8708 52.0829 74.0326C60.1401 77.726 68.5991 69.3219 74.5366 73.9481C74.8429 74.1867 75.2847 74.1319 75.5234 73.8255C75.762 73.5192 75.7072 73.0773 75.4009 72.8387ZM64.7077 62.3511C63.6969 62.244 62.6833 62.5257 61.8728 63.1391C61.4103 61.5678 60.5422 60.1442 59.3041 59.0317C61.5402 59.0516 63.6543 60.3164 64.7077 62.3511ZM53.0846 65.4683C52.9809 63.2295 54.1348 61.0467 56.1109 59.8853C55.5994 61.4523 55.5498 63.1185 55.9388 64.7279C54.9278 64.6017 53.9068 64.8666 53.0846 65.4683ZM57.3145 64.4331C56.9142 62.8125 57.0287 61.1252 57.7366 59.5732C59.125 60.5626 60.0687 61.9629 60.5334 63.5696C59.9663 63.4733 59.3852 63.5007 58.8296 63.6497C58.2741 63.7987 57.7572 64.0659 57.3145 64.4331ZM65.045 57.3729H65.7927C66.181 57.3729 66.4957 57.0581 66.4957 56.6698C66.4957 56.2815 66.1809 55.9666 65.7927 55.9666H65.045C64.6567 55.9666 64.3419 56.2815 64.3419 56.6698C64.3419 57.0581 64.6567 57.3729 65.045 57.3729ZM70.0025 59.0325C71.3052 59.0325 72.3651 57.9725 72.3651 56.6698C72.3651 55.367 71.3052 54.307 70.0025 54.307C68.6998 54.307 67.64 55.367 67.64 56.6698C67.64 57.9725 68.6998 59.0325 70.0025 59.0325ZM70.0025 55.7133C70.5299 55.7133 70.9589 56.1423 70.9589 56.6697C70.9589 57.1971 70.5299 57.6262 70.0025 57.6262C69.4752 57.6262 69.0462 57.1971 69.0462 56.6697C69.0462 56.1423 69.4752 55.7133 70.0025 55.7133ZM70.0025 53.154C70.3909 53.154 70.7056 52.8392 70.7056 52.4509V51.7031C70.7056 51.3148 70.3908 51 70.0025 51C69.6143 51 69.2995 51.3148 69.2995 51.7031V52.4508C69.2995 52.8392 69.6142 53.154 70.0025 53.154ZM66.5224 54.1837C66.7969 54.4583 67.2422 54.4583 67.5167 54.1837C67.7913 53.9091 67.7913 53.4639 67.5167 53.1893L66.9881 52.6606C66.7135 52.386 66.2683 52.386 65.9937 52.6606C65.7192 52.9352 65.7192 53.3804 65.9937 53.655L66.5224 54.1837ZM66.5224 59.1557L65.9937 59.6844C65.7192 59.959 65.7192 60.4042 65.9937 60.6788C66.2682 60.9534 66.7135 60.9535 66.9881 60.6788L67.5167 60.1501C67.7913 59.8755 67.7913 59.4304 67.5167 59.1557C67.2422 58.8811 66.797 58.8811 66.5224 59.1557ZM69.2995 60.8886V61.6363C69.2995 62.0246 69.6143 62.3394 70.0025 62.3394C70.3908 62.3394 70.7056 62.0246 70.7056 61.6363V60.8886C70.7056 60.5003 70.3908 60.1855 70.0025 60.1855C69.6143 60.1855 69.2995 60.5003 69.2995 60.8886ZM72.4884 59.1557C72.2138 59.4303 72.2138 59.8755 72.4884 60.1501L73.017 60.6788C73.2915 60.9534 73.7368 60.9535 74.0113 60.6788C74.2859 60.4043 74.2859 59.9591 74.0113 59.6844L73.4827 59.1557C73.2081 58.8811 72.7629 58.8811 72.4884 59.1557ZM73.518 56.6697C73.518 57.058 73.8328 57.3728 74.2211 57.3728H74.9688C75.3571 57.3728 75.6718 57.058 75.6718 56.6697C75.6718 56.2814 75.357 55.9666 74.9688 55.9666H74.2211C73.8328 55.9666 73.518 56.2814 73.518 56.6697ZM73.4827 54.1837L74.0113 53.655C74.2859 53.3804 74.2859 52.9352 74.0113 52.6606C73.7368 52.386 73.2916 52.386 73.017 52.6606L72.4884 53.1893C72.2138 53.4639 72.2138 53.9091 72.4884 54.1837C72.7629 54.4583 73.2081 54.4583 73.4827 54.1837Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111527'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111527'
              />
            </filter>
            <clipPath id='clip0_3647_111527'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51.6719 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Enjoy all statutory holidays & cultivate a cultural, religious, and nationalistic perspective",
    },
    {
      name: "Vacation/Personal days off",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111533)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111533)'>
            <path
              d='M73.7906 52.5063H71.4813V51.7031C71.4813 51.3148 71.1664 51 70.7781 51C70.3898 51 70.075 51.3148 70.075 51.7031V52.5063H66.9625V51.7031C66.9625 51.3148 66.6477 51 66.2594 51C65.8711 51 65.5563 51.3148 65.5563 51.7031V52.5063H62.4438V51.7031C62.4438 51.3148 62.1289 51 61.7406 51C61.3523 51 61.0375 51.3148 61.0375 51.7031V52.5063H57.925V51.7031C57.925 51.3148 57.6102 51 57.2219 51C56.8336 51 56.5188 51.3148 56.5188 51.7031V52.5063H54.2094C53.0022 52.5063 52 53.4814 52 54.7156V72.7906C52 74.0088 52.9912 75 54.2094 75H70.7781C71.4518 75 72.085 74.7377 72.5609 74.2615L75.2617 71.5608C75.7378 71.0844 76 70.4513 76 69.7781V54.7156C76 53.5061 75.0226 52.5063 73.7906 52.5063ZM74.2672 70.5666L71.5664 73.2673C71.5393 73.2944 71.5109 73.3201 71.4813 73.3443V71.2844C71.4813 70.841 71.8402 70.4813 72.2844 70.4813L74.3442 70.4813C74.32 70.511 74.2943 70.5394 74.2672 70.5666ZM74.5938 69.075H72.2844C71.0771 69.075 70.075 70.0506 70.075 71.2844V73.5938H54.2094C53.7666 73.5938 53.4062 73.2334 53.4062 72.7906V58.4312H74.5938V69.075ZM74.5938 57.025H53.4062V54.7156C53.4062 54.2722 53.7652 53.9125 54.2094 53.9125H56.5188V54.7156C56.5188 55.104 56.8336 55.4188 57.2219 55.4188C57.6102 55.4188 57.925 55.104 57.925 54.7156V53.9125H61.0375V54.7156C61.0375 55.104 61.3523 55.4188 61.7406 55.4188C62.1289 55.4188 62.4438 55.104 62.4438 54.7156V53.9125H65.5563V54.7156C65.5563 55.104 65.8711 55.4188 66.2594 55.4188C66.6477 55.4188 66.9625 55.104 66.9625 54.7156V53.9125H70.075V54.7156C70.075 55.104 70.3898 55.4188 70.7781 55.4188C71.1664 55.4188 71.4813 55.104 71.4813 54.7156V53.9125H73.7906C74.2332 53.9125 74.5938 54.2705 74.5938 54.7156V57.025H74.5938Z'
              fill='#D0CAFF'
            />
            <path
              d='M63.9984 68.6C65.4243 68.6 66.5844 67.44 66.5844 66.0141C66.5844 64.5882 65.4243 63.4281 63.9984 63.4281C62.5725 63.4281 61.4125 64.5882 61.4125 66.0141C61.4125 67.44 62.5725 68.6 63.9984 68.6ZM63.9984 64.8344C64.6489 64.8344 65.1781 65.3636 65.1781 66.0141C65.1781 66.6646 64.6489 67.1938 63.9984 67.1938C63.3479 67.1938 62.8187 66.6646 62.8187 66.0141C62.8187 65.3636 63.3479 64.8344 63.9984 64.8344ZM63.9984 62.1984C64.3867 62.1984 64.7015 61.8836 64.7015 61.4953V60.7422C64.7015 60.3539 64.3867 60.0391 63.9984 60.0391C63.6101 60.0391 63.2953 60.3539 63.2953 60.7422V61.4953C63.2953 61.8836 63.6101 62.1984 63.9984 62.1984ZM63.9984 69.8297C63.6101 69.8297 63.2953 70.1445 63.2953 70.5328V71.2859C63.2953 71.6742 63.6101 71.989 63.9984 71.989C64.3867 71.989 64.7015 71.6742 64.7015 71.2859V70.5328C64.7015 70.1445 64.3867 69.8297 63.9984 69.8297ZM67.814 66.0141C67.814 66.4024 68.1288 66.7172 68.5172 66.7172H69.2703C69.6586 66.7172 69.9734 66.4024 69.9734 66.0141C69.9734 65.6258 69.6586 65.311 69.2703 65.311H68.5172C68.1288 65.311 67.814 65.6257 67.814 66.0141ZM58.7265 66.7172H59.4797C59.868 66.7172 60.1828 66.4024 60.1828 66.0141C60.1828 65.6258 59.868 65.311 59.4797 65.311H58.7266C58.3382 65.311 58.0234 65.6258 58.0234 66.0141C58.0234 66.4024 58.3382 66.7172 58.7265 66.7172ZM67.6908 63.316L68.2232 62.7834C68.4977 62.5088 68.4977 62.0636 68.2231 61.789C67.9485 61.5145 67.5033 61.5145 67.2287 61.7891L66.6962 62.3217C66.4217 62.5963 66.4218 63.0415 66.6964 63.3161C66.9711 63.5907 67.4163 63.5905 67.6908 63.316ZM60.306 68.7122L59.7736 69.2447C59.4991 69.5193 59.4992 69.9645 59.7737 70.2391C60.0484 70.5137 60.4936 70.5135 60.7682 70.239L61.3006 69.7064C61.5751 69.4318 61.575 68.9866 61.3004 68.712C61.0258 68.4375 60.5807 68.4376 60.306 68.7122ZM67.6908 68.7122C67.4162 68.4376 66.971 68.4375 66.6964 68.712C66.4218 68.9866 66.4217 69.4318 66.6962 69.7064L67.2287 70.239C67.5033 70.5136 67.9485 70.5136 68.2231 70.2391C68.4977 69.9646 68.4977 69.5193 68.2232 69.2447L67.6908 68.7122ZM60.306 63.316C60.5807 63.5906 61.0258 63.5906 61.3004 63.3161C61.575 63.0415 61.5751 62.5963 61.3006 62.3217L60.7682 61.7891C60.4936 61.5146 60.0484 61.5145 59.7737 61.789C59.4992 62.0635 59.4991 62.5088 59.7736 62.7834L60.306 63.316Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111533'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111533'
              />
            </filter>
            <clipPath id='clip0_3647_111533'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Recharge and re-energise during these personal days off",
    },
    {
      name: "Leave Travel Allowance",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111540)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <path
            d='M57.2812 72.8906V74.2969M68.7188 72.8906V74.2969M59.4844 51.7031H66.5156M60.8906 51.75V55.4062M65.1094 51.75V55.4062M69.1929 72.8906H56.8071C55.8263 72.8906 55.0312 72.0955 55.0312 71.1148V57.3696C55.0312 56.3888 55.8263 55.5938 56.8071 55.5938H69.1929C70.1737 55.5938 70.9688 56.3888 70.9688 57.3696V71.1148C70.9688 72.0955 70.1737 72.8906 69.1929 72.8906Z'
            stroke='#D0CAFF'
            strokeWidth='1.4'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M60.5761 60.7642C61.0886 61.7193 62.0601 62.4543 63.0008 62.9532C63.9416 62.4543 64.9131 61.7193 65.4256 60.7642C65.6917 60.2682 65.7717 59.6863 65.5258 59.1689C65.3251 58.7465 64.9223 58.4251 64.4421 58.4075C63.252 58.3639 63.0008 59.4976 63.0008 59.4976C63.0008 59.4976 62.7497 58.3639 61.5596 58.4075C61.0793 58.4251 60.6765 58.7465 60.4759 59.169C60.23 59.6863 60.31 60.2682 60.5761 60.7642Z'
            stroke='#D0CAFF'
            strokeWidth='1.4'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M57.8906 66.2344L60.5228 65.2436L61.5136 67.8758L58.8814 68.8666L57.8906 66.2344Z'
            stroke='#D0CAFF'
            strokeWidth='1.4'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M64.9219 65.2969H68.1562V70.0312H64.9219V65.2969Z'
            stroke='#D0CAFF'
            strokeWidth='1.4'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <filter
              id='filter0_f_3647_111540'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111540'
              />
            </filter>
          </defs>
        </svg>
      ),
      text: "Benefit from LTA - get reimbursed for travel fares or tickets and accommodation anywhere in India",
    },

    {
      name: "Health & Wellness (Medical Insurance)",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111549)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111549)'>
            <path
              d='M64.8906 57.5625H62.7812V55.4531C62.7812 55.0648 62.4664 54.75 62.0781 54.75H59.2656C58.8773 54.75 58.5625 55.0648 58.5625 55.4531V57.5625H56.4531C56.0648 57.5625 55.75 57.8773 55.75 58.2656V61.0781C55.75 61.4664 56.0648 61.7812 56.4531 61.7812H58.5625V63.8906C58.5625 64.2789 58.8773 64.5938 59.2656 64.5938H62.0781C62.4664 64.5938 62.7812 64.2789 62.7812 63.8906V61.7812H64.8906C65.2789 61.7812 65.5938 61.4664 65.5938 61.0781V58.2656C65.5938 57.8773 65.2789 57.5625 64.8906 57.5625ZM64.1875 60.375H62.0781C61.6898 60.375 61.375 60.6898 61.375 61.0781V63.1875H59.9688V61.0781C59.9688 60.6898 59.6539 60.375 59.2656 60.375H57.1562V58.9688H59.2656C59.6539 58.9688 59.9688 58.6539 59.9688 58.2656V56.1562H61.375V58.2656C61.375 58.6539 61.6898 58.9688 62.0781 58.9688H64.1875V60.375ZM63.9531 66.4688H55.5156C55.1273 66.4688 54.8125 66.7836 54.8125 67.1719C54.8125 67.5602 55.1273 67.875 55.5156 67.875H63.9531C64.3414 67.875 64.6562 67.5602 64.6562 67.1719C64.6562 66.7836 64.3414 66.4688 63.9531 66.4688ZM63.9531 69.2812H55.5156C55.1273 69.2812 54.8125 69.5961 54.8125 69.9844C54.8125 70.3727 55.1273 70.6875 55.5156 70.6875H63.9531C64.3414 70.6875 64.6562 70.3727 64.6562 69.9844C64.6562 69.5961 64.3414 69.2812 63.9531 69.2812Z'
              fill='#D0CAFF'
            />
            <path
              d='M75.5192 63.7861L71.3005 62.3798C71.1561 62.3317 71.0001 62.3317 70.8558 62.3798L69.3438 62.8838V55.4531C69.3438 55.2666 69.2697 55.0878 69.1378 54.956L65.3878 51.206C65.3225 51.1407 65.245 51.0889 65.1597 51.0535C65.0744 51.0182 64.983 51 64.8906 51H52.7031C52.3148 51 52 51.3148 52 51.7031V72.7969C52 73.1852 52.3148 73.5 52.7031 73.5H68.374C69.0883 74.1582 69.9342 74.6572 70.8558 74.9639C71.0001 75.012 71.1561 75.012 71.3005 74.9639C74.107 74.0284 76 71.402 76 68.4437V64.4531C76 64.3055 75.9536 64.1617 75.8673 64.042C75.781 63.9223 75.6592 63.8327 75.5192 63.7861ZM65.5938 53.4006L66.9431 54.75H65.5938V53.4006ZM53.4062 72.0938V52.4062H64.1875V55.4531C64.1875 55.8414 64.5023 56.1562 64.8906 56.1562H67.9375V63.3526L66.637 63.7861C66.497 63.8328 66.3752 63.9223 66.289 64.042C66.2027 64.1617 66.1563 64.3055 66.1562 64.4531V68.4437C66.1562 69.7675 66.5356 71.0247 67.2059 72.0938H53.4062ZM74.5938 68.4437C74.5938 70.7214 73.1906 72.7446 71.0781 73.5504C68.9656 72.7446 67.5625 70.7214 67.5625 68.4437V64.9599L71.0781 63.7881L74.5938 64.9599V68.4437Z'
              fill='#D0CAFF'
            />
            <path
              d='M69.9347 68.0185C69.6601 67.7439 69.2149 67.7439 68.9403 68.0185C68.6657 68.2931 68.6657 68.7382 68.9403 69.0128L70.0341 70.1066C70.3086 70.3812 70.7538 70.3812 71.0284 70.1066L73.2159 67.9191C73.4905 67.6445 73.4905 67.1993 73.2159 66.9247C72.9413 66.6501 72.4962 66.6501 72.2216 66.9247L70.5312 68.6151L69.9347 68.0185Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111549'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111549'
              />
            </filter>
            <clipPath id='clip0_3647_111549'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Safeguard your hard-earned money with the medical insurance offered to you and your family",
    },
    {
      name: "Phone & Internet Allowances",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111557)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111557)'>
            <mask
              id='mask0_3647_111557'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='52'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M75.6359 74.3V51.7001H53.0359V74.3H75.6359Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111557)'>
              <path
                d='M73.9453 63C73.9453 66.3655 71.217 69.0938 67.8515 69.0938C64.4861 69.0938 61.7578 66.3655 61.7578 63C61.7578 59.6345 64.4861 56.9063 67.8515 56.9063C71.217 56.9063 73.9453 59.6345 73.9453 63Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M69.8826 63C69.8826 66.3655 68.9733 69.0938 67.8514 69.0938C66.7296 69.0938 65.8203 66.3655 65.8203 63C65.8203 59.6345 66.7296 56.9063 67.8514 56.9063C68.9733 56.9063 69.8826 59.6345 69.8826 63Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M67.8515 65.0312C64.4861 65.0312 61.7578 64.1219 61.7578 63.0001C61.7578 61.8783 64.4861 60.9689 67.8515 60.9689C71.217 60.9689 73.9453 61.8783 73.9453 63.0001C73.9453 64.1219 71.217 65.0312 67.8515 65.0312Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M67.8515 69.0938V72.8906C67.8515 73.6673 67.2219 74.2969 66.4453 74.2969H56.1328C55.3562 74.2969 54.7266 73.6673 54.7266 72.8906V53.1094C54.7266 52.3328 55.3562 51.7032 56.1328 51.7032H66.4453C67.2219 51.7032 67.8515 52.3328 67.8515 53.1094V56.9063'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M63.164 54.5156H59.4141L58.4766 51.7031H64.1015L63.164 54.5156Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M62.6953 71.4844H59.8828'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111557'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111557'
              />
            </filter>
            <clipPath id='clip0_3647_111557'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52.3359 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Don’t worry about internet and phone expenses - you can get it reimbursed",
    },
    {
      name: "Gym Membership",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111572)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111572)'>
            <path
              d='M74.2969 67.4527H73.3594V65.2494C73.3594 64.0862 72.4131 63.1399 71.25 63.1399C71.0081 63.1398 70.768 63.1814 70.5403 63.2631C70.4591 62.1735 69.5474 61.3117 68.4375 61.3117C67.2744 61.3117 66.3281 62.258 66.3281 63.4212V67.4527H59.6719V63.4212C59.6719 62.258 58.7256 61.3117 57.5625 61.3117C56.4526 61.3117 55.5409 62.1735 55.4597 63.2631C55.232 63.1814 54.9919 63.1398 54.75 63.1399C53.5869 63.1399 52.6406 64.0862 52.6406 65.2494V67.4527H51.7031C51.3148 67.4527 51 67.7675 51 68.1559C51 68.5442 51.3148 68.859 51.7031 68.859H52.6406V71.0623C52.6406 72.2255 53.5869 73.1718 54.75 73.1718C54.9919 73.1719 55.232 73.1303 55.4597 73.0486C55.5409 74.1382 56.4526 75 57.5625 75C58.7256 75 59.6719 74.0537 59.6719 72.8905V68.859H66.3281V72.8905C66.3281 74.0537 67.2744 75 68.4375 75C69.5474 75 70.4591 74.1382 70.5403 73.0486C70.768 73.1303 71.0081 73.1719 71.25 73.1718C72.4131 73.1718 73.3594 72.2255 73.3594 71.0623V68.859H74.2969C74.6852 68.859 75 68.5442 75 68.1559C75 67.7675 74.6852 67.4527 74.2969 67.4527ZM54.75 71.7655C54.3623 71.7655 54.0469 71.45 54.0469 71.0623V65.2494C54.0469 64.8617 54.3623 64.5462 54.75 64.5462C55.1377 64.5462 55.4531 64.8617 55.4531 65.2494V71.0623C55.4531 71.45 55.1377 71.7655 54.75 71.7655ZM58.2656 72.8905C58.2656 73.2783 57.9502 73.5937 57.5625 73.5937C57.1748 73.5937 56.8594 73.2783 56.8594 72.8905V63.4212C56.8594 63.0335 57.1748 62.718 57.5625 62.718C57.9502 62.718 58.2656 63.0335 58.2656 63.4212V72.8905ZM69.1406 72.8905C69.1406 73.2783 68.8252 73.5937 68.4375 73.5937C68.0498 73.5937 67.7344 73.2783 67.7344 72.8905V63.4212C67.7344 63.0335 68.0498 62.718 68.4375 62.718C68.8252 62.718 69.1406 63.0335 69.1406 63.4212V72.8905ZM71.9531 71.0623C71.9531 71.45 71.6377 71.7655 71.25 71.7655C70.8623 71.7655 70.5469 71.45 70.5469 71.0623V65.2494C70.5469 64.8617 70.8623 64.5462 71.25 64.5462C71.6377 64.5462 71.9531 64.8617 71.9531 65.2494V71.0623ZM62.5028 60.4904C62.6401 60.6277 62.8201 60.6964 63 60.6964C63.1799 60.6964 63.3599 60.6278 63.4972 60.4904L67.5873 56.3999C68.8207 55.1662 68.8206 53.1589 67.5871 51.9253C66.3535 50.6915 64.3461 50.6916 63.1125 51.9253L63 52.0379L62.8875 51.9253C61.6539 50.6915 59.6465 50.6916 58.4129 51.9253C57.1794 53.1589 57.1793 55.1662 58.4127 56.3999L62.5028 60.4904ZM59.4072 52.9197C59.75 52.577 60.2 52.4057 60.6502 52.4057C61.1003 52.4057 61.5504 52.5771 61.8931 52.9197L62.5028 53.5295C62.6347 53.6614 62.8135 53.7355 63 53.7355C63.1865 53.7355 63.3653 53.6614 63.4972 53.5295L64.1069 52.9197C64.7923 52.2344 65.9074 52.2344 66.5927 52.9197C67.2779 53.6051 67.278 54.7203 66.5929 55.4056L63 58.9988L59.4071 55.4056C58.7219 54.7202 58.722 53.6051 59.4072 52.9197Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111572'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111572'
              />
            </filter>
            <clipPath id='clip0_3647_111572'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Get back to being healthy or reach your fitness goals by availing of the gym membership",
    },

    {
      name: "Employee Provident Fund",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111578)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111578)'>
            <path
              d='M67.4219 68.6241L70.7321 65.3139C71.8625 64.1835 73.6303 64 74.9688 64.8741L70.1927 71.8813C69.6856 72.6254 69.0043 73.2344 68.2081 73.6552C67.412 74.076 66.5251 74.296 65.6246 74.296H60.3254C59.0919 74.296 57.8939 73.8835 56.9219 73.1241V67.1241L57.0995 66.9465C57.5188 66.5272 58.0165 66.1947 58.5642 65.9678C59.112 65.7409 59.6991 65.6241 60.292 65.6241C61.2688 65.6241 62.2193 65.941 63.0008 66.5271L63.2969 66.7491H66.1562C66.8552 66.7491 67.4219 67.3158 67.4219 68.0148C67.4219 69.1797 66.4775 70.1241 65.3125 70.1241H62.1719M56.2188 74.296H53.0781C52.6898 74.296 52.375 73.9812 52.375 73.5929V65.9523C52.375 65.564 52.6898 65.2491 53.0781 65.2491H56.2188C56.6071 65.2491 56.9219 65.564 56.9219 65.9523V73.5929C56.9219 73.9812 56.6071 74.296 56.2188 74.296Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M65.5469 63.7969C68.8865 63.7969 71.5938 61.0896 71.5938 57.75C71.5938 54.4104 68.8865 51.7031 65.5469 51.7031C62.2073 51.7031 59.5 54.4104 59.5 57.75C59.5 61.0896 62.2073 63.7969 65.5469 63.7969Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M66.5658 55.5586C66.5658 55.5586 66.0037 55.0402 65.1374 55.3012C64.3419 55.5408 64.1443 56.6293 64.6849 57.0533C64.9953 57.2967 65.4624 57.4969 66.0918 57.7194C67.5006 58.2174 66.9798 60.2042 65.5467 60.2137C64.9875 60.2175 64.726 60.182 64.2347 59.8606M65.5469 60.75V60.2139M65.5469 55.2297V54.75M54.6719 51.7031V52.5M52.375 54H53.1719M54.6719 56.25V55.5M56.9219 54H56.1719'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111578'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111578'
              />
            </filter>
            <clipPath id='clip0_3647_111578'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51.6719 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Save money with EPF deposits ",
    },

    {
      name: "Awards & Rewards Program",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111585)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111585)'>
            <mask
              id='mask0_3647_111585'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='52'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M75.6359 74.3V51.7001H53.0359V74.3H75.6359Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111585)'>
              <path
                d='M60.5672 65.2031L57.7734 59.8411L58.703 51.7013H70.0215L70.893 59.9504L68.0993 65.2031'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M58.8672 52.1444L64.3305 63.6445'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M69.8332 52.195L64.3359 63.6445'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <path
              d='M60.6641 55.5547H68.2256'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <mask
              id='mask1_3647_111585'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='52'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M75.6359 74.3V51.7001H53.0359V74.3H75.6359Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask1_3647_111585)'>
              <path
                d='M64.3337 63.645L65.8936 65.2049H68.0998V67.411L69.6597 68.971L68.0998 70.5309V72.7369H65.8936L64.3337 74.2969L62.7738 72.7369H60.5677V70.5309L59.0078 68.971L60.5677 67.411V65.2049H62.7738L64.3337 63.645Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M62.9297 68.9727C62.9297 68.196 63.5593 67.5664 64.3359 67.5664C65.1126 67.5664 65.7422 68.196 65.7422 68.9727C65.7422 69.7493 65.1126 70.3789 64.3359 70.3789C63.5593 70.3789 62.9297 69.7493 62.9297 68.9727Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111585'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111585'
              />
            </filter>
            <clipPath id='clip0_3647_111585'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52.3359 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Get recognised for your contributions through awards and rewards",
    },
    {
      name: "Employee Advocacy Program",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111603)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <path
            d='M73.3118 61.4385C73.8867 60.8978 74.2469 60.1309 74.2469 59.2813C74.2469 57.6476 72.9179 56.3188 71.2844 56.3188C69.6509 56.3188 68.322 57.6476 68.322 59.2813C68.3214 59.8133 68.4651 60.3356 68.7376 60.7925C68.5005 60.7345 68.2804 60.6216 68.0949 60.4629L65.0552 57.8573C64.5614 57.4342 63.8604 57.3362 63.2695 57.6081C63.1749 57.6519 63.0847 57.7046 63 57.7654C62.9153 57.7046 62.825 57.6518 62.7305 57.6079C62.1396 57.3362 61.4386 57.4342 60.9448 57.8573L57.9051 60.4627C57.7197 60.6215 57.4996 60.7345 57.2624 60.7925C57.535 60.3355 57.6786 59.8132 57.678 59.2811C57.678 57.6476 56.349 56.3186 54.7155 56.3186C53.082 56.3186 51.7531 57.6476 51.7531 59.2811C51.7531 60.1309 52.1133 60.8978 52.6882 61.4385C51.726 62.0674 51 63.1803 51 64.5524V71.3313C51 71.7195 51.3148 72.0344 51.7031 72.0344H57.728C58.1164 72.0344 58.4311 71.7195 58.4311 71.3313V64.8765L62.7685 61.1589C62.8501 61.0886 62.9274 61.0136 63 60.934C63.0726 61.0136 63.1499 61.0886 63.2315 61.1589L67.5687 64.8765V71.3313C67.5687 71.7195 67.8836 72.0344 68.2718 72.0344H74.2969C74.6852 72.0344 75 71.7195 75 71.3313V64.5524C75 63.1796 74.2736 62.0673 73.3118 61.4385ZM71.2844 57.7251C72.1425 57.7251 72.8407 58.4231 72.8407 59.2813C72.8407 60.1394 72.1425 60.8376 71.2844 60.8376C70.4262 60.8376 69.728 60.1394 69.728 59.2813C69.728 58.4231 70.4262 57.7251 71.2844 57.7251ZM54.7156 57.7251C55.5738 57.7251 56.272 58.4231 56.272 59.2813C56.272 60.1394 55.5738 60.8376 54.7156 60.8376C53.8575 60.8376 53.1593 60.1394 53.1593 59.2813C53.1593 58.4231 53.8575 57.7251 54.7156 57.7251ZM61.8534 60.0912L57.2704 64.0193C57.1934 64.0853 57.1316 64.1672 57.0892 64.2593C57.0468 64.3515 57.0249 64.4517 57.0249 64.5531V70.6282H52.4062V64.5524C52.4062 63.2796 53.4353 62.2438 54.7156 62.2438H56.8923C57.5995 62.2436 58.2834 61.9906 58.8204 61.5306L61.8602 58.9252C62.0304 58.7789 62.2969 58.8994 62.2969 59.1268C62.2969 59.4981 62.1351 59.8495 61.8534 60.0912ZM73.5938 70.6282H68.9751V64.5531C68.9751 64.3477 68.8854 64.1528 68.7295 64.0193L64.1466 60.0912C64.0073 59.9719 63.8956 59.8238 63.819 59.6572C63.7425 59.4906 63.7029 59.3094 63.7031 59.126C63.7031 58.9005 63.9686 58.7781 64.14 58.9251L67.1798 61.5305C67.7167 61.9906 68.4005 62.2436 69.1077 62.2437H71.2852C72.5599 62.2437 73.5938 63.2752 73.5938 64.5523V70.6282ZM63 55.4656C63.3884 55.4656 63.7031 55.1508 63.7031 54.7625V51.75C63.7031 51.3616 63.3884 51.0469 63 51.0469C62.6116 51.0469 62.2969 51.3616 62.2969 51.75V54.7625C62.2969 55.1508 62.6116 55.4656 63 55.4656ZM59.4904 56.0129C59.5556 56.0782 59.6331 56.1301 59.7184 56.1655C59.8037 56.2008 59.8952 56.219 59.9875 56.2189C60.1673 56.2189 60.3473 56.1502 60.4847 56.0129C60.7591 55.7382 60.7591 55.2931 60.4847 55.0185L58.9783 53.5122C58.7038 53.2375 58.2587 53.2375 57.984 53.5122C57.7094 53.7869 57.7094 54.232 57.984 54.5067L59.4904 56.0129ZM66.0125 56.2189C66.1925 56.2189 66.3725 56.15 66.5096 56.0129L68.016 54.5067C68.2905 54.232 68.2905 53.7869 68.016 53.5122C67.7413 53.2375 67.2962 53.2377 67.0215 53.5122L65.5153 55.0185C65.2406 55.2931 65.2406 55.7382 65.5153 56.0129C65.5805 56.0782 65.658 56.1301 65.7434 56.1654C65.8287 56.2008 65.9201 56.2189 66.0125 56.2189Z'
            fill='#D0CAFF'
          />
          <defs>
            <filter
              id='filter0_f_3647_111603'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111603'
              />
            </filter>
          </defs>
        </svg>
      ),
      text: "Encouragement & rewards follow the sincere and dedicated",
    },
    {
      name: "Joining Bonus",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111608)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111608)'>
            <mask
              id='mask0_3647_111608'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='51'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M74.9718 74.3V51.7001H52.3719V74.3H74.9718Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111608)'>
              <path
                d='M60.8594 70.0781C60.8594 70.8548 60.2297 71.4844 59.4531 71.4844C58.6765 71.4844 58.0469 70.8548 58.0469 70.0781C58.0469 69.3015 58.6765 68.6719 59.4531 68.6719C60.2297 68.6719 60.8594 69.3015 60.8594 70.0781Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M66.4843 65.8594H52.375V74.2969H66.4843V65.8594Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M59.25 65.8594C60.6908 63.0058 63.1468 60.1461 65.0738 58.7813L62.2613 53.1094C62.2613 53.1094 63.316 51.7032 64.3707 51.7032C65.4254 51.7032 66.4801 53.1094 66.4801 53.1094C66.4801 53.1094 67.5348 51.7032 68.5894 51.7032C69.6441 51.7032 70.6988 53.1094 70.6988 53.1094L67.8863 58.7813C70.7999 60.9291 74.9644 66.6151 74.9644 70.0781C74.9644 73.9252 71.0987 74.2847 68.1676 74.2969H66.4332'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M67.8906 58.7812H65.0781'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M65.0781 63.0469C65.9785 62.1465 66.4844 60.8784 66.4844 59.605M66.4844 59.605V58.7813M66.4844 59.605C66.4844 60.8784 66.9902 62.1465 67.8906 63.0469'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M55.2344 70.0813C55.2349 70.0813 55.2353 70.0812 55.2355 70.0812C55.2357 70.0811 55.2361 70.0808 55.2366 70.0803C55.2371 70.0799 55.2373 70.0795 55.2375 70.0793C55.2375 70.079 55.2375 70.0787 55.2375 70.0781C55.2375 70.0776 55.2375 70.0772 55.2375 70.077C55.2373 70.0768 55.2371 70.0764 55.2366 70.0759C55.2359 70.0752 55.2354 70.075 55.2353 70.075C55.2353 70.075 55.2353 70.075 55.2354 70.075C55.2356 70.0751 55.2358 70.0751 55.2358 70.0751C55.2358 70.0751 55.2354 70.075 55.2344 70.075C55.2338 70.075 55.2335 70.075 55.2332 70.075C55.233 70.0752 55.2326 70.0754 55.2322 70.0759C55.2317 70.0764 55.2314 70.0768 55.2313 70.077C55.2313 70.0772 55.2312 70.0776 55.2312 70.0781C55.2312 70.0787 55.2313 70.079 55.2313 70.0793C55.2314 70.0795 55.2317 70.0799 55.2322 70.0803C55.2326 70.0808 55.233 70.0811 55.2332 70.0812C55.2335 70.0812 55.2338 70.0813 55.2344 70.0813Z'
                fill='#D0CAFF'
                stroke='#D0CAFF'
                strokeWidth='1.4'
              />
              <path
                d='M63.6719 70.0813C63.6724 70.0813 63.6728 70.0812 63.673 70.0812C63.6732 70.0811 63.6736 70.0808 63.6741 70.0803C63.6746 70.0799 63.6748 70.0795 63.675 70.0793C63.675 70.079 63.675 70.0787 63.675 70.0781C63.675 70.0776 63.675 70.0772 63.675 70.077C63.6748 70.0768 63.6746 70.0764 63.6741 70.0759C63.6734 70.0752 63.6729 70.075 63.6728 70.075C63.6728 70.075 63.6728 70.075 63.6729 70.075C63.6731 70.0751 63.6733 70.0751 63.6733 70.0751C63.6733 70.0751 63.6729 70.075 63.6719 70.075C63.6713 70.075 63.671 70.075 63.6707 70.075C63.6705 70.0752 63.6701 70.0754 63.6697 70.0759C63.6692 70.0764 63.6689 70.0768 63.6688 70.077C63.6688 70.0772 63.6687 70.0776 63.6687 70.0781C63.6687 70.0787 63.6688 70.079 63.6688 70.0793C63.6689 70.0795 63.6692 70.0799 63.6697 70.0803C63.6701 70.0808 63.6705 70.0811 63.6707 70.0812C63.671 70.0812 63.6713 70.0813 63.6719 70.0813Z'
                fill='#D0CAFF'
                stroke='#D0CAFF'
                strokeWidth='1.4'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111608'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111608'
              />
            </filter>
            <clipPath id='clip0_3647_111608'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51.6719 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Join us asap to pocket a joining bonus",
    },
    {
      name: "Interview Bonus",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111623)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111623)'>
            <path
              d='M64.8611 69.1785L63.3112 70.4791C62.8224 70.8893 62.7586 71.618 63.1688 72.1068C63.5789 72.5956 64.3077 72.6594 64.7964 72.2492L66.3464 70.9486'
              stroke='#D0CAFF'
              strokeWidth='1.1'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M66.3511 70.9485L65.6862 71.5065C65.1974 71.9166 65.1336 72.6454 65.5438 73.1341C65.9539 73.6229 66.6827 73.6867 67.1714 73.2765L70.9247 70.1271H73.6172V63.9653H68.6972'
              stroke='#D0CAFF'
              strokeWidth='1.1'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M63.3777 67.4095L61.8277 68.7101C61.3389 69.1203 60.6102 69.0566 60.2 68.5677C59.7899 68.0789 59.8536 67.3502 60.3424 66.94L63.8861 63.9665'
              stroke='#D0CAFF'
              strokeWidth='1.1'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M63.3767 67.409L61.8268 68.7096C61.338 69.1197 61.2743 69.8485 61.6844 70.3373C62.0945 70.8261 62.8233 70.8898 63.312 70.4797L64.862 69.1791'
              stroke='#D0CAFF'
              strokeWidth='1.1'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M61.8722 70.5117H59.5605L58.0201 68.9713H55.0547V62.8094H59.7146L60.0803 62.4437C60.3306 62.1934 60.6278 61.9948 60.9549 61.8593C61.2819 61.7238 61.6325 61.6541 61.9865 61.6541H65.5573C66.068 61.6541 66.5578 61.857 66.9189 62.2181L68.8373 64.105C69.2885 64.5561 69.2885 65.2877 68.8373 65.7388C68.3861 66.19 67.6546 66.19 67.2035 65.7388L65.4294 63.9648H63.8889'
              stroke='#D0CAFF'
              strokeWidth='1.1'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <g clipPath='url(#clip1_3647_111623)'>
              <path
                d='M68.6047 55.7214C68.6047 53.3957 66.6892 51.5047 64.3359 51.5047C61.9827 51.5047 60.0672 53.3957 60.0672 55.7214C60.0672 58.0471 61.9827 59.938 64.3359 59.938C66.6892 59.938 68.6047 58.0471 68.6047 55.7214ZM64.3359 59.0047C62.5021 59.0047 61.0109 57.5311 61.0109 55.7214C61.0109 53.9116 62.5021 52.438 64.3359 52.438C66.1698 52.438 67.6609 53.9116 67.6609 55.7214C67.6609 57.5311 66.1698 59.0047 64.3359 59.0047Z'
                fill='#D0CAFF'
                stroke='#D0CAFF'
                strokeWidth='0.1'
              />
              <path
                d='M64.3359 54.4727C64.4478 54.4727 64.5551 54.5166 64.6342 54.5947C64.7134 54.6728 64.7578 54.7788 64.7578 54.8893H65.6016C65.6007 54.6317 65.5192 54.3806 65.3681 54.1705C65.217 53.9604 65.0039 53.8016 64.7578 53.716V53.2227H63.9141V53.716C63.668 53.8016 63.4548 53.9604 63.3038 54.1705C63.1527 54.3806 63.0711 54.6317 63.0703 54.8893C63.0703 55.5785 63.6382 56.1393 64.3359 56.1393C64.4194 56.1393 64.5009 56.1638 64.5703 56.2095C64.6397 56.2553 64.6938 56.3204 64.7257 56.3965C64.7576 56.4727 64.766 56.5565 64.7497 56.6373C64.7334 56.7181 64.6932 56.7923 64.6342 56.8506C64.5752 56.9089 64.5001 56.9486 64.4182 56.9647C64.3364 56.9807 64.2516 56.9725 64.1745 56.9409C64.0974 56.9094 64.0315 56.856 63.9852 56.7875C63.9388 56.719 63.9141 56.6384 63.9141 56.556H63.0703C63.0703 57.0985 63.4243 57.5568 63.9141 57.7293V58.2227H64.7578V57.7293C65.0039 57.6437 65.217 57.4849 65.3681 57.2748C65.5192 57.0648 65.6007 56.8137 65.6016 56.556C65.6016 55.8668 65.0337 55.306 64.3359 55.306C64.224 55.306 64.1167 55.2621 64.0376 55.184C63.9585 55.1058 63.9141 54.9998 63.9141 54.8893C63.9141 54.7788 63.9585 54.6728 64.0376 54.5947C64.1167 54.5166 64.224 54.4727 64.3359 54.4727Z'
                fill='#D0CAFF'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111623'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111623'
              />
            </filter>
            <clipPath id='clip0_3647_111623'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52.3359 51)'
              />
            </clipPath>
            <clipPath id='clip1_3647_111623'>
              <rect
                width='9'
                height='10'
                fill='white'
                transform='translate(59.8359 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Avail an interview bonus by conducting it as needed",
    },
    {
      name: "Referral Bonus",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111641)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111641)'>
            <mask
              id='mask0_3647_111641'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='51'
              y='51'
              width='24'
              height='24'
            >
              <path d='M51 51.0001H74.9999V75H51V51.0001Z' fill='white' />
            </mask>
            <g mask='url(#mask0_3647_111641)'>
              <path
                d='M70.5469 57.1406C68.4758 57.1406 66.7969 58.8196 66.7969 60.8906V62.2969H74.2969V60.8906C74.2969 58.8196 72.6179 57.1406 70.5469 57.1406Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M72.6562 55.0313C72.6562 56.1962 71.7118 57.1406 70.5469 57.1406C69.3819 57.1406 68.4375 56.1962 68.4375 55.0313C68.4375 53.8663 69.3819 52.9219 70.5469 52.9219C71.7118 52.9219 72.6562 53.8663 72.6562 55.0313Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M55.4531 57.1406C53.382 57.1406 51.7031 58.8196 51.7031 60.8906V62.2969H59.2031V60.8906C59.2031 58.8196 57.5242 57.1406 55.4531 57.1406Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M57.5625 55.0313C57.5625 56.1962 56.6181 57.1406 55.4531 57.1406C54.2881 57.1406 53.3438 56.1962 53.3438 55.0313C53.3438 53.8663 54.2881 52.9219 55.4531 52.9219C56.6181 52.9219 57.5625 53.8663 57.5625 55.0313Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M73.3594 68.3906L70.5469 65.5781L67.7344 68.3906'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M70.5468 65.5781V73.0781H55.4531V65.5781'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111641'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111641'
              />
            </filter>
            <clipPath id='clip0_3647_111641'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Know a friend who could join us? Refer them to us for a referral bonus",
    },
    {
      name: "Performance Bonus",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111655)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111655)'>
            <mask
              id='mask0_3647_111655'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='51'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M74.9718 74.3V51.7001H52.3719V74.3H74.9718Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111655)'>
              <path
                d='M73 62.3632C73 63.2693 72.2655 64.0039 71.3594 64.0039C70.4533 64.0039 69.7188 63.2693 69.7188 62.3632C69.7188 61.4571 70.4533 60.7226 71.3594 60.7226C72.2655 60.7226 73 61.4571 73 62.3632Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M57.6407 62.3632C57.6407 63.2693 56.9061 64.0039 56 64.0039C55.094 64.0039 54.3594 63.2693 54.3594 62.3632C54.3594 61.4571 55.094 60.7226 56 60.7226C56.9061 60.7226 57.6407 61.4571 57.6407 62.3632Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M61.6677 69.2038H59.047L58.1375 68.2943C57.8642 68.0208 57.6407 67.4808 57.6407 67.0943V64.0046H54.3594V67.7974C54.3594 68.5708 54.8068 69.6511 55.3537 70.198L58.1096 72.9539V74.2969H69.2454V72.9539L72.0012 70.198C72.5481 69.6511 72.9956 68.5708 72.9956 67.7974V64.0046H69.7143V67.0943C69.7143 67.4808 69.4908 68.0208 69.2174 68.2943L68.308 69.2038H65.6872'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M60.6641 62.2836V64.8293C60.6641 66.4916 62.0164 67.8438 63.6785 67.8438C65.3408 67.8438 66.693 66.4916 66.693 64.8293V62.2836H60.6641Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M66.693 62.2852V59.4724H62.7734C61.6133 59.4724 60.6641 60.4216 60.6641 61.5818V62.2852'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M61.9857 67.3227L61.6719 69.2051C61.6719 70.3151 62.5716 71.2148 63.6816 71.2148C64.7916 71.2148 65.6914 70.3151 65.6914 69.2051L65.3776 67.3227'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M63.678 51.7031L64.4814 53.331L66.2779 53.5921L64.9779 54.8591L65.2848 56.6484L63.678 55.8037L62.0712 56.6484L62.3781 54.8591L61.0781 53.5921L62.8746 53.331L63.678 51.7031Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M68.7969 52.5391L69.7344 52.0702'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M68.7969 55.3515L69.7344 55.8203'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M58.5547 52.5391L57.6172 52.0702'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M58.5547 55.3515L57.6172 55.8203'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111655'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111655'
              />
            </filter>
            <clipPath id='clip0_3647_111655'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51.6719 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Hit specific goals or targets to get this bonus",
    },
    {
      name: "Salary Advance",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111674)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111674)'>
            <mask
              id='mask0_3647_111674'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='52'
              y='51'
              width='25'
              height='24'
            >
              <path
                d='M75.6359 74.3V51.7001H53.0359V74.3H75.6359Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111674)'>
              <path
                d='M75.4921 60.1956L65.9025 66.5419C65.0409 67.1163 63.631 67.1163 62.7693 66.5419L53.1797 60.1956'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M57.1813 57.2948L53.0391 60.0563V70.9766C53.0391 72.0122 53.8865 72.8594 54.922 72.8594H73.75C74.7854 72.8594 75.6327 72.0122 75.6327 70.9766V60.0563L71.4904 57.2948'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M71.1111 57.043L65.8993 53.5687C65.0378 52.9943 63.6277 52.9943 62.7663 53.5687L57.5547 57.043'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M57.1797 62.5664V57.0435H71.4888V62.5664'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M60.9453 57.0429C60.9453 59.1228 59.2592 60.8086 57.1797 60.8086'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M71.4923 60.8086C69.4123 60.8086 67.7266 59.1224 67.7266 57.043'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M65.8407 62.3141C65.8407 63.146 65.1663 63.8203 64.3344 63.8203C63.5025 63.8203 62.8281 63.146 62.8281 62.3141C62.8281 61.4822 63.5025 60.8078 64.3344 60.8078C65.1663 60.8078 65.8407 61.4822 65.8407 62.3141Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111674'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111674'
              />
            </filter>
            <clipPath id='clip0_3647_111674'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52.3359 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Obtain salary advances in case a need arises",
    },
    {
      name: "Wedding gift vouchers",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111707)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <path
            d='M64.8775 60.9975C65.8643 60.0881 66.4844 58.7798 66.4844 57.3281C66.4844 56.9775 66.4474 56.6358 66.3771 56.3058C67.2846 55.8295 67.8907 54.8728 67.8907 53.8125C67.8907 52.2619 66.6288 51 65.0782 51C64.0174 51 63.0611 51.6056 62.5844 52.5131C62.2549 52.4433 61.9127 52.4062 61.5625 52.4062C58.8485 52.4062 56.6407 54.6141 56.6407 57.3281C56.6407 58.7981 57.2763 60.1209 58.285 61.0317C55.2039 61.6383 52.7069 64.1423 52.4079 67.2806C52.0033 71.52 55.3914 75 59.4532 75H60.1563C60.6954 75 61.188 74.7966 61.5616 74.4623C61.9488 74.8097 62.4443 75 62.9688 75H63.3996C67.0914 75 70.3239 72.2878 70.6699 68.6569C71.0205 64.9842 68.5052 61.6402 64.8775 60.9975ZM65.0782 52.4062C65.8535 52.4062 66.4844 53.0372 66.4844 53.8125C66.4844 54.2812 66.2477 54.7092 65.8797 54.967C65.4267 54.1425 64.7482 53.464 63.9236 53.0109C64.181 52.6425 64.6089 52.4062 65.0782 52.4062ZM61.5625 53.8125C63.2599 53.8125 64.6807 55.0223 65.0074 56.625H64.375C62.5253 56.625 60.7769 55.8131 59.5807 54.4261C60.145 54.0394 60.8275 53.8125 61.5625 53.8125ZM58.0469 57.3281C58.0469 56.6334 58.2499 55.9861 58.5991 55.44C60.0579 57.0764 62.1574 58.0312 64.375 58.0312H65.0088C64.6858 59.6602 63.2632 60.8906 61.5625 60.8906C59.6238 60.8906 58.0469 59.2927 58.0469 57.3281ZM60.1563 70.7812H59.4532C59.2104 70.7812 58.9746 70.7503 58.75 70.6922C59.9618 70.3791 60.8594 69.277 60.8594 67.9688C60.8594 67.8412 60.85 67.7156 60.8332 67.5923C61.5593 67.14 62.0125 66.2869 62.1832 65.0461C62.2343 64.6753 62.5193 64.4062 62.861 64.4062H62.9468C63.3414 64.4062 63.655 64.8009 63.6227 65.2092C63.5294 66.4012 63.3072 66.96 63.003 67.433L62.5216 68.1806L63.3602 68.4764C64.2447 68.7891 65.0646 69.233 65.8043 69.7997C65.2882 70.3997 64.5236 70.7812 63.6719 70.7812H62.9688C62.4288 70.7812 61.9357 70.9852 61.5625 71.3198C61.1889 70.9852 60.6958 70.7812 60.1563 70.7812ZM58.0469 69.375C57.2711 69.375 56.6407 68.7441 56.6407 67.9688C56.6407 67.1934 57.2711 66.5625 58.0469 66.5625C58.8222 66.5625 59.4532 67.1934 59.4532 67.9688C59.4532 68.7441 58.8222 69.375 58.0469 69.375ZM69.2702 68.5238C68.9993 71.3667 66.4207 73.5938 63.3996 73.5938H62.9688C62.5802 73.5938 62.2657 73.2792 62.2657 72.8906C62.2657 72.503 62.5811 72.1875 62.9688 72.1875H63.6719C65.9979 72.1875 67.8907 70.2952 67.8907 67.9688H66.4844C66.4844 68.1548 66.4657 68.3367 66.431 68.513C65.8521 68.0941 65.2309 67.7372 64.5775 67.448C64.8189 66.8644 64.9558 66.1959 65.0247 65.3189C65.1194 64.1109 64.181 63 62.9468 63H62.861C61.8091 63 60.9382 63.78 60.79 64.8548C60.6836 65.6292 60.4746 66.0333 60.2707 66.2503C59.756 65.5856 58.9507 65.1562 58.0469 65.1562C56.4958 65.1562 55.2344 66.4181 55.2344 67.9688C55.2344 70.2952 57.1268 72.1875 59.4532 72.1875H60.1563C60.5439 72.1875 60.8594 72.503 60.8594 72.8906C60.8594 73.2783 60.5439 73.5938 60.1563 73.5938H59.4532C56.2174 73.5938 53.4822 70.8258 53.8075 67.4137C54.0813 64.5445 56.6805 62.2969 59.725 62.2969H63.6719C66.8899 62.2969 69.5974 65.0948 69.2702 68.5238Z'
            fill='#D0CAFF'
          />
          <path
            d='M74.3681 57.8245C73.9467 57.4031 73.4522 57.2536 72.9876 57.2475C72.9815 56.7825 72.8315 56.288 72.4106 55.867C71.5828 55.0392 70.2492 55.0758 69.3745 55.9505C68.4693 56.8561 68.5757 58.1138 68.7229 59.8547C68.7482 60.1514 68.8411 61.3941 68.8411 61.3941C68.8411 61.3941 70.0837 61.4869 70.3804 61.5122C72.0276 61.6514 73.3584 61.7864 74.2842 60.8602C75.1589 59.9855 75.1959 58.6524 74.3681 57.8245ZM73.29 59.8659C72.847 60.3089 71.9465 60.233 70.499 60.1106C70.3856 60.1013 70.2703 60.0914 70.1531 60.0816C70.1531 60.0778 70.1479 60.0202 70.1479 60.0202C70.14 59.9245 70.132 59.8299 70.124 59.7361C69.9937 58.1934 69.9454 57.3684 70.3692 56.9447C70.6683 56.6456 71.1136 56.5589 71.4159 56.8613C71.759 57.2044 71.459 57.7936 71.4304 57.847L72.3904 58.8028C72.3965 58.7995 73.0181 58.463 73.3739 58.8188C73.6898 59.1352 73.5712 59.5847 73.29 59.8659Z'
            fill='#D0CAFF'
          />
          <defs>
            <filter
              id='filter0_f_3647_111707'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111707'
              />
            </filter>
          </defs>
        </svg>
      ),
      text: "Celebrate your D-Day with special gift vouchers",
    },
    {
      name: "Maternity/Paternity Benefits",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111713)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111713)'>
            <path
              d='M74.1087 51H74.0565C73.0261 51 72.1384 51.7751 71.9914 52.803C71.4816 56.3704 68.5244 59.1099 64.9812 59.4097C66.612 59.1053 67.8506 57.6724 67.8506 55.9547C67.8506 54.0162 66.2735 52.4391 64.335 52.4391C62.3964 52.4391 60.8193 54.0162 60.8193 55.9547C60.8193 57.6724 62.058 59.1053 63.6887 59.4097C60.1455 59.1099 57.1883 56.3704 56.6785 52.803C56.5316 51.7751 55.6439 51 54.6135 51H54.5613C53.2985 51 52.3224 52.117 52.4968 53.3715C52.9519 56.6476 54.7558 59.5807 57.4703 61.49C57.1929 63.1745 56.6053 67.544 56.6053 74.2969C56.6053 74.6852 56.9201 75 57.3084 75H71.3662C71.7545 75 72.0693 74.6852 72.0693 74.2969C72.0693 67.7224 71.4554 63.2424 71.1683 61.5091C73.9014 59.6053 75.7168 56.664 76.1737 53.3678C76.3467 52.1198 75.3754 51 74.1087 51ZM62.2256 55.9547C62.2256 54.7916 63.1719 53.8453 64.335 53.8453C65.4981 53.8453 66.4444 54.7916 66.4444 55.9547C66.4444 57.1178 65.4981 58.0641 64.335 58.0641C63.1719 58.0641 62.2256 57.1178 62.2256 55.9547ZM58.0137 73.5938C58.0167 73.095 58.0231 72.611 58.0322 72.1406H70.6404C70.6504 72.6119 70.6574 73.0961 70.6607 73.5938H58.0137ZM74.7808 53.1748C74.0695 58.3061 70.0133 60.5929 70.0179 60.5882C69.5998 60.857 69.7048 61.3165 69.706 61.3049C69.8907 62.3252 70.4188 65.6205 70.6006 70.7344H58.0688C58.241 65.487 58.7534 62.2724 58.932 61.2887C58.9566 61.152 58.9404 61.0111 58.8852 60.8836C58.8301 60.7562 58.7385 60.6478 58.622 60.5722C56.0348 58.8979 54.3099 56.2028 53.8897 53.178C53.8332 52.772 54.1466 52.4062 54.5613 52.4062H54.6135C54.9541 52.4062 55.2371 52.6568 55.2864 53.002C55.8846 57.1876 59.3309 60.4836 63.6318 60.816V67.2552C63.6318 67.6435 63.9466 67.9583 64.335 67.9583C64.7233 67.9583 65.0381 67.6435 65.0381 67.2552V60.816C67.0023 60.664 68.8647 59.8807 70.3472 58.5832C71.9971 57.1397 73.0755 55.1576 73.3835 53.002C73.4329 52.6568 73.7159 52.4062 74.0565 52.4062H74.1087C74.5235 52.4062 74.8367 52.7715 74.7808 53.1748Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111713'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111713'
              />
            </filter>
            <clipPath id='clip0_3647_111713'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52.3359 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Spend quality time with your newborn - avail paid leave for childbirth",
    },
    {
      name: "Team Happy Hour",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111718)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111718)'>
            <path
              d='M62.9857 66.7408C64.2549 66.7408 65.2838 65.7119 65.2838 64.4427C65.2838 63.1735 64.2549 62.1445 62.9857 62.1445C61.7164 62.1445 60.6875 63.1735 60.6875 64.4427C60.6875 65.7119 61.7164 66.7408 62.9857 66.7408Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
            />
            <path
              d='M70.9544 66.7408C72.2236 66.7408 73.2526 65.7119 73.2526 64.4427C73.2526 63.1735 72.2236 62.1445 70.9544 62.1445C69.6852 62.1445 68.6562 63.1735 68.6562 64.4427C68.6562 65.7119 69.6852 66.7408 70.9544 66.7408Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
            />
            <path
              d='M66.0626 71.4642H68.7023V69.2548C68.7023 67.8671 69.8272 66.7422 71.2149 66.7422H71.7894C73.1771 66.7422 74.3021 67.8671 74.3021 69.2548V74.2831H68.7023V74.277H66.0627C65.2859 74.277 64.6563 73.6474 64.6563 72.8706C64.6562 72.0939 65.2859 71.4642 66.0626 71.4642Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
            />
            <path
              d='M60.0938 71.4719V68.7517C60.0938 67.6419 60.9934 66.7422 62.1033 66.7422H63.8781C64.988 66.7422 65.8877 67.6419 65.8877 68.7517V71.4752M68.7006 71.4642H70.8059M68.0529 71.4642V74.2831'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
            />
            <path
              d='M55.0403 66.7408C56.3096 66.7408 57.3385 65.7119 57.3385 64.4427C57.3385 63.1735 56.3096 62.1445 55.0403 62.1445C53.7711 62.1445 52.7422 63.1735 52.7422 64.4427C52.7422 65.7119 53.7711 66.7408 55.0403 66.7408Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
            />
            <path
              d='M57.3029 71.4646H59.9426C60.7193 71.4646 61.349 72.0943 61.349 72.8711C61.349 73.6478 60.7193 74.2775 59.9426 74.2775H57.3029V74.2835H51.7031V69.2553C51.7031 67.8676 52.8281 66.7426 54.2158 66.7426H54.7903C56.178 66.7426 57.3029 67.8676 57.3029 69.2553V71.4646ZM57.3029 71.4646H55.1976M57.9506 71.4646V74.2835M58.4975 74.2775H67.2951M59.471 54.7421H60.8774M62.2838 54.7421H63.6903M65.0967 54.7421H66.5031M71.5573 54.7475C71.5573 53.0748 70.2013 51.7188 68.5285 51.7188H57.4456C55.7729 51.7188 54.4168 53.0748 54.4168 54.7475C54.4168 56.2308 55.4834 57.4642 56.8912 57.7248L56.7541 58.9963L60.4323 57.7764H61.4943L62.9871 59.1749L64.4799 57.7764H65.5419L69.2201 58.9963L69.083 57.7248C70.4908 57.4643 71.5573 56.2308 71.5573 54.7475Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111718'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111718'
              />
            </filter>
            <clipPath id='clip0_3647_111718'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Say cheers to coworkers and gear up for the road ahead",
    },
    {
      name: "Team Get Together/Team Outing",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111728)'>
            <circle cx='63.3335' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111728)'>
            <path
              d='M65.5839 70.5H61.7598M72.0723 70.5H74.9688L73.5625 61.5938H53.7812L52.375 70.5H55.2714'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M68.8281 68.625C69.9931 68.625 70.9375 67.6806 70.9375 66.5156C70.9375 65.3506 69.9931 64.4062 68.8281 64.4062C67.6631 64.4062 66.7188 65.3506 66.7188 66.5156C66.7188 67.6806 67.6631 68.625 68.8281 68.625Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M58.5156 68.625C59.6806 68.625 60.625 67.6806 60.625 66.5156C60.625 65.3506 59.6806 64.4062 58.5156 64.4062C57.3506 64.4062 56.4062 65.3506 56.4062 66.5156C56.4062 67.6806 57.3506 68.625 58.5156 68.625Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M68.8281 56.9062C70.8992 56.9062 72.5781 58.5852 72.5781 60.6562V61.5938H65.0781V60.6562C65.0781 58.5852 66.757 56.9062 68.8281 56.9062Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M68.8281 56.9062C69.9931 56.9062 70.9375 55.9619 70.9375 54.7969C70.9375 53.6319 69.9931 52.6875 68.8281 52.6875C67.6631 52.6875 66.7188 53.6319 66.7188 54.7969C66.7188 55.9619 67.6631 56.9062 68.8281 56.9062Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M58.5156 56.9062C60.5867 56.9062 62.2656 58.5852 62.2656 60.6562V61.5938H54.7656V60.6562C54.7656 58.5852 56.4445 56.9062 58.5156 56.9062Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M58.5156 56.9062C59.6806 56.9062 60.625 55.9619 60.625 54.7969C60.625 53.6319 59.6806 52.6875 58.5156 52.6875C57.3506 52.6875 56.4062 53.6319 56.4062 54.7969C56.4062 55.9619 57.3506 56.9062 58.5156 56.9062Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M68.8281 68.625C70.8992 68.625 72.5781 70.3039 72.5781 72.375V73.3125H65.0781V72.375C65.0781 70.3039 66.757 68.625 68.8281 68.625ZM58.5156 68.625C60.5867 68.625 62.2656 70.3039 62.2656 72.375V73.3125H54.7656V72.375C54.7656 70.3039 56.4445 68.625 58.5156 68.625Z'
              stroke='#D0CAFF'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111728'
              x='0.333496'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111728'
              />
            </filter>
            <clipPath id='clip0_3647_111728'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51.6719 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Experience out-of-box ideas & explore fun activities with the team",
    },
    {
      name: "Team Lunch/Meals",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111740)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111740)'>
            <path
              d='M70.3094 61.7828C69.783 60.9927 68.7867 60.6508 67.8869 60.9515L66.445 61.4325V60.2545L67.887 60.7352C68.1022 60.8069 68.3275 60.8435 68.5542 60.8434C69.1093 60.8434 69.6529 60.6181 70.0456 60.2255L72.858 57.4131C73.6825 56.5887 73.6826 55.2549 72.858 54.4304C72.0357 53.608 70.6976 53.608 69.8752 54.4304L67.9847 56.3209L66.8658 55.9479C67.4684 55.4317 67.8512 54.6661 67.8512 53.8125C67.8512 52.2616 66.5896 51 65.0389 51C63.4881 51 62.2265 52.2616 62.2265 53.8124C62.2265 54.4396 62.433 55.0194 62.7815 55.4877L56.8908 56.6659C55.7504 56.8942 55.0084 58.0077 55.2365 59.1476C55.4602 60.2693 56.5579 61.0327 57.7187 60.8022L62.2265 59.9007V64.3446C62.2247 64.5761 62.2613 64.8064 62.3346 65.0261L63.5193 68.5801L62.3338 72.2248C61.9659 73.3321 62.5654 74.5228 63.6676 74.8905C64.7652 75.2581 65.9651 74.6724 66.3383 73.5526L67.7433 69.2442C67.8863 68.8142 67.8863 68.3406 67.7431 67.9102L67.0041 65.6931L67.6932 65.4634L69.6119 68.3414C70.262 69.3157 71.5742 69.5688 72.5366 68.9263C73.5066 68.28 73.7682 66.9714 73.1217 66.0012L70.3094 61.7828ZM65.0389 52.4062C65.8142 52.4062 66.4451 53.037 66.4451 53.8124C66.4451 54.5878 65.8143 55.2186 65.0389 55.2186C64.2635 55.2186 63.6327 54.5878 63.6327 53.8124C63.6327 53.037 64.2635 52.4062 65.0389 52.4062ZM66.4076 68.8043L65.0029 73.1123C64.8806 73.479 64.4847 73.6812 64.1134 73.5569C63.7447 73.4339 63.5456 73.036 63.6686 72.6673L63.6703 72.6623L64.9282 68.7949C64.9747 68.6519 64.9741 68.4977 64.9266 68.355L64.2965 66.4647C64.5362 66.4695 64.775 66.4341 65.003 66.36L65.67 66.1377L66.4089 68.3543C66.4574 68.5002 66.4574 68.6545 66.4076 68.8043ZM71.7563 67.7565C71.4338 67.9717 70.997 67.8838 70.7817 67.5612L68.5653 64.2366C68.4798 64.1082 68.3544 64.0116 68.2085 63.9615C68.0626 63.9115 67.9043 63.9108 67.758 63.9595L65.8926 64.5812L65.8924 64.5812L65.8921 64.5813L64.5628 65.0243C64.1311 65.165 63.6908 64.883 63.6375 64.4401C63.6342 64.4122 63.6326 64.3841 63.6326 64.356V59.043C63.6326 58.5998 63.2263 58.2665 62.7916 58.3537C57.024 59.5072 57.4049 59.4372 57.3035 59.4372C56.9702 59.4372 56.6809 59.1997 56.6156 58.8721C56.5395 58.492 56.7868 58.1209 57.1667 58.0448C64.9189 56.4944 64.2856 56.5698 64.6168 56.6803L64.6283 56.6842L67.9523 57.7924C68.0762 57.8337 68.2091 57.8396 68.3362 57.8096C68.4633 57.7796 68.5795 57.7148 68.6719 57.6225L70.8697 55.4246C71.1439 55.1505 71.5897 55.1505 71.8639 55.4246C71.9292 55.4898 71.9811 55.5673 72.0165 55.6526C72.0519 55.7379 72.0701 55.8293 72.0701 55.9217C72.0701 56.014 72.0519 56.1055 72.0165 56.1908C71.9811 56.276 71.9292 56.3535 71.8639 56.4187L69.0515 59.2311C68.8698 59.4128 68.5917 59.4878 68.3318 59.4011L65.9644 58.612C65.5098 58.4605 65.039 58.7992 65.039 59.279V62.4081C65.039 62.8874 65.5092 63.2268 65.9645 63.075L68.3323 62.2853C68.632 62.1851 68.9639 62.2991 69.1394 62.5626L71.9517 66.781C72.1664 67.1035 72.081 67.5401 71.7563 67.7565Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111740'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111740'
              />
            </filter>
            <clipPath id='clip0_3647_111740'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52.3359 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Meet, greet & interact with the team through team lunches/dinners",
    },
    {
      name: "Zumba Sessions",
      icon: (
        <svg
          width='127'
          height='126'
          viewBox='0 0 127 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111740)'>
            <circle cx='63.6667' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111740)'>
            <path
              d='M70.3094 61.7827C69.783 60.9927 68.7867 60.6508 67.8869 60.9515L66.445 61.4325V60.2545L67.887 60.7352C68.1022 60.8069 68.3275 60.8435 68.5542 60.8434C69.1093 60.8434 69.6529 60.6181 70.0456 60.2255L72.858 57.4131C73.6825 56.5887 73.6826 55.2549 72.858 54.4304C72.0357 53.608 70.6976 53.608 69.8752 54.4304L67.9847 56.3209L66.8658 55.9479C67.4684 55.4317 67.8512 54.6661 67.8512 53.8125C67.8512 52.2616 66.5896 51 65.0389 51C63.4881 51 62.2265 52.2616 62.2265 53.8124C62.2265 54.4396 62.433 55.0194 62.7815 55.4877L56.8908 56.6659C55.7504 56.8942 55.0084 58.0077 55.2365 59.1476C55.4602 60.2693 56.5579 61.0327 57.7187 60.8022L62.2265 59.9007V64.3446C62.2247 64.5761 62.2613 64.8064 62.3346 65.0261L63.5193 68.5801L62.3338 72.2248C61.9659 73.3321 62.5654 74.5228 63.6676 74.8905C64.7652 75.2581 65.9651 74.6724 66.3383 73.5526L67.7433 69.2442C67.8863 68.8142 67.8863 68.3406 67.7431 67.9102L67.0041 65.6931L67.6932 65.4634L69.6119 68.3414C70.262 69.3157 71.5742 69.5688 72.5366 68.9263C73.5066 68.28 73.7682 66.9714 73.1217 66.0012L70.3094 61.7827ZM65.0389 52.4062C65.8142 52.4062 66.4451 53.037 66.4451 53.8124C66.4451 54.5878 65.8143 55.2186 65.0389 55.2186C64.2635 55.2186 63.6327 54.5878 63.6327 53.8124C63.6327 53.037 64.2635 52.4062 65.0389 52.4062ZM66.4076 68.8043L65.0029 73.1123C64.8806 73.479 64.4847 73.6812 64.1134 73.5569C63.7447 73.4339 63.5456 73.036 63.6686 72.6673L63.6703 72.6622L64.9282 68.7949C64.9747 68.6519 64.9741 68.4977 64.9266 68.355L64.2965 66.4647C64.5362 66.4695 64.775 66.4341 65.003 66.36L65.67 66.1377L66.4089 68.3543C66.4574 68.5002 66.4574 68.6545 66.4076 68.8043ZM71.7563 67.7565C71.4338 67.9717 70.997 67.8838 70.7817 67.5612L68.5653 64.2366C68.4798 64.1082 68.3544 64.0116 68.2085 63.9615C68.0626 63.9115 67.9043 63.9108 67.758 63.9595L65.8926 64.5812L65.8924 64.5812L65.8921 64.5813L64.5628 65.0243C64.1311 65.165 63.6908 64.883 63.6375 64.4401C63.6342 64.4122 63.6326 64.3841 63.6326 64.356V59.043C63.6326 58.5998 63.2263 58.2665 62.7916 58.3537C57.024 59.5072 57.4049 59.4372 57.3035 59.4372C56.9702 59.4372 56.6809 59.1998 56.6156 58.8721C56.5395 58.492 56.7868 58.1209 57.1667 58.0448C64.9189 56.4944 64.2856 56.5698 64.6168 56.6803L64.6283 56.6842L67.9523 57.7924C68.0762 57.8337 68.2091 57.8396 68.3362 57.8096C68.4633 57.7796 68.5795 57.7148 68.6719 57.6225L70.8697 55.4246C71.1439 55.1505 71.5897 55.1505 71.8639 55.4246C71.9292 55.4898 71.9811 55.5673 72.0165 55.6526C72.0519 55.7379 72.0701 55.8293 72.0701 55.9217C72.0701 56.014 72.0519 56.1055 72.0165 56.1908C71.9811 56.276 71.9292 56.3535 71.8639 56.4187L69.0515 59.2311C68.8698 59.4128 68.5917 59.4878 68.3318 59.4011L65.9644 58.612C65.5098 58.4605 65.039 58.7992 65.039 59.279V62.4081C65.039 62.8874 65.5092 63.2268 65.9645 63.075L68.3323 62.2853C68.632 62.1851 68.9639 62.2991 69.1394 62.5626L71.9517 66.781C72.1664 67.1035 72.081 67.5401 71.7563 67.7565Z'
              fill='#D0CAFF'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111740'
              x='0.666748'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111740'
              />
            </filter>
            <clipPath id='clip0_3647_111740'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(52.3359 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Get your feet moving, and your body fit with Zumba sessions",
    },

    {
      name: "Yoga Sessions",
      icon: (
        <svg
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_3647_111745)'>
            <circle cx='63' cy='63' r='21' fill='#1B1551' />
          </g>
          <g clipPath='url(#clip0_3647_111745)'>
            <mask
              id='mask0_3647_111745'
              style={{ maskType: "luminance" }}
              maskUnits='userSpaceOnUse'
              x='51'
              y='51'
              width='24'
              height='24'
            >
              <path
                d='M74.2999 74.3V51.7001H51.7V74.3H74.2999Z'
                fill='white'
                stroke='white'
                strokeWidth='1.4'
              />
            </mask>
            <g mask='url(#mask0_3647_111745)'>
              <path
                d='M73.4578 56.3269V57.7828C73.4578 58.3445 73.2388 58.8548 72.8814 59.2339C72.4958 59.6431 71.9491 59.8984 71.3422 59.8984C70.4515 59.8984 69.6894 59.3478 69.3773 58.5689C69.2774 58.3189 69.2263 58.0521 69.2266 57.7828V56.3638C69.2266 55.1915 70.1856 54.2024 71.3579 54.2109C71.9359 54.2151 72.4588 54.451 72.8385 54.8307C73.2211 55.2137 73.4578 55.7426 73.4578 56.3269Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M72.6404 64.0102C72.594 64.1124 72.4407 64.3102 72.4388 64.4181L72.4515 63.6751C72.4515 63.287 72.2939 62.9354 72.0394 62.6809C71.9091 62.55 71.7541 62.4462 71.5835 62.3755C71.4129 62.3048 71.2299 62.2686 71.0452 62.2688C70.2685 62.2688 69.639 62.8984 69.639 63.6751L69.7027 67.3515L69.222 67.6719L65.5625 64.7549C67.0391 63.4058 67.224 62.6279 68.3579 60.9943C68.7624 60.4107 69.2612 60.0217 69.9662 59.889C71.5923 59.5839 73.1392 60.6922 73.2263 61.6754C73.2675 62.1378 72.9716 63.2756 72.6404 64.0102Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M69.2288 67.6709C66.045 69.8848 58.0076 71.6592 54.5187 71.7919C53.7148 71.8228 53.0469 71.1792 53.0469 70.3749C53.0469 70.0097 53.1856 69.6741 53.4153 69.421C53.645 69.1678 53.9656 68.9972 54.3294 68.9635C57.2538 68.6902 59.8749 67.3783 61.6173 66.7441C61.7905 66.6809 61.9446 66.5745 62.065 66.435C62.796 65.5909 63.8019 65.0325 64.9049 64.8586L65.5693 64.7539L69.2288 67.6709Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M72.4531 63.6738L72.4405 64.4167L72.3345 70.5273C72.3223 71.23 71.7495 71.793 71.0469 71.793C70.3447 71.793 69.7714 71.23 69.7592 70.5273L69.7044 67.3502L69.6406 63.6738C69.6406 62.8971 70.2702 62.2675 71.0469 62.2675C71.4355 62.2675 71.787 62.425 72.0411 62.6796C72.2956 62.9341 72.4531 63.2857 72.4531 63.6738Z'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M74.2968 71.793H51.7031'
                stroke='#D0CAFF'
                strokeWidth='1.4'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_3647_111745'
              x='0'
              y='0'
              width='126'
              height='126'
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
                stdDeviation='21'
                result='effect1_foregroundBlur_3647_111745'
              />
            </filter>
            <clipPath id='clip0_3647_111745'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(51 51)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Relax and rejuvenate with yoga",
    },
  ];

const DeveloperBenefits = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const dataForDisplay = expanded
    ? DEVELOPER_BENEFITS
    : DEVELOPER_BENEFITS.slice(0, 9);

  const handleClick = () => {
    setExpanded(!expanded);
    if (expanded) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className='cursor-default pb-[100px] '>
        <div className='flex justify-center text-center pb-[72px]'>
          <h1 className='heading pt-2 w-[800px]'>
            Get hired to one of our teams and you’ll unlock an AppExert+
            Benefits
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 md:gap-6 gap-4  py-[48px] px-[32px] bg-[#09071B] rounded-[8px]'>
          {dataForDisplay.map((benefits: any) => (
            <div
              key={benefits.name}
              className='w-full h-full grid gap-2 text-center md:p-4 p-2  '
            >
              <div className='w-full flex justify-center fill-current max-h-max'>
                {benefits.icon}
              </div>
              <h3 className='font-medium text-[#E4E4E4] text-[18px] pt-[20px]'>
                {benefits.name}
              </h3>
              <p className=' text-[#908E9F] text-[14px]'>{benefits.text}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-16 '>
          <Button
            type='primary'
            className='page-btn'
            onClick={handleClick}
          >
            {expanded ? (
              <>
                View less 
              </>
            ) : (
              <>
                View all 25+ benefits 
              </>
            )}
          </Button>
        </div>
      </section>
    </>
  );
};

export default DeveloperBenefits;
