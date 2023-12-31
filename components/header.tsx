import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import Container from "./container";
import Image from "next/image";
import { useLayout } from "@hooks/useLayout";
import { useRouter } from "next/router";
import ClickAwayListener from "./click-away-listener";

import { Button } from "antd";

function Header() {
  const [open, setOpen] = useState(false);
  const { state } = useLayout();
  const router = useRouter();
  const { navMenu } = state;
  // login cta
  const login = `${
    router.pathname.includes("companies") ||
    router.pathname.includes("startups")
      ? `${process.env.NEXT_PUBLIC_HIRE_APP}/login?companies`
      : `${process.env.NEXT_PUBLIC_HIRE_APP}/login?developers`
  }`;
  // register cta
  const register = `${
    router.pathname.includes("companies") ||
    router.pathname.includes("startups")
      ? `${process.env.NEXT_PUBLIC_HIRE_APP}/register?companies`
      : `${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`
  }`;
  const [loaderVisible, setLoaderVisible] = useState(false);
  const loadingButton = (link: any) => {
    if (link.label === "Sign in" || link.label === "My Account") {
      return loaderVisible;
    }
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  useEffect(() => {
    setLoaderVisible(false);
  }, [router.pathname]);

  const links: {
    href: string;
    label: string;
    button?: boolean;
    classes?: string;
  }[] = [
    { href: "/developers", label: "For Developers" },
    { href: "/startups", label: "Startups" },
    { href: "/talent-pool", label: "Talent Pool" },
    { href: "/community", label: "Community" },
  ];

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <header
        className={cn(
          {
            "bg-light-gray":
              router.pathname === "/login" ||
              router.pathname === "/register" ||
              router.pathname === "/developers/forgotPassword" ||
              router.pathname === "/companies/forgotPassword" ||
              router.pathname === "/developers/resetPassword" ||
              router.asPath.startsWith("/c?id="),
          },
          {
            "bg-[#020013]": router.pathname.includes("companies/start-hiring"),
          },
          "sticky top-0 z-50 backdrop-blur-3xl min-h-[64px] flex py-2 md:py-0 border-b border-[#26252C]"
        )}
      >
        <Container className='md:flex md:flex-row flex flex-col py-2'>
          <div
            className={cn(
              { "justify-center md:justify-between": !navMenu },
              { "justify-between ": navMenu },
              "flex  flex-row items-center md:w-max "
            )}
          >
            <div className='w-max mr-5'>
              <Link href='/'>
                <a className='flex '>
                  <Image
                    src={
                      router.pathname === "/login" ||
                      router.pathname === "/register" ||
                      router.pathname === "/developers/forgotPassword" ||
                      router.pathname === "/companies/forgotPassword" ||
                      router.pathname === "/developers/resetPassword" ||
                      router.asPath.startsWith("/c?id=")
                        ? "/images/black_logo.png"
                        : "/images/AppExert_logo_white.svg"
                    }
                    alt='appexert logo'
                    className=' cursor-pointer'
                    width='123'
                    height='32'
                    onClick={() => setOpen(false)}
                  />
                </a>
              </Link>
            </div>
            {navMenu && (
              <div>
                <button
                  type='button'
                  className='block text-gray-600 hover:text-gray-800 focus:outline-none md:hidden'
                  id='main-menu'
                  aria-label='Main menu'
                  aria-haspopup='true'
                  onClick={() => setOpen(!open)}
                >
                  {!open && (
                    <svg
                      className='h-6 w-6'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                  )}

                  {open && (
                    <svg
                      className='h-6 w-6'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <line x1='18' y1='6' x2='6' y2='18' />
                      <line x1='6' y1='6' x2='18' y2='18' />
                    </svg>
                  )}
                </button>
              </div>
            )}{" "}
          </div>
          {navMenu && (
            <nav
              className={cn(
                { "h-0 py-0 md:h-auto pt-0": !open },
                {
                  "h-54 opacity-100  transition-all duration-200 ": open,
                },
                "md:flex  w-full pt-4 md:py-1 lg:gap-4 md:items-center  md:h-auto overflow-hidden"
              )}
            >
              <>
                <div className='md:h-[auto] h-[90vh] md:w-full md:flex-row flex flex-col justify-start'>
                  <div className='md:flex justify-center md:w-full md:gap-x-[40px] '>
                    {links.map((link, idx) => {
                      return (
                        <Link key={idx} href={link.href}>
                          <a
                            onClick={() => setOpen(!open)}
                            className={
                              router.pathname === link.href
                                ? "md:mt-1 md:pb-0 mt-4 pb-4 sm:p-0 sm:px-2 block text-white font-semibold md:text-[14px] text-[16px] md:mx-2 transition duration-700 border-b-[1px] md:border-transparent border-[#474554]"
                                : "" +
                                  cn(
                                    {
                                      [`${link.classes}  flex`]: link.button,
                                    },
                                    {
                                      "md:mt-1 md:pb-0 mt-4 pb-4 sm:p-0 sm:px-2 block text-gray-400 md:text-[14px] text-[16px] hover:text-white border-b-[1px] md:border-transparent border-[#474554] font-medium ":
                                        !link.button,
                                    }
                                  )
                            }
                          >
                            {link.label}
                            {!link.button && <div className=''></div>}
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                  <div className='flex md:flex-row flex-col justify-center gap-x-[20px]  mt-4  md:mt-0 pt-4 md:pt-0 md:border-0 '>
                    <Link key='signin' href={login} className='border-none'>
                      <Button
                        className='border-none text-[#D4D3DF] md:text-[14px] text-[16px] font-medium'
                        type='text'
                        loading={loadingButton("Sign in")}
                        onClick={() => {
                          setLoaderVisible(true);
                          setOpen(!open);
                        }}
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link
                      key='createAccount'
                      href={register}
                      className='border-none'
                    >
                      <Button
                        className='btn-brand page-btn md:mt-0 mt-[16px]'
                        loading={loadingButton("Create account")}
                        onClick={() => {
                          setLoaderVisible(true);
                          setOpen(!open);
                        }}
                      >
                        Get started
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            </nav>
          )}
        </Container>
      </header>
    </ClickAwayListener>
  );
}

export default Header;
