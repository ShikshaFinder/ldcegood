import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import { MdBolt } from "react-icons/md";

const LDCESection = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
      >
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          maxW="480px"
        >
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}
          >
            <Box
              py={1}
              px={2}
              lineHeight={1}
              rounded="full"
              color="white"
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
            >
              What's new
            </Box>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Link href="/aboutus/new">
                {" "}
                <Text lineHeight={1}>See our recent updates</Text>
              </Link>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </HStack>
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            "Exploring Excellence at LD College of Engineering"
            <br />
            <chakra.span color="teal">
              Shaping the Future of Technical Education
            </chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            <b>Introduction to LD College of Engineering:</b>
            <br />
            Established in 1948, LD College of Engineering, located in
            Ahmedabad, Gujarat, is one of the premier technical institutions
            in India. Affiliated with Gujarat Technological University (GTU),
            LDCE has a rich history of academic excellence and innovation.
            <br />
            <br />
            <b>Academic Programs:</b>
            <br />
            LD College of Engineering offers undergraduate and postgraduate
            programs in various disciplines of engineering including Civil,
            Mechanical, Electrical, Computer Science, and Information
            Technology. The college also provides doctoral programs for
            aspiring researchers.
            <br />
            <br />
            <b>Infrastructure and Facilities:</b>
            <br />
            LDCE boasts state-of-the-art infrastructure including well-equipped
            laboratories, modern classrooms, a central library, and research
            centers. The campus also provides facilities for sports,
            extracurricular activities, and student housing.
            <br />
            <br />
            <b>Faculty and Research:</b>
            <br />
            The college is home to a highly qualified and experienced faculty
            members who are dedicated to imparting quality education and
            nurturing talent. LDCE encourages research and innovation through
            collaborations with industries and research organizations.
            <br />
            <br />
            <b>Placements and Alumni:</b>
            <br />
            LD College of Engineering has a strong network of alumni who have
            excelled in various fields globally. The college has an excellent
            placement record with leading companies visiting the campus for
            recruitment every year.
            <br />
            <br />
            <b>Join LDCE:</b>
            <br />
            Experience the essence of technical education at LD College of
            Engineering. Join us in our journey towards excellence and
            innovation.
            <br />
            <br />
            <b>Contact Us:</b>
            <br />
            For admissions and inquiries, visit our website or contact the
            college administration.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: "100%", sm: "auto" }}
              h={12}
              px={6}
              color="white"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
              _hover={{
                bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
                opacity: 0.9,
              }}
            >
              <Link href="/admissions">
                {" "}
                <chakra.span> Apply Now</chakra.span>
              </Link>
              <Icon as={MdBolt} h={4} w={4} ml={1} />
            </chakra.button>
            <Box
              justifyContent="center"
              bg={useColorModeValue("white", "gray.800")}
              w={{ base: "100%", sm: "auto" }}
              border="1px solid"
              borderColor="gray.300"
              p={3}
              lineHeight={1.18}
              rounded="md"
              boxShadow="md"
              as={Link}
              zIndex={55555555}
              href="/"
            >
              Virtual Tour
            </Box>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            objectFit="cover"
            src={`https://images.unsplash.com/photo-1572110247876-3a6b3b69b11c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default LDCESection;
