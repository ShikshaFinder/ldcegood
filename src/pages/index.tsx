import Head from "next/head";
import { useAuthContext } from "@/context";
import { NextSeo } from "next-seo";
import Preloader from "../components/Preloader";
import Announcement from "../components/Announcements";
import Card from "../components/card";
import Slider from "../components/slider";
import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";  





export default function Home() {
  const { user } = useAuthContext();
  const [isVisible, setIsVisible] = useState(true);

  
 useEffect(() => {
   const timer = setTimeout(() => {
     setIsVisible(false);
   }, 3500);

   // Clear the timer when the component unmounts to avoid memory leaks
   return () => clearTimeout(timer);
 }, []);
    
  return (
    <>
      <NextSeo
        title="LD College Of Engineering"
        description="LDCE is one of the oldest engineering colleges in Gujarat, India. It is located in Ahmedabad. It is affiliated with Gujarat Technological University. It is also known as L.D. College of Engineering."
        openGraph={{
          url: "ldce.ac.in",
          title: "LD College Of Engineering",
          description:
            "LDCE is one of the oldest engineering colleges in Gujarat, India. It is located in Ahmedabad. It is affiliated with Gujarat Technological University. It is also known as L.D. College of Engineering.",
          images: [
            {
              url: "https://shorturl.at/ftAH0",
              alt: "LD College of Engineering Ahmedabad",
            },
          ],
          site_name: "LD College Of Engineering",
          type: "website",
        }}
      />
      <Head>
        <meta name="keywords" content="LDCE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isVisible && <Preloader />}
      <Slider />
      <Announcement />
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={0}
      >
        {" "}
        <Card /> <Card /> <Card /> <Card /> 
      </Grid>
    </>
  );
}
