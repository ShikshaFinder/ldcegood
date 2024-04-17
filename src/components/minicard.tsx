import { Card, Text, CardBody, CardFooter } from "@chakra-ui/react";
import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";


function minicard() {
  return (
    <Card>
      <CardBody>
        <PhoneIcon />

        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  );
}

export default minicard