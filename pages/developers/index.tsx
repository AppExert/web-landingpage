import Head from "next/head";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";


import Container from "@components/container";
import BrandShowcase from "@components/home/brand-showcase";
import ComparePlatforms from "./compare-platforms"
import HowItWorks from "./how-it-works";
import Hero from "./hero";
import WhyChooseAppExert from "@components/home/why-choose-appexert";
import DevBenefits from "./devbenefits";
import HowItWorksVector from "./how-it-works-vectors";
import Testimonials from "./testimonials";


const isHideDeveloperPage = process.env.NEXT_PUBLIC_HIDE_DEVELOPER_PAGE;

const Developers = () => {
  return (
    <>
      <Head>
        <title>AppExert | Join our Community of (100+) Remote Developers</title>
        <meta
          name='description'
          content={
            "AppExert | Join a network of the World's Best Developers & get full-time, long-term Remote Software Jobs with better compensation and career growth."
          }
        />
        <meta
          name='keywords'
          content='development jobs remote, work from home jobs, full time remote jobs, remote working employees, appexert'
        />

        {/* og tags */}
        <meta
          property='og:title'
          content='AppExert | Join our Community of (100+) Remote Developers'
        />
        <meta property='og:site_name' content='AppExert' />
        <meta property='og:url' content='https://appexert.com/developers' />
        <meta
          property='og:description'
          content="AppExert | Join a network of the World's Best Developers & get full-time, long-term Remote Software Jobs with better compensation and career growth."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://appexert.com/_next/image?url=%2Fimages%2Fdevelopers%2Fwork-from-anywhere.svg&w=640&q=75'
        />
      </Head>
      <Container >
        <section>
        
          <div>
            
           
            <div className=' z-40  '>
              {/* Content of the div */}
              <div >
                <Hero/>
                <BrandShowcase />
                <ComparePlatforms />
                <HowItWorks/>
                <Testimonials/>
                <WhyChooseAppExert/>
                <DevBenefits/>
                <HowItWorksVector/>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Developers;
