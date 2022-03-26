import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  List,
  Link,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {FiHeart} from "react-icons/fi";
import {HiOutlineTruck} from "react-icons/hi";
import {AiFillThunderbolt} from "react-icons/ai";
import {BsArrowReturnLeft} from "react-icons/bs";
import {BiCheckShield, BiTrophy} from "react-icons/bi";

import {parseCondition, parsePrice} from "../../utils";

import UnitSelect from "./unitselect";
import Stars from "./stars";

interface Props {
  title: string;
  condition: string;
  sold_quantity: number;
  price: number;
  rating: number;
  available_quantity: number;
}

const PurchasePanel: React.FC<Props> = ({
  title,
  condition,
  rating,
  sold_quantity,
  price,
  available_quantity,
}) => {
  const fees = Math.trunc(price / 12);
  const decimalPart = price / 12 - fees;
  const cents = Math.trunc(decimalPart * 100);

  return (
    <Stack
      borderColor="gray.300"
      borderRadius="md"
      borderWidth={1}
      direction="column"
      p={6}
      spacing={4}
    >
      <Text color="gray.500" fontSize="sm">
        {parseCondition(condition)} | {sold_quantity} Vendidos
      </Text>
      <Stack align="flex-start" direction="row" justify="space-between">
        <Heading fontSize="2xl" fontWeight="500" maxW="250px">
          {title}
        </Heading>
        <IconButton
          aria-label="add to favourites"
          color="messenger.500"
          icon={<Icon as={FiHeart} boxSize="25px" />}
          variant="unstyled"
        />
      </Stack>
      <Stack align="center" direction="row">
        <Stars bx="20px" rating={rating} />
        <Text color="gray.500">119 Opiniones</Text>
      </Stack>

      <Heading fontWeight="light">$ {parsePrice(price)}</Heading>
      <Text fontSize="lg" lineHeight={1} my={0}>
        en 12x de ${fees}
        <Text as="sup">{cents} </Text>
        pagando con Mercado Credito
      </Text>
      <Link>Ver los medios de pago</Link>
      <List spacing={4}>
        <ListItem d="flex">
          <ListIcon as={HiOutlineTruck} boxSize="25px" color="whatsapp.500" />
          <Box>
            <Box>
              <Text as="span" color="whatsapp.500">
                Llega{" "}
                <Text as="span" color="whatsapp.500" fontWeight="500">
                  mañana sábado{" "}
                </Text>
              </Text>{" "}
              <Text as="span">
                por $ 709<Text as="sup">99</Text>
              </Text>
            </Box>
            <Text color="whatsapp.500" fontStyle="italic" fontWeight="700">
              <Icon as={AiFillThunderbolt} boxSize="20px" /> FULL
            </Text>
            <Text color="gray.500" fontSize="sm">
              Comprando dentro de las proximas <Text as="span">5 h 52 m</Text>
              <br />
              Beneficio Mercado Puntos
              <br />
              <Link>Ver más formas de entrega</Link>
            </Text>
          </Box>
        </ListItem>
        <ListItem d="flex">
          <ListIcon as={BsArrowReturnLeft} boxSize="25px" color="whatsapp.500" />
          <Box>
            <Text>
              <Text as="span" color="whatsapp.500">
                Devolución gratis
              </Text>
            </Text>

            <Text color="gray.500" fontSize="sm">
              Tenes 30 dias para devolverlo
              <br />
              <Link>Conocer más</Link>
            </Text>
          </Box>
        </ListItem>
      </List>
      <Heading fontSize="md" fontWeight="500">
        Stock Disponible
      </Heading>
      <UnitSelect availableUnits={available_quantity} />
      <Button colorScheme="messenger" py={6} variant="solid">
        Comprar Ahora
      </Button>
      <Button colorScheme="messenger" py={6} variant="ghost">
        Agregar al Carrito
      </Button>
      <Button bg="none" color="messenger.500" variant="unstyled">
        Comprar con Mercado Credito
      </Button>
      <List color="gray.600" spacing={4}>
        <ListItem>
          <ListIcon as={BiCheckShield} boxSize="20px" />
          <Text as="span" color="messenger.500">
            Compra protegida
          </Text>{" "}
          , recibi el producto que esperabas o te devolvemos el dinero.
        </ListItem>
        <ListItem>
          <ListIcon as={BiTrophy} boxSize="20px" />
          <Text as="span" color="messenger.500">
            Mercado Puntos
          </Text>
          . Sumas 12 puntos.
        </ListItem>
      </List>
    </Stack>
  );
};

export default PurchasePanel;
