export default function websiteSchemaLd() {
  return {
    __html: `{
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "AppExert",
        "url": "https://appexert.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://jobs.appexert.com/jobs{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
      
        
    `,
  };
}
