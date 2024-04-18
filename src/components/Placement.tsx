import React from 'react'
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text,Button ,chakra} from '@chakra-ui/react'

function Placement() {
  return (
    <>
      <Card>
        <CardHeader>
          <div style={{ width: "80%", marginInline: "auto" }}>
            <chakra.span
              color="-moz-initial"
              bg="linear-gradient(transparent 90%,#FF0000 50%)"
              fontSize="3xl"
            >
              Important News
            </chakra.span>
          </div>{" "}
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Placement
              </Heading>
              <Text pt="2" fontSize="sm">
                akdjbfkdz kcjvbsjbvos sdjbvskd vsodjbojfbv
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                adjbjsbcvn
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                kdjbisbvnks vn cn kcjbvkjbcv
              </Text>
              <Button colorScheme="blue">Know More</Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default Placement