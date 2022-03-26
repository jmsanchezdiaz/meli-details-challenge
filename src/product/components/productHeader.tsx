import {Box, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";

import CustomLink from "../../components/customlink";
import {Product} from "../types";

const after = {
  content: "''",
  display: "block",
  height: 4,
  right: 0,
  borderLeftWidth: 1,
  borderColor: "#666",
  position: "absolute",
  top: 1,
};

interface Props {
  similars: Product["similars"];
  categories: Product["categories"];
}

const ProductHeader: React.FC<Props> = ({similars, categories}) => {
  const colorMode = useColorModeValue("gray.600", "gray.200");

  return (
    <Stack spacing={4}>
      <Box fontSize="sm">
        <Text as="span" fontWeight="500">
          Tambien puede interesarte: {similars.join(" - ")}
        </Text>
      </Box>
      <Stack align="center" direction="row" justify="space-between">
        <Stack alignItems="center" direction="row" my={2} spacing={2}>
          <CustomLink
            _after={after}
            as="span"
            color={colorMode}
            fontSize="sm"
            position="relative"
            pr={4}
          >
            Volver al listado
          </CustomLink>
          <Stack alignItems="center" direction="row" divider={<span>{">"}</span>} fontSize="sm">
            {categories.map((cat: string, i: number) => (
              <CustomLink key={i} mx={2}>
                {cat}
              </CustomLink>
            ))}
          </Stack>
        </Stack>
        <Stack align="center" direction="row" fontSize="sm">
          <CustomLink _after={after} position="relative" pr={4}>
            Compartir
          </CustomLink>
          <CustomLink pr={2}>Vender uno igual</CustomLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductHeader;
