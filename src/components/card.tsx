"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { text } from "stream/consumers";





function ProductAddToCart({ name, imageURL, date,text}: { name: string; imageURL: string; date: string,text:string}) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image src={imageURL} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {date}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
          </Flex>
          <Box display="flex" alignItems="baseline">
            {text}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
