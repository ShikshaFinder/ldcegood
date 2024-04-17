import Head from "next/head";
import { useAuthContext } from "@/context";
import { NextSeo } from "next-seo";
import Preloader from "../components/Preloader";
import Announcement from "../components/Announcements";
import Card from "../components/card";
import Slider from "../components/slider";
import { useEffect, useState } from "react";
import Placement from "../components/Placement";
import SliderForNews from "../components/sliderForNews";
import { chakra } from "@chakra-ui/react";
import Sliderr from "../components/sliderrr"
import Footer from "../components/footer";

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
      <chakra.span
        color="-moz-initial"
        bg="linear-gradient(transparent 90%,#FF0000 50%)"
        fontSize="3xl"
      >
        Important News
      </chakra.span>
      <SliderForNews />

      <chakra.span
        color="-moz-initial"
        bg="linear-gradient(transparent 90%,#3ff2f2 50%)"
        fontSize="3xl"
      >
        Events
      </chakra.span>

      <Sliderr />

      <Placement/>
      <Footer />
    </>
  );
}
