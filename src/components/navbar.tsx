import {HStack, Icon, IconButton, Text} from "@chakra-ui/react";
import {RiArrowDropDownLine} from "react-icons/ri";
import {AiOutlineShoppingCart} from "react-icons/ai";
import React from "react";

import CustomLink from "./customlink";
import DarkmodeSwitch from "./darkmodeSwitch";

const links = [
  {
    path: "/categorias",
    text: "Categorias",
    icon: RiArrowDropDownLine,
  },
  {
    path: "/historial",
    text: "Historial",
  },
  {
    path: "/supermercado",
    text: "Supermercado",
  },
  {
    path: "/moda",
    text: "Moda",
  },
  {
    path: "/vender",
    text: "Vender",
  },
  {
    path: "/ayuda",
    text: "Ayuda",
  },
];

const Navbar = () => {
  return (
    <HStack fontSize="sm" justify="space-between" w="full">
      <HStack alignItems="center" opacity={0.6} spacing={5}>
        {links.map((link, index) => (
          <CustomLink key={index} to={link.path}>
            <HStack>
              <Text color="black">{link.text}</Text> {link.icon && <Icon as={link.icon} />}
            </HStack>
          </CustomLink>
        ))}
      </HStack>
      <HStack align="center" spacing={4}>
        <CustomLink color="black">Créa tu cuenta</CustomLink>
        <CustomLink color="black">Ingresá</CustomLink>
        <CustomLink color="black">Mis Compras</CustomLink>
        <IconButton
          aria-label="carrito de compras"
          color="black"
          icon={<Icon as={AiOutlineShoppingCart} boxSize="20px" />}
          variant="unstyled"
        />
        <DarkmodeSwitch />
      </HStack>
    </HStack>
  );
};

export default Navbar;
