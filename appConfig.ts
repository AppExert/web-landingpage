type APP_CONFIG = {
  apiBaseUrl: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://us-central1-appexert-platform-staging.cloudfunctions.net/api";

const appConfig: APP_CONFIG = {
  apiBaseUrl: API_BASE_URL,
};

export default appConfig;
