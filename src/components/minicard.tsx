import { Grid, Box, Text } from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

function minicard() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      }}
      justifyItems={"center"}
      gap={1}
      w={{
        md: "70%",
      }}
      marginInline={"auto"}
    >
      <Box w="100%" aspectRatio={"1/1"} bgColor={"red"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <WarningIcon w={100} h={100} color="white" />
          <Text fontSize="3xl" color={"white"}>
           Startup
          </Text>
        </div>
      </Box>
      <Box w="100%" aspectRatio={"1/1"} bgColor={"red.400"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <WarningIcon w={100} h={100} color="white" />
          <Text fontSize="3xl" color={"white"}>
            News
          </Text>
        </div>
      </Box>
      <Box w="100%" aspectRatio={"1/1"} bgColor={"red.400"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <WarningIcon w={100} h={100} color="white" />
          <Text fontSize="3xl" color={"white"}>
            Innovation
          </Text>
        </div>
      </Box>
      <Box w="100%" aspectRatio={"1/1"} bgColor={"red"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <WarningIcon w={100} h={100} color="white" />
          <Text fontSize="3xl" color={"white"}>
            Placement
          </Text>
        </div>
      </Box>
    </Grid>
  );
}

export default minicard;
