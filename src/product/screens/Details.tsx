import React from "react";
import {Box, Divider, Heading, Stack, Text, useColorModeValue} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";
import ProductHeader from "../components/productHeader";
import ImagePicker from "../components/imagepicker";
import PurchasePanel from "../components/purchasePanel";
import SellerOtherProducts from "../components/sellerOtherProducts";
import OtherInfoPanel from "../components/otherInfoPanel";
import Level6PromoPanel from "../components/level6promoPanel";
import SellerInfoPanel from "../components/sellerInfoPanel";
import ProductOpinions from "../components/productOpinions";
import ProductQuestions from "../components/productQuestions";
import ProductAttributes from "../components/productAttributes";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const bgColorMode = useColorModeValue("white", "darkmode.darkgray");

  return (
    <Box>
      <ProductHeader {...product} />
      <Box bg={bgColorMode} borderRadius="lg" p={4}>
        <Stack direction="row" spacing={10}>
          <Stack
            align="flex-start"
            direction="column"
            divider={<Divider />}
            flex={1}
            maxW="3xl"
            spacing={10}
          >
            <ImagePicker {...product} />
            <SellerOtherProducts otherProducts={product.other_products} />
            <ProductAttributes {...product} />
            <Stack pl={14} spacing={4}>
              <Heading fontSize="2xl" fontWeight="400">
                Descripción
              </Heading>
              <Text color="gray.600" fontSize="xl">
                STITCH DE PELUCHE - TAMAÑO MEDIANO - SOLO COLOR AZUL
                <br />* Peluche super suave. <br />* Mide 20 cm de alto total sentado contando
                orejas. <br />* Realizado en Plush. <br />* Relleno de vellon siliconado. <br />* Su
                consulta no molesta.
              </Text>
            </Stack>
            <ProductQuestions {...product} />
            <ProductOpinions {...product} />
          </Stack>
          <Stack as="aside" maxW="sm" zIndex={11}>
            <PurchasePanel {...product} />
            <SellerInfoPanel {...product} />
            <Level6PromoPanel />
            <OtherInfoPanel product={product} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailsScreen;
