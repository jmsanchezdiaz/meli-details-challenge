import {Icon, Stack, Text} from "@chakra-ui/react";
import React from "react";
import {GrLocation} from "react-icons/gr";

const LocationButton = () => {
  return (
    <Stack alignItems="center" cursor="pointer" direction="row" minW="140px" spacing={1}>
      <Icon as={GrLocation} boxSize="24px" />
      <Stack direction="column" spacing={0} w="full">
        <Text color="black" fontSize="xs" lineHeight={0.8} opacity={0.5}>
          Enviar a
        </Text>
        <Text color="black" fontSize="14px" lineHeight={1}>
          Capital Federal
        </Text>
      </Stack>
    </Stack>
  );
};

export default LocationButton;
