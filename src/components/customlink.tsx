import {LinkProps, Link as ChakraLink, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

const CustomLink: React.FC<LinkProps | {to: string}> = (props, to) => {
  const textColorMode = useColorModeValue("messenger.500", "messenger.300");
  const hoverColorMode = useColorModeValue("messenger.700", "messenger.500");

  return (
    <ChakraLink _hover={{color: hoverColorMode}} as="span" color={textColorMode} {...props}>
      <Link to={to}>{props.children}</Link>
    </ChakraLink>
  );
};

export default CustomLink;
