import { useState, useEffect } from "react";
import { LayoutProvider } from "@components/layoutContext";
import { AppProps } from "next/app";
import "../styles/index.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { LiveChatWidget } from "@livechat/widget-react";
import { getAppSettings, getSkillsConfig } from "@services/admin.service";

import "typeface-inter";

const isDevelopmentMode = process.env.NODE_ENV === "development";

function MyApp({ Component, pageProps }: AppProps) {
  const [showLiveChat, setShowLiveChat] = useState<boolean>(false);
  useEffect(() => {
    getAppSettings().then((settings: any) => {
      const { data } = settings;
      if (data && data.settings) {
        setShowLiveChat(data.settings.chatEnabled || false);
      }
    });
    getSkillsConfig()
      .then((result: any) => {
        if (result) {
          const { data } = result;
          if (data.data) {
            // TODO: Map the skills as per app logic, yet to explore
            // console.log(data.data);
          }
        }
      })
      .catch(() => {
        // do nothing
      });
  }, []);

  const queryClient = new QueryClient();
  const license: string | undefined = process.env.NEXT_PUBLIC_LIVECHAT_ID;

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <Component {...pageProps} />
        {showLiveChat && license && (
          <LiveChatWidget license={license} visibility='minimized' />
        )}
      </LayoutProvider>
      {isDevelopmentMode && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
