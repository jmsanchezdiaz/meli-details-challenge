import {Box, Heading, Link, Text} from "@chakra-ui/react";
import React from "react";

import {InsidePanelLayout} from "./layout/panelLayout";

const WarrantyPanel = () => {
  return (
    <InsidePanelLayout>
      <Heading fontSize="xl" fontWeight="500">
        Garantía
      </Heading>
      <Box>
        <Text>Compra Protegida con Mercado Pago</Text>
        <Text color="gray.400">Recibi el producto que esperabas o te devolvemos tu dinero</Text>
      </Box>
      <Box>
        <Text>Garantía del vendedor</Text>
        <Text color="gray.400">Garantía del vendedor: 1 meses</Text>
      </Box>
      <Link>Conocer más sobre garantía</Link>
    </InsidePanelLayout>
  );
};

export default WarrantyPanel;
