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
    { href: "/developers", label: "Developers" },
    { href: "/companies", label: "Companies" },
    { href: "/startups", label: "Startups" },
    { href: "/community", label: "Community" },
    { href: "/talent-pool", label: "Talent Pool" },
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
          "sticky top-0 z-50 backdrop-blur"
        )}
      >
        <Container className=' md:flex justify-between  py-2 '>
          <div
            className={cn(
              { "justify-center md:justify-between": !navMenu },
              { "justify-between ": navMenu },
              "flex  flex-row-reverse md:flex-row items-center md:w-max "
            )}
          >
            {/* empty div for alignment sake for mobile device */}
            <div className='md:hidden'></div>
            <div className='w-max mr-5'>
              <Link href='/'>
                <a className='block '>
                  <Image
                    src='/images/black_logo.png'
                    alt='appexert logo'
                    className='h-6 cursor-pointer'
                    width='150'
                    height='40'
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
                { "h-0 py-0 md:h-auto ": !open },
                {
                  "h-54 opacity-100  transition-all duration-200 ": open,
                },
                "md:flex  w-full py-4 md:py-1 lg:gap-4 md:items-center  md:h-auto overflow-hidden"
              )}
            >
              <>
                {links.map((link, idx) => {
                  return (
                    <Link key={idx} href={link.href}>
                      <a
                        onClick={() => setOpen(!open)}
                        className={
                          router.pathname === link.href
                            ? "font-semibold border-brand-500 border-b-2 text-brand-500 md:mx-2 transition duration-700"
                            : "" +
                              cn(
                                {
                                  [`${link.classes}  btn-brand inline-block px-3 py-0 mt-1`]:
                                    link.button,
                                },
                                {
                                  "pt-2 sm:p-0 sm:px-2 block text-gray-700 hover:text-brand-500 border-b-2 border-transparent font-semibold":
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

                <Link key='signin' href='/' className='border-none'>
                  <Button
                    loading={loadingButton("Sign in")}
                    onClick={() => {
                      setLoaderVisible(true);
                      setOpen(!open);
                    }}
                    className={
                      "ant-btn ant-btn-default btn-brand-outline ml-auto  btn-brand inline-block px-3 py-0 mt-1"
                    }
                  >
                    Sign in
                    <div className=''></div>
                  </Button>
                </Link>
                <Link key='createAccount' href='/' className='border-none'>
                  <Button
                    loading={loadingButton("Create account")}
                    onClick={() => {
                      setLoaderVisible(true);
                      setOpen(!open);
                    }}
                    className={
                      "ant-btn ant-btn-default btn-brand ml-4 md:ml-0 btn-brand inline-block px-3 py-0 mt-1"
                    }
                  >
                    Create account
                  </Button>
                </Link>
              </>
            </nav>
          )}
        </Container>
      </header>
    </ClickAwayListener>
  );
}

export default Header;
