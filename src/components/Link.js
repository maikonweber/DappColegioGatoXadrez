import {Flex, BreadcrumbDivider, Heading, Breadcrumb, BreadcrumbItem , BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';

const linker = (props) => {
    return (
<Breadcrumb
    height={10}
    spacing={4}
    separator = ""
    fontWeight="bold"
    fontSize="sm"
    color="black"
    alignItems="center"
>
  <BreadcrumbItem>
    <Link href='/'> Home </Link>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <Link href='/CreateItem'> Criar NFT  </Link>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <Link href='/Dashboard'> Dashboard  </Link> 
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <Link href='/MyAssets'> MyNFTS  </Link> 
  </BreadcrumbItem>
</Breadcrumb>
    )
}

export default linker;