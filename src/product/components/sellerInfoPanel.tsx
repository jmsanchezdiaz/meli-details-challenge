import {
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {GoComment, GoVerified, GoWatch} from "react-icons/go";
import {RiMedalLine} from "react-icons/ri";

import {Product} from "../types";

import {OutsidePanelLayout} from "./layout/panelLayout";

interface Props {
  seller_info: Product["seller_info"];
}

const SellerInfoPanel: React.FC<Props> = ({seller_info}) => {
  const badColorMode = useColorModeValue("red.50", "red.800");
  const regularColorMode = useColorModeValue("orange.50", "orange.800");
  const mediumColorMode = useColorModeValue("yellow.50", "yellow.800");
  const niceColorMode = useColorModeValue("green.50", "green.800");
  const perfectColorMode = useColorModeValue("green.500", "green.600");
  const iconColorMode = useColorModeValue("black", "white");

  return (
    <OutsidePanelLayout>
      <Heading fontSize="xl" fontWeight="500">
        Informacion sobre el vendedor
      </Heading>
      <Stack align="start" color="whatsapp.400" direction="row">
        <Icon as={RiMedalLine} boxSize="20px" />{" "}
        <Box>
          MercadoLider Platinum{" "}
          <Text color="gray.500" lineHeight={1}>
            ¡Es uno de los mejores del sitio!
          </Text>
        </Box>
      </Stack>
      <Stack direction="row" justify="space-evenly">
        <Box bg={badColorMode} flex={1} px={4} py={1.5} />
        <Box bg={regularColorMode} flex={1} px={4} py={1.5} />
        <Box bg={mediumColorMode} flex={1} px={4} py={1.5} />
        <Box bg={niceColorMode} flex={1} px={4} py={1.5} />
        <Box bg={perfectColorMode} flex={1} px={4} py={1.5} />
      </Stack>
      <Stack
        direction="row"
        divider={<StackDivider borderColor="gray.200" />}
        justify="space-around"
      >
        <Box textAlign="center">
          <Heading fontSize="xl">{seller_info.sellsQuantity}</Heading>
          <Text fontSize="xs" maxW={20}>
            Ventas en los ultimos 60 dias
          </Text>
        </Box>
        <Stack align="center" textAlign="center">
          <Box position="relative">
            <Icon as={GoComment} boxSize="20px" color={iconColorMode} />
            <Icon as={GoVerified} bottom="-5px" color="green.500" left={3} position="absolute" />
          </Box>
          <Text fontSize="xs" maxW={20}>
            Brinda buena atención
          </Text>
        </Stack>
        <Stack align="center" textAlign="center">
          <Box position="relative">
            <Icon as={GoWatch} boxSize="20px" color={iconColorMode} />
            <Icon as={GoVerified} bottom="-5px" color="green.500" left={3} position="absolute" />
          </Box>
          <Text fontSize="xs" maxW={20}>
            Despacha sus productos a tiempo
          </Text>
        </Stack>
      </Stack>
      <Link>Ver más datos del vendedor</Link>
    </OutsidePanelLayout>
  );
};

export default SellerInfoPanel;
