import {Stack, StackDivider} from "@chakra-ui/react";
import React from "react";

import PaymentMethodsPanel from "./paymentMethodsPanel";
import ProductReturnPanel from "./productReturnPanel";
import WarrantyPanel from "./warrantyPanel";

const OtherInfoPanel = () => {
  return (
    <Stack borderColor="gray.300" borderRadius="md" borderWidth={1} divider={<StackDivider />}>
      <ProductReturnPanel />
      <WarrantyPanel />
      <PaymentMethodsPanel />
    </Stack>
  );
};

export default OtherInfoPanel;
