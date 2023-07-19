import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// Countries to show developer terms on demand
const developerClusterCountries = [
  "IN",
  "VN",
  "SA",
  "UA",
  "PL",
  "LK",
  "PK",
  "BD",
  "PH",
  "BG",
  "MD",
  "RO",
];

const FrequentlyAskedQuestion = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>(null);
  // For more details, https://ipapi.co/
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        response.json().then((jsonData) => {
          setUserInfo(jsonData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (userInfo) {
      if (developerClusterCountries.includes(userInfo?.country)) {
        router.push("/faqs/developers");
      } else {
        router.push("/faqs/companies");
      }
    }
  }, [userInfo]);
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
    </>
  );
};

export default FrequentlyAskedQuestion;
