import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  VStack,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <>
            <meta
              name="discription"
              content="What is the best way to reach out to students?marketing shiksha finder,Benefites of marketing with shikshafinder,how to market your educational platform,how to reach out to more students,how to find best school for your child?,how to reach out to more students in less budget?,How to reach out to more students in less time"
            />
            <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          </>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of Harsh Jani`}
      />
      <Text fontWeight="medium">"Harsh Jani"</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Parent = () => {
  return (
    <>
      <Head>
        <title>
          how to market your company to students with shiksha finder marketing{" "}
        </title>

        <meta
          name="discription"
          content="What is the best way to reach out to students?marketing shiksha finder,Benefites of marketing with shikshafinder,how to market your educational platform,how to reach out to more students,how to find best school for your child?,how to reach out to more students in less budget?,How to reach out to more students in less time"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="discription"
          content="How to approach more students for your educational platform "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1"> What is shiksha finder marketing?</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="Student choosing a good school"
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <BlogTags tags={["Student", "Education"]} />
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                How to reach out to more students in less time and budget?
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Marketing with shiksha finder is one of the best way to reach out
              to your students, you can reach out to more students in less time
              and budget with shiksha finder ,as we are an aggregtor of all the
              schools and coaching classes in india, so you can e confident that
              most of our audience are students.
            </Text>
            <BlogAuthor
              name="Harsh Jani"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Hey Industry Leaders! How to Reach Students in Today's Digital Duniya
          ✨
        </Heading>
        <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
          <Text as="p" fontSize="lg">
            <b>
              {" "}
              In Today's Digital world it is mandetory to market and reach out
              to students or your target audience with help of digital media
              because most of the audience are there.with help of shiksha finder
              it is very easy to target your audience and it is relaible
              platform for your future ventures and marketing plans.{" "}
            </b>
            <br />
            <br />
            <b> 1. Be Present Where They Are:</b> Think Instagram reels, YouTube
            tutorials, Facebook groups – students are hanging out online,
            soaking up content. Create short, engaging videos showcasing your
            teaching style, course highlights, and student testimonials. Make it
            informative and fun.
            <Link
              href="https://marketing.shikshafinder.com/marketing"
              isExternal
            >
              start marketing anything.
              <ExternalLinkIcon mx="2px" />
            </Link>
            <br />
            <Text as="p" fontSize="lg">
              <b>2. Master the Magic of Social Media:</b> Don't just post,
              engage! Start conversations on your Facebook page, answer
              questions on Twitter, and run interactive polls on Instagram. Show
              students you're not just another faceless institution, but a
              community they can be part of.
              <br />
            </Text>
            Engage your students with help of shiksha finder{" "}
            <Link
              href="   https://marketing.shikshafinder.com/marketing"
              isExternal
            >
              Shiksha Finder Lectures <ExternalLinkIcon mx="2px" />
            </Link>
            <br /> <b>Leverage the Power of Shiksha Finder</b>This website is a
            game-changer for educators! Upload your demo lectures for free,
            reaching a wider audience of students actively searching for the
            perfect course. Plus, you can showcase your educational platform and
            attract potential enrolments. Think of it as your online storefront
            attracting curious customers!
            <Text
              as="span"
              color="blue.400"
              textDecoration="underline"
              cursor="pointer"
            >
              <a href="https://marketing.shikshafinder.com/marketing">
                marketing ShikshaFinder
              </a>
            </Text>
            <br /> <b>Run Targeted Ads: </b>- With shiksha finder, you can run
            targeted ads for perticular student for the class in which they are
            studying, so that you can reach out to the right student at the
            right time.
            <Text
              as="span"
              color="blue.400"
              textDecoration="underline"
              cursor="pointer"
            >
              <a href="https://marekting.shikshafinder.com/marketing">
                Shiksha Finder Marketing
              </a>
            </Text>
            <br />
            <b>With help of your students get honest reviews</b> You can attract
            more students with more good reviews.
            <Text
              as="span"
              color="blue.400"
              textDecoration="underline"
              cursor="pointer"
            >
              <a href="https://marketing.shikshafinder.com/marketing">
                Shiksha Finder Marketing
              </a>
            </Text>{" "}
          </Text>

          <Text as="p" fontSize="lg">
            So making your Educational platform a brand with shiksha finder is
            so easy and great.
            <Text
              as="span"
              color="blue.400"
              textDecoration="underline"
              cursor="pointer"
            >
              <a href="https://marketing.shikshafinder.com/marketingFormForIndustry">
                Get Started
              </a>
            </Text>{" "}
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default Parent;
