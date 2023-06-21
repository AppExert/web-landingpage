/* eslint-disable @typescript-eslint/no-empty-function */
import GetStartedBanner from "@components/talent-pool/get-started-banner";
import Container from "@components/container";
import { Developer } from "@models/developer.model";
import { getLandingDevelopers } from "@services/developer-api.service";
import { Input, Skeleton, Row } from "antd";
import { useEffect, useState } from "react";
import TalentPoolList from "./talent-pool-list";

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
    <>
      <section className='pt-28 '>
        <Container>
          <div className='text-center '>
            <div className='hero-heading '>
              Hire
              <span className='text-brand-500 px-2 '>Developers</span>
              you want{" "}
            </div>
            <p className='section-preheading pt-2'>
              Get instant insights with our in-depth developer profiles & build
              your team from untapped & quality talents.
            </p>
          </div>
          <div className='flex justify-center py-10 text-center lg:text-left'>
            <div className='flex flex-col items-center '>
              <Search
                className='talentSearch  mr-2 pb-2 md:pb-0'
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

              <p className='pt-4'>
                Popular categories:
                <span
                  className='px-2 font-semibold cursor-pointer'
                  onClick={() => {
                    fetchDevelopers("Fullstack");
                    setSearchInputValue("Fullstack");
                  }}
                >
                  {" "}
                  Fullstack Engineer
                </span>
                <span
                  className='px-2 font-semibold cursor-pointer'
                  onClick={() => {
                    fetchDevelopers("Frontend");
                    setSearchInputValue("Frontend");
                  }}
                >
                  {" "}
                  Frontend Engineer
                </span>
                <span
                  className='px-2 font-semibold cursor-pointer'
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
        </Container>
      </section>
      <section className='py-5 bg-light-gray '>
        <Container>
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
            <div className='site-card-wrapper   z-40'>
              <Row className='p-2 md:p-0'>
                {developerData.map((dev: Developer, index: number) => {
                  return <TalentPoolList key={index} devCard={dev} />;
                })}
              </Row>
            </div>
          ) : (
            !isLoading && (
              <div className='flex  flex-col justify-center items-center text-xl text-brand-500 py-5'>
                <p>
                  The position you searched for is not available in the public
                  pool.
                </p>
                <p>Fill out the form below to get in touch with us.</p>
              </div>
            )
          )}
        </Container>
      </section>

      <GetStartedBanner developerData={developerData} isLoading={isLoading} />
    </>
  );
};

export default TalentPoolHero;
