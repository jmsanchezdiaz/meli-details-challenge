import React from "react";
import {Box, Heading, Image, Link, Stack, Text} from "@chakra-ui/react";

import {images} from "../../images";

import {InsidePanelLayout} from "./layout/panelLayout";

const PaymentMethodsPanel = () => {
  return (
    <InsidePanelLayout>
      <Heading fontSize="xl" fontWeight="500">
        Medios de pago
      </Heading>
      <Stack>
        <Text>Hasta 12 cuotas sin tarjeta</Text>
        <Image alt={images.mercadocredito.alt} maxW={24} src={images.mercadocredito.src} />
      </Stack>
      <Stack>
        <Box>
          <Text>Tarjetas de crédito</Text>
          <Text color="gray.600">¡Cuotas sin interés con bancos seleccionados!</Text>
        </Box>
        <Stack direction="row" spacing={4}>
          <Image alt={images.visa.alt} maxW={24} src={images.visa.src} />
          <Image alt={images.americanexpress.alt} maxW={24} src={images.americanexpress.src} />
          <Image alt={images.mastercard.alt} maxW={24} src={images.mastercard.src} />
          <Image alt={images.naranja.alt} maxW={24} src={images.naranja.src} />
        </Stack>
      </Stack>
      <Stack>
        <Text>Tarjetas de débito</Text>
        <Stack direction="row" spacing={4}>
          <Image alt={images.visaDebito.alt} maxW={24} src={images.visaDebito.src} />
          <Image alt={images.mastercardDebito.alt} maxW={24} src={images.mastercardDebito.src} />
          <Image alt={images.cabalDebito.alt} maxW={24} src={images.cabalDebito.src} />
          <Image alt={images.maestroDebito.alt} maxW={24} src={images.maestroDebito.src} />
        </Stack>
      </Stack>
      <Stack>
        <Text>Efectivo</Text>
        <Stack direction="row" spacing={4}>
          <Image alt={images.rapipago.alt} maxW={24} src={images.rapipago.src} />
          <Image alt={images.pagofacil.alt} maxW={24} src={images.pagofacil.src} />
        </Stack>
      </Stack>
      <Link>Conoce otros medios de pago</Link>
    </InsidePanelLayout>
  );
};

export default PaymentMethodsPanel;
