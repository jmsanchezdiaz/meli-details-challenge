import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {RiArrowDropDownLine} from "react-icons/ri";

interface Props {
  defaultValue?: number;
  availableUnits?: number;
  onChange?: (unit: number) => void;
}

const parseUnit = (val: number) => `${val} Unidad${val > 1 ? "es" : ""}`;

const UnitSelect: React.FC<Props> = ({defaultValue = 1, availableUnits = 6, onChange}) => {
  const [selectedUnit, setSelectedUnit] = useState(defaultValue);
  const [showCustomUnit, setShowCustomUnit] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => onChange && onChange(selectedUnit), [selectedUnit, onChange]);

  const handleOptChange = (value: number) => {
    setSelectedUnit(value);
    setShowCustomUnit(false);
    setShowOptions(false);
  };
  const openCustomUnit = () => setShowCustomUnit(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedInput = parseInt(e.target.value);

    if (parsedInput > 0) setInputValue(parsedInput);
  };

  const renderOptions = () => {
    let options = [];

    for (let i = 1; i <= availableUnits; i++) {
      const isAbleToCustomUnit = i === availableUnits && availableUnits > 6;

      options.push(
        <Box
          key={i}
          bg="white"
          borderColor={i === selectedUnit ? "messenger.500" : "transparent"}
          borderLeftWidth={1}
          borderRadius={0}
          fontWeight="regular"
          py={2}
          w="full"
          onClick={isAbleToCustomUnit ? () => openCustomUnit() : () => handleOptChange(i)}
        >
          {isAbleToCustomUnit ? "Mas de 6 Unidades" : parseUnit(i)}
        </Box>,
      );
    }

    return options;
  };

  return (
    <Button bg="none" fontWeight="regular" variant="unstyled">
      <Box position="relative" onClick={() => setShowOptions(!showOptions)}>
        <Text as="span">Cantidad: </Text>
        <Text as="span" fontWeight="bold">
          {parseUnit(selectedUnit)}{" "}
          <Icon as={RiArrowDropDownLine} boxSize="25px" color="messenger.500" />
        </Text>{" "}
        <Text as="span" color="gray.400">
          ({availableUnits} disponibles)
        </Text>
      </Box>
      {showOptions && (
        <VStack
          align="flex-start"
          left={0}
          position="absolute"
          spacing={0}
          top="40px"
          w="200px"
          zIndex="11"
        >
          {renderOptions()}
          {showCustomUnit && (
            <FormControl borderColor="messenger.500" borderLeftWidth={1} p={4}>
              <FormLabel>Cantidad: </FormLabel>
              <InputGroup>
                <Input placeholder="0" type="number" value={inputValue} onChange={handleChange} />
                <InputRightElement mx={2}>
                  <Button
                    colorScheme="blue"
                    fontSize="xs"
                    h="25px"
                    w="10px"
                    onClick={() => handleOptChange(inputValue)}
                  >
                    Aplicar
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          )}
        </VStack>
      )}
    </Button>
  );
};

export default UnitSelect;
