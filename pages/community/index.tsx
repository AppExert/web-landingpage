import CommunityContent from "@components/community/community-content";
import CommunityHero from "@components/community/community-hero";
import Head from "next/head";
import CommunityPower from "@components/community/community-power";
import CommunityStorie from "@components/community/community-story";
import GetStartedBanner from "@components/community/get-started-banner";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          AppExert | Build Your Products Faster & Better with Remote Teams
        </title>
        <meta
          name='description'
          content='Building products with Remote Developers is easier with AppExert. Our team of hand-picked Remote Team helps you execute critical projects successfully'
        />
        <meta name="keywords" content="hire engineers, remote developers, work from home, build remote team, appexert" />
        <meta name='author' content='Appexert' />
        <meta name='doc-type' content='Web Page' />
        <meta name='copyright' content='https://appexert.com/' />
        <meta name='robots' content='index, follow' />
        <meta name='distribution' content='Global' />
        <meta name='publisher' content='Appexert' />
        <meta
          name='classification'
          content='hire developers, manage remote team, managed remote developers, start hiring, hire developers, appexert'
        />
      </Head>

      
      <CommunityHero />
      <CommunityContent/>
      <CommunityPower />
      <CommunityStorie />
      <GetStartedBanner />
    </>
  );
}
