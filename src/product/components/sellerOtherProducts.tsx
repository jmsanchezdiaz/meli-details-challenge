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
import React, {useState} from "react";
import {MdArrowBack, MdArrowForward} from "react-icons/md";

import {parsePrice} from "../../utils";
import type {Product} from "../types";

interface Props {
  otherProducts: Product["other_products"];
}

const SellerOtherProducts: React.FC<Props> = ({otherProducts}) => {
  // Cards Width: 210 px + 16 of padding = 226 width;
  const limitWidth = (otherProducts.length - 1) * 226;
  const [slidesTransform, setSlidesTransform] = useState(0);
  const isFirstSlides = slidesTransform > 0;
  const isLastSlides = slidesTransform <= limitWidth - slidesTransform;

  const carrouselBgColorMode = useColorModeValue("white", "gray.700");
  const carrouselTextColorMode = useColorModeValue("messenger.500", "darkmode.lightyellow");
  const cardBgColorMode = useColorModeValue("white", "darkmode.gray");

  const goNextSlide = () => setSlidesTransform((prv) => (prv + 678 > limitWidth ? prv : prv + 678));
  const goPrevSlide = () => setSlidesTransform((prv) => (prv - 678 < 0 ? prv : prv - 678));

  return (
    <Stack minH="sm" pl={14} spacing={4}>
      <Heading fontSize="2xl" fontWeight="400">
        Publicaciones del vendedor
      </Heading>
      <Box position="relative">
        {isFirstSlides && (
          <IconButton
            aria-label="go to previous slide"
            bg={carrouselBgColorMode}
            boxSize="70px"
            color={carrouselTextColorMode}
            icon={<Icon as={MdArrowBack} boxSize="20px" />}
            left="-20px"
            position="absolute"
            rounded="full"
            top="140px"
            variant="unstyled"
            zIndex={11}
            onClick={goPrevSlide}
          />
        )}
        <Box maxW="2xl" overflow="hidden" w="full">
          <Stack
            direction="row"
            spacing={0}
            transform={`translate3d(-${slidesTransform}px, 0px, 0px)`}
            transition="transform 1s"
          >
            {otherProducts.map((pic: any) => {
              return (
                <Box key={pic.id} p={2}>
                  <Box
                    _hover={{boxShadow: "xl"}}
                    bg={cardBgColorMode}
                    borderRadius="lg"
                    borderWidth="2px"
                    h="360px"
                    w="210px"
                  >
                    <Image alt="product photo" h="225px" src={pic.url} w="full" />
                    <Box borderColor="gray.300" borderTopWidth={2} p={4} pb={2}>
                      <Heading fontSize="xl" fontWeight="400">
                        {parsePrice(pic.price)}
                      </Heading>
                      <Text fontSize="sm">{pic.short_description}</Text>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
        {isLastSlides && (
          <IconButton
            aria-label="go to previous slide"
            bg={carrouselBgColorMode}
            boxSize="70px"
            color={carrouselTextColorMode}
            float="right"
            icon={<Icon as={MdArrowForward} boxSize="20px" />}
            position="absolute"
            right="-20px"
            rounded="full"
            top="140px"
            variant="unstyled"
            zIndex={11}
            onClick={goNextSlide}
          />
        )}
      </Box>
      <Link>Ver mas publicaciones del vendedor</Link>
    </Stack>
  );
};

export default SellerOtherProducts;
