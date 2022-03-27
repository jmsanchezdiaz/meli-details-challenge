import {Box, Button, Heading, Image, StackDivider, Text} from "@chakra-ui/react";
import React from "react";

import {images} from "../../images";

import {OutsidePanelLayout} from "./layout/panelLayout";

const Level6PromoPanel = () => {
  return (
    <OutsidePanelLayout divider={<StackDivider />} spacing={8}>
      <Heading fontSize="xl" fontWeight="500">
        Suscribete al nivel 6 de Mercado Puntos
      </Heading>
      <Image alt={images.nivel6.alt} objectFit="cover" src={images.nivel6.src} width="2xs" />
      <Box>
        <Text>Ahorra con los mejores beneficios</Text>
        <Text color="gray.400">
          Suscribite al nivel 6 desde $599/mes y ahorra en envios, suscripciones de contenido,
          pagos, ¡ y mucho más!
        </Text>
      </Box>
      <Button colorScheme="messenger" variant="ghost">
        Suscribite al nivel 6
      </Button>
    </OutsidePanelLayout>
  );
};

export default Level6PromoPanel;
