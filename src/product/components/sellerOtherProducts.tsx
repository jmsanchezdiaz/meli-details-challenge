import {
  Box,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {MdArrowBack, MdArrowForward} from "react-icons/md";

import {usePagination} from "../../hooks/usePagination";
import type {Product} from "../types";

interface Props {
  otherProducts: Product["other_products"];
  elementsToShow?: number;
}

const SellerOtherProducts: React.FC<Props> = ({otherProducts, elementsToShow = 3}) => {
  const {filtered, goNextPage, goPrevPage} = usePagination(otherProducts, elementsToShow);
  const carrouselBgColorMode = useColorModeValue("white", "gray.700");
  const carrouselTextColorMode = useColorModeValue("messenger.500", "darkmode.lightyellow");
  const cardBgColorMode = useColorModeValue("white", "darkmode.gray");

  return (
    <Stack pl={14} spacing={4}>
      <Heading fontSize="2xl" fontWeight="400">
        Publicaciones del vendedor
      </Heading>
      <Box position="relative" w="full">
        <IconButton
          aria-label="go to previous slide"
          bg={carrouselBgColorMode}
          color={carrouselTextColorMode}
          icon={<Icon as={MdArrowBack} />}
          left={0}
          position="absolute"
          rounded="full"
          top="40%"
          variant="unstyled"
          zIndex={11}
          onClick={goPrevPage}
        />
        <Stack direction="row" mx="auto" p={2} spacing={4} w="95%">
          {filtered.map((pic: any) => {
            return (
              <Stack
                key={pic.id}
                _hover={{boxShadow: "xl"}}
                bg={cardBgColorMode}
                borderRadius="lg"
                borderWidth="2px"
                overflow="hidden"
                spacing={0}
              >
                <Image alt="product photo" h="full" maxH="200px" src={pic.url} w="full" />
                <Box borderColor="gray.300" borderTopWidth={2} p={4}>
                  <Heading fontSize="xl" fontWeight="400">
                    $ 1200
                  </Heading>
                  <Text>Muneco stitch rosa celeste lilo y stitch azul</Text>
                </Box>
              </Stack>
            );
          })}
        </Stack>
        <IconButton
          aria-label="go to previous slide"
          bg={carrouselBgColorMode}
          color={carrouselTextColorMode}
          icon={<Icon as={MdArrowForward} />}
          position="absolute"
          right={0}
          rounded="full"
          top="40%"
          variant="unstyled"
          zIndex={11}
          onClick={goNextPage}
        />
      </Box>
      <Link>Ver mas publicaciones del vendedor</Link>
    </Stack>
  );
};

export default SellerOtherProducts;
