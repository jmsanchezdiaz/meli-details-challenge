import {Stack, StackProps} from "@chakra-ui/react";
import React from "react";

type childrenType =
  | (React.ReactElement | React.ReactElement[])[]
  | (React.ReactElement | React.ReactElement[]);

interface Props {
  children: childrenType;
}

export const InsidePanelLayout: React.FC<Props & StackProps> = ({children, ...props}) => {
  return (
    <Stack {...props} p={4} spacing={8}>
      {children}
    </Stack>
  );
};

export const OutsidePanelLayout: React.FC<Props & StackProps> = ({children, ...props}) => {
  return (
    <Stack {...props} borderColor="gray.300" borderRadius="md" borderWidth={1} p={4} spacing={4}>
      {children}
    </Stack>
  );
};
