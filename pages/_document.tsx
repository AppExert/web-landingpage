import Document, { Html, Head, Main, NextScript } from "next/document";
import localBusinessSchemaLd from "seo/schema/local-business-schema";
import organizationSchemaLd from "seo/schema/organization-schema";
import websiteSchemaLd from "seo/schema/website-schema";
import Script from "next/script";
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY;
const GOOGLE_TAG_MANAGER_CODE = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CODE;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GCP_MAP_API_KEY = process.env.NEXT_PUBLIC_GCP_MAP_API_KEY;

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' style={{ scrollBehavior: "smooth" }}>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=PT+Sans+Caption:wght@700&display=swap'
            rel='stylesheet'
          />
          {/* google tag manager snippet */}
          <Script
            id='gtm'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',${GOOGLE_TAG_MANAGER_CODE});
              `
            }}
          />
          {/* MS clarity snippet */}
          <Script
            id="ms-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", '${CLARITY_PROJECT_ID}');
              `
            }}
          />
          <Script
            id='local-business'
            type='application/ld+json'
            dangerouslySetInnerHTML={localBusinessSchemaLd()}
            key='local-business-jsonld'
          />
          <Script
            id='org-schema'
            type='application/ld+json'
            dangerouslySetInnerHTML={organizationSchemaLd()}
            key='local-business-jsonld'
          />
          <Script
            id='web-schema'
            type='application/ld+json'
            dangerouslySetInnerHTML={websiteSchemaLd()}
            key='local-business-jsonld'
          />
          {/* Google Maps Autocomplete snippet */}
          <Script
            type='text/javascript'
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GCP_MAP_API_KEY}&libraries=places`}
          ></Script>
        </Head>

        <body>
          {/* google tag manager no script */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_CODE}`}
              height='0'
              width='0'
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
