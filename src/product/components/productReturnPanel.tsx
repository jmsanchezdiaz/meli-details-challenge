import {Heading, Link, Stack, Text} from "@chakra-ui/react";
import React from "react";

const ProductReturnPanel = () => {
  return (
    <Stack p={4} spacing={8}>
      <Heading fontSize="xl" fontWeight="500">
        Devolución gratis
      </Heading>
      <Text color="gray.400">
        Tenes 30 dias desde que recibis el producto para devolverlo. ¡No importa el motivo!
      </Text>
      <Link>Conocer más sobre devoluciones</Link>
    </Stack>
  );
};

export default ProductReturnPanel;
