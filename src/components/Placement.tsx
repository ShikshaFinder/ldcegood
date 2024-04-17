import React from 'react'
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text,Button } from '@chakra-ui/react'

function Placement() {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">LD College of Enginnering Placements</Heading>
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