import {Box, useColorModeValue} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const footerBgColorMode = useColorModeValue("yellow.300", "darkmode.lightyellow");

  return (
    <Box as="footer" bg={footerBgColorMode} p={2}>
      @Disclaimer: Esta pagina es un desafio, no tiene ninguna relacion con la empresa de Mercado
      Libre, ni es un intento de estafa mediante Phishing
    </Box>
  );
};

export default Footer;
