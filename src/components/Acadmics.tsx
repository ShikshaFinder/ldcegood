import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import{WarningIcon} from "@chakra-ui/icons";
import{ViewIcon} from "@chakra-ui/icons";
import { Grid, useColorModeValue } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";

function Academics() {
  return (
    <>
      <div style={{ width: "80%", marginInline: "auto" }}>
        <chakra.span
          color="-moz-initial"
          bg="linear-gradient(transparent 90%,#FF0000 50%)"
          fontSize="4xl"
        >
          Academics
        </chakra.span>
      </div>
      <br />
      <chakra.div
        style={{
          display: "grid",

          margin: "auto",
          gap: "23px",
        }}
        width={{
          base: "80%",
          md: "87%",
          lg: "50%",
        }}
      >
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={1}
        >
          <Box
            w="100%"
            aspectRatio={"1/1"}
            bgColor={"white"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            flexGrow={1}
            justifyContent={"center"}
            _hover={{
              bg: useColorModeValue("red.400", "gray.900"),
              color: useColorModeValue("white", "gray.900"),
            }}
            border={"1px solid"}
          >
            <StarIcon w={100} h={100} />
            <Text fontSize="3xl">Academics</Text>
          </Box>{" "}
          <Box
            w="100%"
            aspectRatio={"1/1"}
            bgColor={"white"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            flexGrow={1}
            justifyContent={"center"}
            _hover={{
              bg: useColorModeValue("red.400", "gray.900"),
              color: useColorModeValue("white", "gray.900"),
            }}
            border={"1px solid"}
          >
            <WarningIcon w={100} h={100} />
            <Text fontSize="3xl">Centers</Text>
          </Box>{" "}
          <Box
            w="100%"
            aspectRatio={"1/1"}
            bgColor={"white"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            flexGrow={1}
            justifyContent={"center"}
            _hover={{
              bg: useColorModeValue("red.400", "gray.900"),
              color: useColorModeValue("white", "gray.900"),
            }}
            border={"1px solid"}
          >
            <ViewIcon w={100} h={100} />
            <Text fontSize="3xl">Startup</Text>
          </Box>{" "}
          <Box
            w="100%"
            aspectRatio={"1/1"}
            bgColor={"white"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            flexGrow={1}
            justifyContent={"center"}
            _hover={{
              bg: useColorModeValue("red.400", "gray.900"),
              color: useColorModeValue("white", "gray.900"),
            }}
            border={"1px solid"}
          >
            <WarningIcon w={90} h={75} />
            <Text fontSize="3xl">Departments</Text>
          </Box>{" "}
        </Grid>
      </chakra.div>
    </>
  );
}

export default Academics;
