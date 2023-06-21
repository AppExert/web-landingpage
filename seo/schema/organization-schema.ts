export default function organizationSchemaLd() {
  return {
    __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AppExert",
        "alternateName": "AppExert",
        "url": "https://appexert.com/",
        "logo": "https://appexert.com/_next/image?url=%2Fimages%2Flogo.svg&w=256&q=75",
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
