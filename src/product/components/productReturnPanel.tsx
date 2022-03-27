import {Heading, Link, Text} from "@chakra-ui/react";
import React from "react";

import {InsidePanelLayout} from "./layout/panelLayout";

const ProductReturnPanel = () => {
  return (
    <InsidePanelLayout>
      <Heading fontSize="xl" fontWeight="500">
        Devolución gratis
      </Heading>
      <Text color="gray.400">
        Tenes 30 dias desde que recibis el producto para devolverlo. ¡No importa el motivo!
      </Text>
      <Link>Conocer más sobre devoluciones</Link>
    </InsidePanelLayout>
  );
};

export default ProductReturnPanel;
