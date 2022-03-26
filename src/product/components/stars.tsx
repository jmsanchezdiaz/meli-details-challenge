import {Icon, Stack, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";

import {uuid} from "../../utils";

interface Props {
  rating: number;
  bx?: string | number;
}

const Stars: React.FC<Props> = ({rating, bx = "15px"}) => {
  const starsColorMode = useColorModeValue("messenger.500", "#FFD369");
  let stars = [];
  let count = rating;

  while (stars.length < 5) {
    if (count >= 1)
      stars.push(<Icon key={uuid()} as={BsStarFill} boxSize={bx} color={starsColorMode} />);
    else if (count > 0)
      stars.push(<Icon key={uuid()} as={BsStarHalf} boxSize={bx} color={starsColorMode} />);
    else stars.push(<Icon key={uuid()} as={BsStar} boxSize={bx} color={starsColorMode} />);
    count--;
  }

  return <Stack direction="row">{stars}</Stack>;
};

export default Stars;
