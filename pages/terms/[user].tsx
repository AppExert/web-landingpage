import { useRouter } from "next/router";
import Head from "next/head";
import Container from "@components/container";
import CompanyTerms from "@components/terms/company-terms";
import DeveloperTerms from "@components/terms/developer-terms";
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

const TermsOfService = () => {
  const router = useRouter();
  const { user } = router.query;
  const handleChange = (key: any) => {
    if (key == 1) {
      router.push("/terms/developer");
    } else {
      router.push("/terms/company");
    }
  };

  const [activeItem, setActiveitem] = useState(user == "developer" ? 0 : 1);

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
          AppExert | Learn our Terms of Service to Hire Best Remote Developers
        </title>
        <meta
          name='description'
          content='Get more information on Terms and Services of our Remote work platform. Build successful products faster, better and cost-effective with AppExert.'
        />
        <meta
          name='keywords'
          content='terms of service, appexert smart developers, remote developers'
        />
      </Head>
      {user && (
        <section className="md:py-[100px] py-[48px] " >
          <Container>
            <div className='flex  justify-center items-center pb-[32px] md:pb-[38px]'>
              <h1 className='heading pt-2 md:w-[651px] text-center'>
              Terms of service
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
                              className="border-[#715EF91A]  absolute inset-0 z-1 border-[1px] drop-shadow-[0_1px_1px_rgba(16, 24, 40, 0.06)] bg-[#475EF919] rounded-[40px] shadow-md"
                            />
                          )}
                          <div className="relative z-2 md:text-[16px] text-[12px] font-medium">{item.title}</div>
                        </button>

                      </motion.div>
                    );
                  })}
                </div>
              </LayoutGroup>

            </div>
            { activeItem === 0 ? 
              <DeveloperTerms />
              :
              <CompanyTerms />
            }
          </Container>
        </section>
      )}
    </>
  );
};

export default TermsOfService;

