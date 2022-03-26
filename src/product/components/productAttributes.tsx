import {
  Grid,
  GridItem,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import {capitalize} from "../../utils";
import {IProductAttribute} from "../types";

interface Props {
  attributes: IProductAttribute[];
}

const ProductAttributes: React.FC<Props> = ({attributes}) => {
  const mainAttributes = attributes.slice(0, 5);
  const otherAttributes = attributes.slice(5, 9);
  const evenBgTopCellColorMode = useColorModeValue("gray.200", "gray.400");
  const oddBgTopCellColorMode = useColorModeValue("gray.100", "gray.300");
  const evenBgBottomCellColorMode = useColorModeValue("gray.100", "gray.300");
  const oddBgBottomCellColorMode = useColorModeValue("gray.50", "gray.200");

  return (
    <Stack pl={14} spacing={4} w="full">
      <Heading fontSize="2xl" fontWeight="400">
        Caracteristicas Especiales
      </Heading>
      <Table>
        <Tbody>
          {mainAttributes.map((attr, i) => {
            return (
              <Tr key={attr.id}>
                <Td bg={i % 2 === 0 ? evenBgTopCellColorMode : oddBgTopCellColorMode}>
                  {attr.name}
                </Td>
                <Td
                  bg={i % 2 === 0 ? evenBgBottomCellColorMode : oddBgBottomCellColorMode}
                  w="full"
                >
                  {capitalize(attr.value_name)}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Heading fontSize="xl" fontWeight="400">
        Otras Caracteristicas
      </Heading>
      <Grid fontSize="sm" templateColumns="repeat(2, 1fr)" w="full">
        {otherAttributes.map((attr) => {
          return (
            <GridItem key={attr.id}>
              <Text as="span" fontWeight="500">
                {attr.name}:{" "}
              </Text>
              <Text as="span">{attr.value_name}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default ProductAttributes;
