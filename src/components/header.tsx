import {Box, Container, Image, Stack, useColorModeValue} from "@chakra-ui/react";
import React from "react";

import {images} from "../images";

import LocationButton from "./locationbutton";
import Logo from "./logo";
import Navbar from "./navbar";
import SearchBar from "./searchbar";

const Header = () => {
  const headerBgColorMode = useColorModeValue("yellow.300", "darkmode.lightyellow");

  return (
    <Box bg={headerBgColorMode}>
      <Container maxW="container.xl" p={2}>
        <Stack alignItems="center" direction="row" justifyItems="space-around" spacing={20}>
          <Logo maxW="3xs" minW="120px" objectFit="contain" />
          <SearchBar />
          <Image
            alt={images.disneypromo.alt}
            objectFit="contain"
            src={images.disneypromo.src}
            w="xs"
          />
        </Stack>
        <Stack direction="row" mt={2} spacing={20}>
          <LocationButton />
          <Navbar />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
