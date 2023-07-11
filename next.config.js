/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
module.exports = (phase, { defaultConfig }) => {
  return {
    /* config options here */
    reactStrictMode: true,
    images: {
      domains: ["cdn.sanity.io", "avatars.dicebear.com", "firebasestorage.googleapis.com"],
    },
    async redirects() {
      return [{
        source: "/publicCollection",
        destination: "/c",
        permanent: true,
      }]
    }
  };
};
