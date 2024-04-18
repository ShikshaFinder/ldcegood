import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import{WarningIcon} from "@chakra-ui/icons";
import{ViewIcon} from "@chakra-ui/icons";
import { Grid, useColorModeValue } from "@chakra-ui/react";

function Academics() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "60%",
          margin: "auto",
          gap: "23px",
          flexWrap: "wrap",
        }}
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
      </div>
    </>
  );
}

export default Academics;
