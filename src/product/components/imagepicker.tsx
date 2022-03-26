import React, {useState} from "react";
import {Stack, Button, Image, Box} from "@chakra-ui/react";

import {IProductPicture} from "../types";

interface Props {
  pictures: IProductPicture[];
}

const ImagePicker: React.FC<Props> = ({pictures}) => {
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
            borderRadius={0}
            h={12}
            overflow="hidden"
            variant="unstyled"
            w={12}
            onClick={() => selectPicture(img)}
          >
            <Image alt="product photo" src={img.url} />
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
