import Head from "next/head";
import { useAuthContext } from "@/context";
import { NextSeo } from "next-seo";
import Preloader from "../components/Preloader";
import Announcement from "../components/Announcements";
import Card from "../components/card";
import Slider from "../components/slider";
import { useEffect, useState } from "react";
import { Grid, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

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
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={0}
      >
        {" "}
        <Card
          name="LDce"
          date="12-12-12"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="hello in the ldce there happeneed something"
        />{" "}
        <Card
          name="ldce"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="12-11-14"
          text="hello in the ldce there happeneed something"
        />{" "}
        <Card
          name="ldce"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="12-11-14"
          text="hello in the ldce there happeneed something"
        />{" "}
        <Card
          name="ldce"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="12-11-14"
          text="hello in the ldce there happeneed something"
        />{" "}
      </Grid>
      <chakra.span
        color="-moz-initial"
        bg="linear-gradient(transparent 90%,#3ff2f2 50%)"
        fontSize="3xl"
      >
        Events
      </chakra.span>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={0}
      >
        {" "}
        <Card
          name="LDce"
          date="12-12-12"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="hello in the ldce there happeneed something"
        />{" "}
        <Card
          name="ldce"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="12-11-14"
          text="hello in the ldce there happeneed something"
        />{" "}
        <Card
          name="ldce"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="12-11-14"
          text="hello in the ldce there happeneed something"
        />{" "}
        <Card
          name="ldce"
          imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="12-11-14"
          text="hello in the ldce there happeneed something"
        />{" "}
      </Grid>
    </>
  );
}
