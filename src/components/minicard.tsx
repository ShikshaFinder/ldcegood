import { Grid, Box, Text } from "@chakra-ui/react";
import React from "react";
import { ViewIcon, StarIcon, WarningIcon, AtSignIcon } from "@chakra-ui/icons";

function minicard() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      }}
      justifyItems={"center"}
      gap={0}
      w={{
        md: "60%",
        base: "90%",
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
          <StarIcon w={100} h={100} color="white" />
          <Text fontSize="3xl" color={"white"}>
            Startup
          </Text>
        </div>
      </Box>
      <Box
        w="100%"
        aspectRatio={"1/1"}
        bgColor={{
          base: "red.100",
          md: "red.100",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <WarningIcon w={100} h={100} color="black" />
          <Text fontSize="3xl" color={"black"}>
            News
          </Text>
        </div>
      </Box>
      <Box
        w="100%"
        aspectRatio={"1/1"}
        bgColor={{
          base: "red.100",
          md: "red",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ViewIcon
            w={100}
            h={100}
            color={{
              base: "black",
              md: "white",
            }}
          />
          <Text
            fontSize="3xl"
            color={{
              base: "black",
              md: "white",
            }}
          >
            Innovation
          </Text>
        </div>
      </Box>
      <Box
        w="100%"
        aspectRatio={"1/1"}
        bgColor={{
          base: "red",
          md: "red.100",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ViewIcon
            w={100}
            h={100}
            color={{
              base: "white",
              md: "black",
            }}
          />
          <Text
            fontSize="3xl"
            color={{
              base: "white",
              md: "black",
            }}
          >
            Placement
          </Text>
        </div>
      </Box>
    </Grid>
  );
}

export default minicard;
