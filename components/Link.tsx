import React from 'react';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/core';

const Link: React.FC<ChakraLinkProps> = ({title, ...rest}) => {
  return (
    <ChakraLink
      fontSize="sm"
      fontWeight="bold"
      color="purple.600"
      _hover={{ color: 'purple.500' }}
      {...rest}
    >
      {title}
    </ChakraLink>
  );
}

export default Link;