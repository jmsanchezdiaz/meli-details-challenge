import React from "react";
import {Stack, Container, Box, useColorModeValue} from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";

import Routes from "./routes";

const App: React.FC = () => {
  const bodyColorMode = useColorModeValue("gray.200", "darkmode.gray");

  return (
    <Stack spacing={0}>
      <Header />
      <Box bg={bodyColorMode}>
        <Container maxW="container.xl" py={2}>
          <Routes />
        </Container>
      </Box>
      <Footer />
    </Stack>
  );
};

export default App;
