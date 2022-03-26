import {Icon, IconButton, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

const SearchBar = () => {
  return (
    <InputGroup bg="white" borderColor="gray.300" borderWidth={1} boxShadow="base" minW="sm">
      <Input
        _placeholder={{color: "gray.400"}}
        borderRadius={0}
        borderWidth={0}
        placeholder="Busca productos..."
      />
      <InputRightElement>
        <IconButton
          _before={{
            content: "''",
            display: "block",
            h: 26,
            borderLeftWidth: 2,
            borderColor: "#e6e6e6",
            position: "absolute",
            top: 6.5,
            left: 0,
          }}
          aria-label="search product"
          bg="white"
          borderRadius={0}
          icon={<Icon as={AiOutlineSearch} boxSize={5} color="gray.500" />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
