import {Heading, Image, Link, Stack, Text} from "@chakra-ui/react";
import React from "react";

import {parsePrice} from "../../utils";
import {Product} from "../types";

import {InsidePanelLayout} from "./layout/panelLayout";

interface Props {
  promoted_products: Product["promoted_products"];
}

const PromotedProducts: React.FC<Props> = ({promoted_products}) => {
  return (
    <InsidePanelLayout>
      <Stack align="center" direction="row" justify="space-between">
        <Heading fontSize="xl" fontWeight="400">
          Productos Promocionados
        </Heading>
        <Link>Anuncia aqui</Link>
      </Stack>
      {promoted_products.map((product) => (
        <Stack key={product.id} align="center" direction="row">
          <Image
            alt={product.short_description}
            borderColor="gray.300"
            borderRadius="md"
            borderWidth={1}
            h="80px"
            src={product.url}
            w="80px"
          />
          <Stack>
            <Heading fontSize="xl" fontWeight="400">
              {parsePrice(product.price)}
            </Heading>
            <Text fontSize="sm">{product.short_description}</Text>
          </Stack>
        </Stack>
      ))}
    </InsidePanelLayout>
  );
};

export default PromotedProducts;
