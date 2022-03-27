import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Heading,
  Icon,
  IconButton,
  IconProps,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, {useState} from "react";
import {AiOutlineSearch} from "react-icons/ai";

import useForm from "../../hooks/useForm";
import {uuid} from "../../utils";
import {IProductQuestion} from "../types";

const QuestionDropdown: React.FC<IconProps> = (props) => (
  <Icon
    {...props}
    height="12px"
    viewBox="0 0 12 12"
    width="12px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h1v11h11v1H0z" fillOpacity=".25" fillRule="evenodd" />
  </Icon>
);

interface Props {
  questions: IProductQuestion[];
}

const ProductQuestions: React.FC<Props> = ({questions}) => {
  const inputColorMode = useColorModeValue("black", "white");
  const buttonColorMode = useColorModeValue("messenger.500", "messenger.300");
  const fewQuestions = questions.slice(0, 3);
  const [isShowingAllQuestions, setIsShowingAllQuestions] = useState(false);
  const [productQuestions, setProductQuestions] = useState(fewQuestions);
  const {searchInput, questionInput, handleChange, reset} = useForm({
    searchInput: "",
    questionInput: "",
  });
  const seeAllQuestions = () => {
    setProductQuestions(questions);
    setIsShowingAllQuestions(true);
  };

  const showFewQuestions = () => {
    setProductQuestions(fewQuestions);
    setIsShowingAllQuestions(false);
  };

  const filterQuestions = () => {
    const filteredQuestions = questions.filter(
      (question) =>
        question.content.toLowerCase().includes(searchInput.trim().toLowerCase()) ||
        (question.answer &&
          question.answer.content.toLowerCase().includes(searchInput.trim().toLowerCase())),
    );

    setProductQuestions(filteredQuestions.length > 0 ? filteredQuestions : fewQuestions);
    reset();
  };

  const addQuestion = () => {
    if (!questionInput) return;

    setProductQuestions(
      questions.concat({id: uuid(), content: questionInput.trim(), answer: null}),
    );

    reset();
  };

  return (
    <Stack pl={14} spacing={8}>
      <Heading fontSize="2xl" fontWeight="400">
        Preguntas y respuestas
      </Heading>
      <Heading fontSize="xl" fontWeight="400">
        ¿Qué quéres saber?
      </Heading>
      <Stack direction="row" justify="space-around">
        <Button colorScheme="messenger" fontSize="sm" fontWeight="500" variant="ghost">
          Costo de envío
        </Button>
        <Button colorScheme="messenger" fontSize="sm" fontWeight="500" variant="ghost">
          Devoluciones Gratis
        </Button>
        <Button colorScheme="messenger" fontSize="sm" fontWeight="500" variant="ghost">
          Medios de pago y promociones
        </Button>
        <Button colorScheme="messenger" fontSize="sm" fontWeight="500" variant="ghost">
          Garantía
        </Button>
      </Stack>

      <Stack spacing={4}>
        <Heading fontSize="xl" fontWeight="500">
          Buscá lo que quéres saber
        </Heading>
        <InputGroup>
          <Input
            color={inputColorMode}
            name="searchInput"
            placeholder="Escribi una pregunta o una palabra clave"
            value={searchInput}
            onChange={handleChange}
          />
          <InputRightElement>
            <IconButton
              aria-label="ask to the seller"
              borderBottomLeftRadius={0}
              borderTopLeftRadius={0}
              colorScheme="messenger"
              icon={<Icon as={AiOutlineSearch} boxSize="25px" />}
              onClick={filterQuestions}
            />
          </InputRightElement>
        </InputGroup>
      </Stack>

      <Stack spacing={4}>
        <Heading fontSize="xl" fontWeight="500">
          Preguntale al vendedor
        </Heading>
        <Stack direction="row">
          <FormControl>
            <Input
              color={inputColorMode}
              name="questionInput"
              placeholder="Escribi tu pregunta"
              value={questionInput}
              onChange={handleChange}
            />
            <FormHelperText fontSize="xs">Tiempo estimado de respuesta: 0 minutos</FormHelperText>
          </FormControl>
          <Button colorScheme="messenger" fontSize="sm" fontWeight="500" onClick={addQuestion}>
            Pregunta
          </Button>
        </Stack>
      </Stack>

      <Heading fontSize="xl" fontWeight="500">
        Ultimas realizadas
      </Heading>
      <Stack spacing={4}>
        {productQuestions?.map((question) => {
          return (
            <Box key={question.id}>
              <Text
                _hover={{
                  a: {
                    d: "inline-block",
                  },
                }}
              >
                {question.content}{" "}
                <Link d="none" fontSize="sm" mx={2}>
                  Denunciar
                </Link>
              </Text>
              {question.answer && (
                <Stack direction="row" ml={4} mt={2}>
                  <QuestionDropdown />
                  <Text
                    _hover={{
                      a: {
                        d: "inline-block",
                      },
                    }}
                    color="gray.500"
                  >
                    {question.answer.content} {question.answer.answerAt}
                    <Link d="none" fontSize="sm" mx={2}>
                      Denunciar
                    </Link>
                  </Text>
                </Stack>
              )}
            </Box>
          );
        })}
      </Stack>
      {isShowingAllQuestions ? (
        <Button
          alignSelf="start"
          color={buttonColorMode}
          fontWeight="300"
          variant="unstyled"
          onClick={showFewQuestions}
        >
          Esconder todas las preguntas
        </Button>
      ) : (
        <Button
          alignSelf="start"
          color={buttonColorMode}
          fontWeight="300"
          variant="unstyled"
          onClick={seeAllQuestions}
        >
          Ver todas las preguntas
        </Button>
      )}
    </Stack>
  );
};

export default ProductQuestions;
