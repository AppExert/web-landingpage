export default function localBusinessSchemaLd() {
  return {
    __html: `{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "AppExert",
        "image": "https://appexert.com/_next/image?url=%2Fimages%2Flogo.svg&w=256&q=75",
        "@id": "",
        "url": "https://appexert.com/",
        "telephone": "+91 44 6691 5305",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 143, Dr. M.G.R Road (North Veeranam Salai), Kandanchavady, Perungudi",
          "addressLocality": "Chennai",
          "postalCode": "600096",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9656069,
          "longitude": 80.24632559999999
        } ,
        "sameAs": [
          "https://www.facebook.com/appexert",
          "https://twitter.com/appexert",
          "https://www.linkedin.com/company/appexert/",
          "https://appexert.com/"
        ] 
      }
      
      `,
  };
}
