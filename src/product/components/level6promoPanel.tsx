import {Box, Button, Heading, Image, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";

import {images} from "../../images";

const Level6PromoPanel = () => {
  return (
    <Stack
      borderColor="gray.300"
      borderRadius="md"
      borderWidth={1}
      divider={<StackDivider />}
      p={4}
      spacing={8}
    >
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
    </Stack>
  );
};

export default Level6PromoPanel;
