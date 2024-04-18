import React from 'react'
import {Box, Heading, Text, useColorModeValue} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/system'

function Aboutldce() {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      marginTop={{ base: "3", sm: "0" }}
    >
      {/* <BlogTags tags={['Engineering', 'Product']} /> */}
      <div style={{ width: "100%", marginInline: "auto" }}>
        <chakra.span
          color="-moz-initial"
          bg="linear-gradient(transparent 90%,#FF0000 50%)"
          fontSize="4xl"
        >
          About Ldce
        </chakra.span>
      </div>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue("gray.700", "gray.200")}
        fontSize="lg"
      >
        LD College of Engineering is a premier engineering college in Gujarat,
        India affiliated with Gujarat Technological University (GTU), Ahmedabad
        and administrated by the Department of Technical Education, Gujarat
        State.
      </Text>
      {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
    </Box>
  );
}

export default Aboutldce