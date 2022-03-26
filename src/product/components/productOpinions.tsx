import {Button, Heading, Progress, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import React, {useState} from "react";

import {Product} from "../types";

import ProductOpinion from "./productOpinion";
import Stars from "./stars";

interface Props {
  opinions: Product["opinions"];
  rating: Product["rating"];
  title: Product["title"];
}

enum Buttons {
  All = "ALL",
  Positive = "POSITIVE",
  Negative = "NEGATIVE",
}

const ProductOpinions: React.FC<Props> = ({title, rating, opinions}) => {
  const buttonNormalColorMode = useColorModeValue("black", "white");
  const [userOpinions, setUserOpinions] = useState(opinions);
  const [buttonActive, setButtonActive] = useState<Buttons>(Buttons.All);

  const like = (id: string | number, isDislikedOn = false) =>
    setUserOpinions((prvState) =>
      prvState.map((op) =>
        op.id === id
          ? {...op, likes: op.likes + 1, dislikes: isDislikedOn ? op.dislikes - 1 : op.dislikes}
          : op,
      ),
    );

  const dislike = (id: string | number, isLikedOn = false) =>
    setUserOpinions((prvState) =>
      prvState.map((op) =>
        op.id === id
          ? {...op, dislikes: op.dislikes + 1, likes: isLikedOn ? op.likes - 1 : op.likes}
          : op,
      ),
    );

  const filterByPositiveOpinions = () => {
    setUserOpinions(opinions.filter((op) => op.rating >= 3));
    setButtonActive(Buttons.Positive);
  };

  const filterByNegativeOpinions = () => {
    setUserOpinions(opinions.filter((op) => op.rating < 3));
    setButtonActive(Buttons.Negative);
  };

  const filterByAnyOpinion = () => {
    setUserOpinions(opinions.filter((op) => op.rating));
    setButtonActive(Buttons.All);
  };

  return (
    <Stack pl={14} spacing={8}>
      <Heading fontSize="2xl" fontWeight="400">
        Opiniones sobre {title}
      </Heading>
      <Stack direction="row" spacing={10}>
        <Stack align="flex-end">
          <Heading fontSize="6xl" fontWeight="300">
            {rating}
          </Heading>
          <Stack align="center" direction="row">
            <Stars bx="25px" rating={rating} />
          </Stack>
          <Text color="gray.600">Promedio entre 119 opiniones</Text>
        </Stack>
        <Stack maxW="200px" w="full">
          <Stack align="center" color="gray.600" direction="row">
            <Text>5 estrellas</Text>
            <Progress colorScheme="messenger" flex={1} size="xs" value={59} />
            <Text>59</Text>
          </Stack>
          <Stack align="center" color="gray.600" direction="row">
            <Text>4 estrellas</Text>
            <Progress colorScheme="messenger" flex={1} size="xs" value={43} />
            <Text>43</Text>
          </Stack>
          <Stack align="center" color="gray.600" direction="row">
            <Text>3 estrellas</Text>
            <Progress colorScheme="messenger" flex={1} size="xs" value={15} />
            <Text>15</Text>
          </Stack>
          <Stack align="center" color="gray.600" direction="row">
            <Text>2 estrellas</Text>
            <Progress colorScheme="messenger" flex={1} size="xs" value={0} />
            <Text>0</Text>
          </Stack>
          <Stack align="center" color="gray.600" direction="row">
            <Text>1 estrellas</Text>
            <Progress colorScheme="messenger" flex={1} size="xs" value={2} />
            <Text>2</Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={0}>
        <Button
          bg="none"
          borderBottomColor={buttonActive === Buttons.All ? "currentColor" : "transparent"}
          borderBottomWidth={3}
          borderRadius={0}
          color={buttonActive === Buttons.All ? "messenger.500" : buttonNormalColorMode}
          flex={1}
          fontWeight="500"
          variant="unstyled"
          onClick={filterByAnyOpinion}
        >
          Todas
        </Button>
        <Button
          bg="none"
          borderBottomColor={buttonActive === Buttons.Positive ? "currentColor" : "transparent"}
          borderBottomWidth={3}
          borderRadius={0}
          color={buttonActive === Buttons.Positive ? "messenger.500" : buttonNormalColorMode}
          flex={1}
          fontWeight="500"
          variant="unstyled"
          onClick={filterByPositiveOpinions}
        >
          Positivas
        </Button>
        <Button
          bg="none"
          borderBottomColor={buttonActive === Buttons.Negative ? "currentColor" : "transparent"}
          borderBottomWidth={3}
          borderRadius={0}
          color={buttonActive === Buttons.Negative ? "messenger.500" : buttonNormalColorMode}
          flex={1}
          fontWeight="500"
          variant="unstyled"
          onClick={filterByNegativeOpinions}
        >
          Negativas
        </Button>
      </Stack>

      <Stack>
        {userOpinions.map((op) => {
          return <ProductOpinion key={op.id} opinion={op} onDislike={dislike} onLike={like} />;
        })}
      </Stack>
    </Stack>
  );
};

export default ProductOpinions;
