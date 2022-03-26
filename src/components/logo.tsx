import {Image, ImageProps} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

import melilogo from "../assets/logo.png";

const Logo: React.FC<ImageProps> = (props) => {
  return (
    <Link to="/">
      <Image {...props} alt="logo-mercadolibre" src={melilogo} />
    </Link>
  );
};

export default Logo;
