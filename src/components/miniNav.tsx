import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink,Box } from '@chakra-ui/react'

function MiniNav() {
  return (
    <Box
    bg={"red.100"}>
      <div>
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Box>
  );
}

export default MiniNav;