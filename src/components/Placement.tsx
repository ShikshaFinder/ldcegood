import React from 'react'
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text,Button ,chakra} from '@chakra-ui/react'

function Placement() {
  return (
    <>
    <div style={{ width: "100%", marginInline: "auto" }}>
      <Card>
        <CardHeader>
          
            <chakra.span
              color="-moz-initial"
              bg="linear-gradient(transparent 90%,#FF0000 50%)"
              fontSize="6xl"
            >
              Placement
            </chakra.span>
     
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xl" textTransform="uppercase">
                Placement
              </Heading>
              <Text pt="2" fontSize="2xl">
                akdjbfkdz kcjvbsjbvos sdjbvskd vsodjbojfbv
              </Text>
            </Box>
            <Box>
              <Heading size="xl" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="2xl">
                adjbjsbcvn
              </Text>
            </Box>
            <Box>
              <Heading size="xl" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="2xl">
                kdjbisbvnks vn cn kcjbvkjbcv
              </Text>
              <br />
              <Button colorScheme="blue">Know More</Button>
            </Box>
          </Stack>
        </CardBody>
          
      </Card>
      </div>
    </>
  );
}

export default Placement