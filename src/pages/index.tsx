import Head from "next/head";
import { useAuthContext } from "@/context";
import { NextSeo } from "next-seo";
import { SimpleGrid } from "@chakra-ui/react";
import { FcAdvertising, FcBullish, FcMoneyTransfer } from "react-icons/fc";
import Link from "next/link";
import { ReactElement } from "react";
import Slider from "../components/slider";


import {
  Container,
  chakra,
  Stack,
  Text,
  Button,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";



export default function Home() {
  const { user } = useAuthContext();
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
        <meta
          name="keywords"
          content="LDCE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
<Slider/>
    </>
  );
}
