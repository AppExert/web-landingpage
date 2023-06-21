import Head from "next/head";
import { useRouter } from "next/router";

const Meta = () => {
  const router = useRouter();
  const fallbackBaseUrl = "https://appexert.com";
  const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL || fallbackBaseUrl}${router.pathname}`;

  return (
    <Head>
      <link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
      <link rel='icon' type='image/png' href='/favicon/favicon.png' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta name='description' content={"AppExert"} />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
      <meta
        name='google-site-verification'
        content='vfdNO2BjMU0iR8ZY-MAq3rDnj1Beqg9g-N22BJHWVMI'
      />
      <meta name='msvalidate.01' content='7DB339860E01814DB12367B2CF464543' />
      <link rel='canonical' href={canonicalUrl} />
    </Head>
  );
};

export default Meta;
