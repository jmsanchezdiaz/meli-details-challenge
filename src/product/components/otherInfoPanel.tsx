import {Stack, StackDivider} from "@chakra-ui/react";
import React from "react";

import {Product} from "../types";

import PaymentMethodsPanel from "./paymentMethodsPanel";
import ProductReturnPanel from "./productReturnPanel";
import PromotedProducts from "./promotedProducts";
import WarrantyPanel from "./warrantyPanel";

interface Props {
  product: Product;
}

const OtherInfoPanel: React.FC<Props> = ({product}) => {
  return (
    <Stack borderColor="gray.300" borderRadius="md" borderWidth={1} divider={<StackDivider />}>
      <ProductReturnPanel />
      <WarrantyPanel />
      <PaymentMethodsPanel />
      <PromotedProducts {...product} />
    </Stack>
  );
};

export default OtherInfoPanel;
