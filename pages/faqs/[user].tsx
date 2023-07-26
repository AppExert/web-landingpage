import Container from "@components/container";
import { LayoutGroup, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import FrequentlyAskedQuestion from "../companies/faq";
import { useRouter } from "next/router";

const FAQs = () => {
  const router = useRouter();
  const { user } = router.query;
  const handleChange = (key: any) => {
    if (key == 0) {
      router.push("/faqs/developers");
    } else {
      router.push("/faqs/companies");
    }
  };

  const [activeItem, setActiveitem] = useState(user == "developers" ? 0 : 1);

  const items = [
    {
      title: "Developers"
    },
    {
      title: "Companies"
    }
  ]
  return (
    <>
      <Head>
        <title>
          AppExert | Learn More About Hiring Your Technical Remote Team
        </title>
        <meta
          name='description'
          content='Want to know how AppExert online platform is different from other Remote Job websites? Read answers to FAQs to help you make a better choice.'
        />
        <meta
          name='keywords'
          content='appexert faq, frequently asked questions appexert, hire developers'
        />
      </Head>
      {user && (
        <section className="md:py-[100px] py-[48px] " >
          <Container>
            <div className='flex flex-col justify-center items-center pb-[32px] md:pb-[38px]'>
              <p className='green-label'>HAVE QUESTIONS? WE’RE HERE TO HELP</p>
              <h1 className='heading pt-2 md:w-[651px] text-center'>
          Frequently asked questions
              </h1>
            </div>        

            <div className='flex justify-center pt-[32px] md:pb-[56px] pb-[32px]'>
              <LayoutGroup>
                <div className="flex justify-center bg-[#1B182A] rounded-[32px] p-[6px] text-[16px] text-white font-medium">
                  {items.map((item, i) => {
                    const isActive = i === activeItem;                 

                    return (
                      <motion.div
                        whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
                        key={i}
                      >
                        <button
                          onClick={() => {
                            setActiveitem(i),
                            handleChange(i)
                          }}
                          type="button"
                          disabled={i === activeItem}
                          className="relative m-0 p-[12px] pr-[18px] bg-transparent border-none outline-none cursor-pointer"
                        >
                          {isActive && (
                            <motion.div
                              layoutId="SegmentedControlActive"
                              className="border-[#715EF9]  absolute inset-0 z-10 border-[1px] drop-shadow-[0_1px_1px_rgba(16, 24, 40, 0.06)] bg-[#475EF919] rounded-[40px] shadow-md"
                            />
                          )}
                          <div className="relative z-20 md:text-[16px] text-[12px] font-medium">{item.title}</div>
                        </button>

                      </motion.div>
                    );
                  })}
                </div>
              </LayoutGroup>

            </div>
       
            <FrequentlyAskedQuestion feature={activeItem === 0 ? "developer": "company"} className="landingPage" expand={true} />
           
          </Container>
        </section> )}
    </>
  );
};

export default FAQs;
