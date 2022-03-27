import {Icon, IconButton, useColorMode} from "@chakra-ui/react";
import React from "react";
import {BiMoon, BiSun} from "react-icons/bi";

const DarkmodeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <IconButton
      aria-label="darkmode switch"
      color="black"
      icon={colorMode === "dark" ? <Icon as={BiSun} /> : <Icon as={BiMoon} />}
      minW="max-content"
      variant="unstyled"
      onClick={toggleColorMode}
    />
  );
};

export default DarkmodeSwitch;
