import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import { type AppProps } from "next/app";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import AuthContextProvider from "@/context";
import Head from "next/head";
// const { BlobServiceClient } = require("@azure/storage-blob");
// const { v1: uuidv1 } = require("uuid");
require("dotenv").config();
import MiniNav from "@/components/miniNav";

const inter = Montserrat({ subsets: ["latin"] });
const supabaseUrl = "https://jbvhauibwcvogbuiqynl.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() =>
    createPagesBrowserClient({ supabaseUrl, supabaseKey })
  );
  const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Head>
          <title>Shiksha Finder</title>
          <meta property="og:title" content="Shiksha Finder" key="title" />
        </Head>
        <ChakraProvider theme={theme}>
          <AuthContextProvider>
            
              {" "}
              <div className={inter.className}></div>
           
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                background: "#fad7d4",
              }}
            >
              {" "}
              <MiniNav />
            </div>
           
            <Component {...pageProps} />
          </AuthContextProvider>
        </ChakraProvider>
      </SessionContextProvider>
    </>
  );
}
