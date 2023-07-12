import Head from "next/head";
import TalentPoolHero from "@components/talent-pool/talent-pool-hero";
import HireService from "@components/talent-pool/hire-service";
import FrequentlyAskedQuestion from "pages/companies/faq";

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
        <meta
          name='keywords'
          content='hire engineers, remote developers, work from home, build remote team, appexert'
        />
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

      <TalentPoolHero />
      <h1 className="heading pt-2 text-center">Frequently asked questions</h1>
      <FrequentlyAskedQuestion feature='company' className="landingPage" expand={false} />
    </>
  );
}
