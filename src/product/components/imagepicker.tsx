import React, {useState} from "react";
import {Stack, Button, Image, Box, useColorModeValue} from "@chakra-ui/react";

import {IProductPicture} from "../types";

interface Props {
  pictures: IProductPicture[];
}

const ImagePicker: React.FC<Props> = ({pictures}) => {
  const borderColorMode = useColorModeValue("messenger.500", "darkmode.lightyellow");
  const [{id, url}] = pictures;

  const [selectedPicture, setSelectedPicture] = useState<IProductPicture>({
    id,
    url,
  });

  const selectPicture = ({id, url}: IProductPicture) => setSelectedPicture({id, url});

  return (
    <Stack align="start" direction="row" spacing={4} w="full">
      <Stack direction="column" spacing={4}>
        {pictures.map((img) => (
          <Button
            key={img.id}
            _focus={{
              boxShadow: "none",
              borderColor: borderColorMode,
            }}
            borderColor="transparent"
            borderRadius="lg"
            borderWidth={3}
            h={12}
            overflow="hidden"
            variant="unstyled"
            w={12}
            onClick={() => selectPicture(img)}
          >
            <Image alt="product photo" borderRadius="md" h="full" src={img.url} w="full" />
          </Button>
        ))}
      </Stack>
      <Box flex={1} pb={8} px={4} w="full">
        <Image alt="selected picture" mx="auto" src={selectedPicture.url} />
      </Box>
    </Stack>
  );
};

export default ImagePicker;
