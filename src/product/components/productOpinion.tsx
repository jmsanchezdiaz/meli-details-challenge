import React, {useState} from "react";
import {Stack, Heading, Box, Text, Button, Icon, Link, useColorModeValue} from "@chakra-ui/react";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";

import {IProductOpinion} from "../types";

import Stars from "./stars";

interface Props {
  opinion: IProductOpinion;
  onLike: (id: string | number, isDislikedOn?: boolean) => void;
  onDislike: (id: string | number, isLikedOn?: boolean) => void;
}

const ProductOpinion: React.FC<Props> = ({opinion, onLike, onDislike}) => {
  const [isLikedOn, setIsLikedOn] = useState(false);
  const [isDislikedOn, setIsDislikedOn] = useState(false);
  const iconColorMode = useColorModeValue("black", "white");

  const {description, title, id, rating, dislikes, likes} = opinion;

  const handleLike = () => {
    !isLikedOn && onLike(id, isDislikedOn);
    setIsLikedOn(true);
    setIsDislikedOn(false);
  };

  const handleDislike = () => {
    !isDislikedOn && onDislike(id, isLikedOn);
    setIsDislikedOn(true);
    setIsLikedOn(false);
  };

  return (
    <Stack key={id}>
      <Stars rating={rating} />
      <Heading fontSize="md" fontWeight="bold">
        {title}
      </Heading>
      <Box>
        <Text _hover={{a: {d: "inline-block"}}}>
          {description} <Link d="none">Denunciar</Link>
        </Text>
        <Stack direction="row" spacing={4}>
          <Button
            align="center"
            color={isLikedOn ? "messenger.500" : iconColorMode}
            d="flex"
            fontWeight="300"
            leftIcon={<Icon as={AiOutlineLike} boxSize="15px" />}
            minW="auto"
            variant="unstyled"
            onClick={handleLike}
          >
            {likes}
          </Button>
          <Button
            color={isDislikedOn ? "messenger.500" : iconColorMode}
            fontWeight="300"
            leftIcon={<Icon as={AiOutlineDislike} boxSize="15px" />}
            minW="auto"
            variant="unstyled"
            onClick={handleDislike}
          >
            {dislikes}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductOpinion;
