import { Box, Button, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const TakeControlSection = () => {
  return (
    <>
      <VStack
        backgroundColor={"#041822"}
        width={"100%"}
        borderRadius={"0.9375rem"}
        position={"relative"}
        paddingBlock={"8.4375rem"}
      >
        <Box
          position={"absolute"}
          width={"40.75rem"}
          height={"11.6875rem"}
          backgroundColor={"rgba(0, 47, 73, 0.95)"}
          filter={"blur(50px)"}
          borderRadius={"42.75rem"}
          top={"35%"}
          rotate={"27.645"}
          left={-5}
        ></Box>
        <Box
          position={"absolute"}
          width={"40.75rem"}
          height={"11.6875rem"}
          backgroundColor={"rgba(0, 47, 73, 0.95)"}
          filter={"blur(50px)"}
          borderRadius={"42.75rem"}
          top={"35%"}
          rotate={"149.431"}
          right={-5}
        ></Box>
        <VStack gap={"2.3125rem"} alignItems={"center"} zIndex={999}>
          <VStack
            color={"brand.text"}
            fontFamily={"Open Sans"}
            alignItems={"center"}
            textAlign={"center"}
            gap={"0.9375rem"}
          >
            <Heading
              fontFamily={"Open Sans"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              lineHeight={"3.0625rem"}
            >
              Take Control Of Your School’s Finance Today
            </Heading>
            <Text
              fontSize={"1.25rem"}
              lineHeight={"normal"}
              maxWidth={"36.625rem"}
            >
              Join Hundreds Of Schools Already Benefiting From Our Financial
              Management Platform
            </Text>
          </VStack>
          <Button
            display={"flex"}
            gap={2.5}
            borderRadius={"2.0625rem"}
            paddingBlock={"0.8125rem"}
            paddingInline={"0.625rem"}
            width={"18.5rem"}
            alignItems={"center"}
            backgroundColor={"brand.text"}
            color={"brand.primary"}
            _hover={{
              backgroundColor: "brand.primary",
              color: "brand.text",
              transform: "scale(1.05)",
              borderColor: "brand.text",
              borderWidth: "1px",
            }}
          >
            <Text
              fontSize={"large"}
              fontWeight={"bold"}
              lineHeight={"1.5rem"}
              textOverflow={"ellipsis"}
            >
              Get started for free now
            </Text>
            <Icon>
              <BsArrowRight />
            </Icon>
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default TakeControlSection;
