/* eslint-disable @typescript-eslint/no-empty-function */
import GetStartedBanner from "@components/talent-pool/get-started-banner";
import Container from "@components/container";
import { Developer } from "@models/developer.model";
import { getLandingDevelopers } from "@services/developer-api.service";
import { Input, Skeleton, Row, Button } from "antd";
import { useEffect, useState } from "react";
import TalentPoolList from "./talent-pool-list";
import HireService from "./hire-service";
import Link from "next/link";

const { Search } = Input;
const TalentPoolHero = () => {
  const [developerData, setDeveloperData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInputValue, setSearchInputValue] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    fetchDevelopers(event.search);
  };

  const fetchDevelopers = (search: any) => {
    setIsLoading(true);
    getLandingDevelopers(
      9,
      0,
      /\s/.test(search) ? search.split(" ").join("_") : search
    )
      .then((result) => {
        if (result && result.data) {
          setIsLoading(false);
          if (result.data.list) {
            const finalData = result.data.list.map((item: any) => {
              item.profileSkills = [];
              return item;
            });
            setDeveloperData(finalData);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchDevelopers("");
  }, []);

  return (
    <Container className="md:py-[100px] py-[48px] overflow-hidden">

      <section >
        <div className="text-center flex flex-col justify-center items-center ">
          <h1 className="heading pt-2 text-center md:max-w-[775px] text-[48px]">
            Hire qualified developers in record time
          </h1>
          <p className='section-paragraph text-[#908E9F] md:max-w-[672px]  py-[10px] pb-[20px]  '>
            Get instant insights with our in-depth developer profiles & build your team from untapped & quality talents.
          </p>
        </div>
         
        <div className='flex justify-center py-10 text-center lg:text-left'>
          <div className='flex flex-col items-center'>
            <Search
              className='talentSearch  mr-2 pb-2 md:pb-0 text-[#000000]'
              allowClear
              value={searchInputValue}
              placeholder='Search by skills & roles'                
              onChange={(value) => {
                setSearchInputValue(value.target.value);
              }}
              onSearch={(value) => {
                fetchDevelopers(value?.toLowerCase());
              }}
            />

            <p className='pt-4 text-[#908E9F] text-[14px] z-[45]'>
                Popular categories
              <span
                className='talentSearchInput'
                onClick={() => {
                  fetchDevelopers("Fullstack");
                  setSearchInputValue("Fullstack");
                }}
              >
                {" "}
                  Fullstack Engineer
              </span>
              <span
                className='talentSearchInput'
                onClick={() => {
                  fetchDevelopers("Frontend");
                  setSearchInputValue("Frontend");
                }}
              >
                {" "}
                  Frontend Engineer
              </span>
              <span
                className='talentSearchInput'
                onClick={() => {
                  fetchDevelopers("Backend");
                  setSearchInputValue("Backend");
                }}
              >
                {" "}
                  Backend Engineer
              </span>
            </p>
          </div>
        </div>
       
      </section>

      <div style={{ position: "relative" }}>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]"
          style={{
            width: "1000px",
            height: "1000px",
            borderRadius: "50%",
            background:
                  "radial-gradient(37.76% 37.76% at 50.00% 38.71%, rgba(231, 180, 255, 0.20) 0%, rgba(137, 118, 254, 0.20) 100%)",
            filter: "blur(80px)",
            zIndex: "1",
            top: "370px",
            bottom: "auto",
          }}
        ></div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]"
          style={{
            width: "1000px",
            height: "1000px",
            borderRadius: "50%",
            background:
                  "radial-gradient(37.76% 37.76% at 50.00% 38.71%, rgba(231, 180, 255, 0.20) 0%, rgba(137, 118, 254, 0.20) 100%)",
            filter: "blur(80px)",
            zIndex: "1",
            bottom: "-620px",
            top: "auto",
          }}
        ></div>
        <div className="bg-[#020013] z-40 relative">
          <div className="relative md:mt-[50px]" style={{ zIndex: "2" }}>
            <div className="py-[50px]">
              {isLoading && (
                <div className='site-card-wrapper h-screen '>
                  <Row className='gap-6 mx-10'>
                    <Skeleton avatar paragraph={{ rows: 4 }} />
                    <Skeleton avatar paragraph={{ rows: 4 }} />
                    <Skeleton avatar paragraph={{ rows: 4 }} />
                  </Row>
                </div>
              )}
              {developerData && developerData.length !== 0 && !isLoading ? (
                <div className='site-card-wrapper z-40'>
                  <Row className='p-2 md:p-0'>
                    {developerData.map((dev: Developer, index: number) => {
                      return <TalentPoolList key={index} devCard={dev} />;
                    })}
                  </Row>
                </div>
              ) : (
                !isLoading && (
                  <div className='flex  flex-col justify-center items-center  py-5'>
                    <svg width="226" height="226" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_f_3127_109330)">
                        <circle cx="113" cy="113" r="37.5" fill="#600000"/>
                      </g>
                      <path d="M121.335 124.111L135.223 138M135.223 124.111L121.335 138M110.223 118.555C99.4846 118.555 90.7791 127.261 90.7791 138H110.223M121.335 99.1109C121.335 105.247 116.36 110.222 110.223 110.222C104.087 110.222 99.1124 105.247 99.1124 99.1109C99.1124 92.9744 104.087 87.9998 110.223 87.9998C116.36 87.9998 121.335 92.9744 121.335 99.1109Z" stroke="#FFCCCC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <filter id="filter0_f_3127_109330" x="0.5" y="0.5" width="225" height="225" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="37.5" result="effect1_foregroundBlur_3127_109330"/>
                        </filter>
                      </defs>
                    </svg>

                    <p className="text-white  text-[22px] font-[500]  ">No results found</p>
                    <p className="text-[#908E9F] py-2 text-[18px] text-center">Try shortening or rephrasing your search </p>

                    <p className=' text-[#908E9F] text-[14px] flex flex-col md:flex-row gap-4'>
                      <span
                        className='px-[12px] py-1 mx-2 font-semibold cursor-pointer rounded-[4px] border-[1px] border-[#252234] hover:border-[#716999]'
                        onClick={() => {
                          fetchDevelopers("Fullstack");
                          setSearchInputValue("Fullstack");
                        }}
                      >
                        {" "}
                  Fullstack Engineer
                      </span>
                      <span
                        className='px-[12px] py-1 mx-2 font-semibold cursor-pointer rounded-[4px] border-[1px] border-[#252234] hover:border-[#716999]'
                        onClick={() => {
                          fetchDevelopers("Frontend");
                          setSearchInputValue("Frontend");
                        }}
                      >
                        {" "}
                  Frontend Engineer
                      </span>
                      <span
                        className='px-[12px] py-1 mx-2 font-semibold cursor-pointer rounded-[4px] border-[1px] border-[#252234] hover:border-[#716999]'
                        onClick={() => {
                          fetchDevelopers("Backend");
                          setSearchInputValue("Backend");
                        }}
                      >
                        {" "}
                  Backend Engineer
                      </span>
                    </p>

                    <p className="text-[#908E9F] py-2 text-[18px] mt-8 text-center">If the position you searched for is not available in the public pool.
                      <br/>
Click the below option to get in touch with us.</p>
                    <div className='flex gap-4 items-center justify-center mt-10'>
                      <Link href='/companies/start-hiring?step=1'>
                        <Button type='primary' className='page-btn' size='large'>
              Get started for free
                        </Button>
                      </Link>
                    </div>

                  </div>
                )
              )}
              <GetStartedBanner developerData={developerData} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>      
      <HireService />

    </Container>
  );
};

export default TalentPoolHero;
