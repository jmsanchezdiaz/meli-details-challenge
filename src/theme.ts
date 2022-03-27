import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    darkmode: {
      darkgray: "#222831",
      gray: "#393E46",
      lightyellow: "#FFD369",
    },
    primary: {
      50: "#FFF9BD",
      100: "#FFF693",
      200: "#FFF693",
      300: "#FFF583",
      400: "#FFF372",
      500: "#fff159",
      600: "#E6D950",
      700: "#CCC147",
      800: "#BFB543",
      900: "#BFB543",
    },
    secondary: {
      ...theme.colors.messenger,
      100: theme.colors.messenger[50],
      50: `rgba(65,137,230,.15)`,
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  sizes: {
    container: {
      xl: "1200px",
    },
  },
  fonts: {
    body: "Proxima Nova, -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
    heading: "Proxima Nova, -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
  },
  components: {
    Text: {
      baseStyle: (props) => ({
        color: mode("black", "white")(props),
      }),
    },
    Link: {
      variants: {
        unstyled: ({colorScheme = "blackAlpha"}) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
        color: ({colorScheme = "secondary"}) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Heading: {
      baseStyle: (props) => ({
        color: mode("black", "white")(props),
      }),
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        solid: (props) => ({
          bg: mode("blue.500", "blue.400")(props),
          color: mode("white", "gray.900")(props),
          _hover: {
            bg: mode("blue.400", "blue.700")(props),
          },
        }),
        ghost: ({colorScheme = "secondary", ...rest}) => ({
          backgroundColor: mode(`${colorScheme}.50`, `${colorScheme}.600`)(rest),
          ":hover, :focus": {
            backgroundColor: mode(`${colorScheme}.100`, `${colorScheme}.700`)(rest),
          },
        }),
        unstyled: (props) => ({
          color: mode("black", "white")(props),
        }),
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
      },
    },
  },
});
