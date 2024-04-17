import { Fragment } from "react";
import {
  Container,
  Text,
  Stack,
  Divider,
  Icon,
  Flex,
  chakra,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icon
import { ImQuotesLeft } from "react-icons/im";

interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: "Dr. Prof. Rajul Gajjar",
    position: "Principal ",
    company: "LDCE",

    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`,
  },
  {
    name: "Dr. Prof. Rajul Gajjar",
    position: "Director",
    company: "LDCE",

    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.`,
  },
];

const Testimonials = () => {
  return (
    <>
      <Flex justifyContent="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3}>
          Important Announcements
        </chakra.h3>
      </Flex>
      <Container maxW="5xl" py={10} px={{ base: 5, md: 20 }}>
        {testimonials.map((obj, index) => (
          <Fragment key={index}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={10}
              pt={1}
              justifyContent="center"
            >
              <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
                <Icon as={ImQuotesLeft} w={8} h={8} color="gray.400" />
                <Text fontSize="md" fontWeight="medium">
                  {obj.content}
                </Text>
                <Stack
                  alignItems={{ base: "center", sm: "flex-start" }}
                  spacing={0}
                >
                  <Text fontWeight="bold" fontSize="lg">
                    {obj.name}
                  </Text>
                  <Text fontWeight="medium" fontSize="sm" color="gray.600">
                    {obj.position}, {obj.company}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            {testimonials.length - 1 !== index && <Divider my={6} />}
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export default Testimonials;
