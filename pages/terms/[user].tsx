import { useRouter } from "next/router";
import { Tabs } from "antd";
import Head from "next/head";
import Container from "@components/container";
import CompanyTerms from "@components/terms/company-terms";
import DeveloperTerms from "@components/terms/developer-terms";

const { TabPane } = Tabs;

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
        <>
          <section className='hero bg-light-gray pt-10 flex justify-center items-center' style={{ "height": "520px" }}>
            <h2 className='section-heading text-center pb-10 font-bold text-4xl'>
              Terms and Conditions
            </h2>
          </section>
          <Container className="terms-conditions section-heading mt-4 pb-14">
            <Tabs
              defaultActiveKey={user == "developer" ? "1" : "2"}
              onChange={handleChange}
              centered
            >
              <TabPane tab='Developers' key='1'>
                <DeveloperTerms />
              </TabPane>
              <TabPane tab='Companies' key='2'>
                <CompanyTerms />
              </TabPane>
            </Tabs>
          </Container>
        </>
      )}
    </>
  );
};

export default TermsOfService;
