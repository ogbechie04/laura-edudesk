import React from "react";
import { Box, HStack, Image, Separator, Text, VStack } from "@chakra-ui/react";
import MoneyAddIcon from "./MoneyAddIcon";
import walletManagementImage from "../assets/wallet-management-image.svg";

interface FeatureCardProps {
  featureHeading: string;
  featureDescription: string;
  featurePreview: string;
  maxWidth: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  featureHeading = "Secured Wallet Management",
  featureDescription = "Access A Secure Wallet To Handle Payments For Salaries And Expense Without Any Hassle",
  featurePreview = walletManagementImage, maxWidth = "25.625rem"
}) => {
  return (
    <Box
      maxWidth={maxWidth}
      paddingTop={5}
      paddingLeft={"1.625rem"}
      paddingRight={"0.8125rem"}
      borderRadius={"1.25rem"}
      backgroundColor={"brand.text"}
      overflow={"hidden"}
    >
      {/* ======== card heading ======== */}
      <HStack gap={"0.5625rem"}>
        <MoneyAddIcon />
        <Text color={"brand.text1"} fontWeight={"semibold"} fontSize={"xl"}>
          {featureHeading}
        </Text>
      </HStack>
      <Separator
        marginBlock={5}
        backgroundColor={"brand.background"}
        height={"1px"}
      />
      {/* ======== card body ======== */}
      <VStack gap={3.5}>
        <Text color={"brand.grey"} lineHeight={"1.75rem"} fontFamily={"static"}>
          {featureDescription}
        </Text>
        <Box>
          <Image src={featurePreview} />
        </Box>
      </VStack>
    </Box>
  );
};

export default FeatureCard;
