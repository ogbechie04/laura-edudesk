import {
  Heading,
  VStack,
  Text,
  HStack,
  Box,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const PlanCard = () => {
  const plans = [
    {
      heading: "Monthly plan",
      description: "Perfect for small school or short-term needs",
      price: 5000,
      period: "Per month",
    },
    {
      heading: "Quarterly Plan",
      description: "Opt for termly billing to save more.",
      price: 30000,
      period: "Quarterly",
    },
    {
      heading: "Yearly Plan",
      description: "Our best value for schools looking for long term solutions",
      price: 60000,
      period: "Per year",
    },
  ];

  return (
    <>
      <Box display={"flex"} gap={"1.8125rem"} alignItems={"center"}>
        {plans.map((plan, index) => (
          <VStack
            key={index}
            paddingBlock={index % 2 === 0 ? "2.0625rem" : "0"}
            paddingBlockStart={index % 2 === 0 ? "2.0625rem" : "2.3125rem"}
            backgroundColor={index % 2 === 0 ? "brand.text" : "brand.primary"}
            width={"23.375rem"}
            gap={index % 2 === 0 ? 16 : 0}
            borderRadius={"1.25rem"}
            paddingInline={index % 2 === 0 ? "1.4375rem" : 0}
            // position={'relative'}
          >
            <VStack
              color={index % 2 === 0 ? "brand.text1" : "brand.text"}
              gap={"unset"}
              alignItems={"flex-start"}
              width={"20.5rem"}
            >
              <Heading
                fontFamily={"Open Sans"}
                lineHeight={"normal"}
                fontSize={"1.875rem"}
              >
                {plan.heading}
              </Heading>
              <Text
                fontSize={"1.25rem"}
                lineHeight={"normal"}
                marginBlockStart={4.5}
                maxWidth={"18.0625rem"}
              >
                {plan.description}
              </Text>
              <HStack marginBlockStart={"1.4375rem"}>
                <Text
                  fontSize={"2rem"}
                  fontWeight={"semibold"}
                  lineHeight={"normal"}
                >
                  <Text as={"span"} textDecoration={"line-through"}>
                    N
                  </Text>
                  &nbsp;{plan.price}
                  <Text
                    as={"span"}
                    lineHeight={"normal"}
                    fontWeight={"normal"}
                    fontSize={"medium"}
                    alignSelf={"flex-end"}
                  >
                    &nbsp;{plan.period}
                  </Text>
                </Text>
              </HStack>
            </VStack>
            <Box
              width={"100%"}
              display={index % 2 === 0 ? "block" : "flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={10}
              paddingInline={index % 2 === 0 ? "0" : "1.4375rem"}
              paddingBlockEnd={index % 2 === 0 ? "0" : "2.3125rem"}
              backgroundColor={index % 2 === 0 ? "brand.primary" : "brand.text"}
              borderRadius={index % 2 === 0 ? "2.0625rem" : "0"}
              borderTopRadius={index % 2 === 0 ? "2.0625rem" : "5rem"}
              height={"100%"}
              paddingBlockStart={index % 2 === 0 ? "0" : "1.5625rem"}
              position={index % 2 === 0 ? "unset" : "absolute"}
              left="50%"
              transform="translateX(-50%)"
            >
              <Box
                display={index % 2 === 0 ? "none" : "flex"}
                color={"brand.primary"}
                backgroundColor={"brand.text"}
                paddingBlock={"0.3125rem"}
                paddingInlineStart={"0.6875rem"}
                paddingEnd={2}
                borderRadius={"0.625rem"}
              >
                <Text
                  fontFamily={"Inter"}
                  fontWeight={"semibold"}
                  lineHeight={"1.875rem"}
                  fontSize={"small"}
                >
                  Save 20% a year
                </Text>
              </Box>
              <Button
                display={"flex"}
                gap={2.5}
                borderRadius={"2.0625rem"}
                paddingBlock={"0.9375rem"}
                paddingInline={"0.625rem"}
                height={"fit-content"}
                width={"100%"}
                alignItems={"center"}
                backgroundColor={"brand.primary"}
                _hover={{
                  backgroundColor: "brand.text",
                  color: "brand.primary",
                  transform: "scale(1.0)",
                  borderColor: "brand.primary",
                  borderWidth: "1px",
                }}
              >
                <Text
                  fontSize={"large"}
                  fontWeight={"bold"}
                  lineHeight={"1.5rem"}
                  textOverflow={"ellipsis"}
                >
                  Start 30 days free trial
                </Text>
                <Icon>
                  <BsArrowRight />
                </Icon>
              </Button>
            </Box>
          </VStack>
        ))}
      </Box>
    </>
  );
};

export default PlanCard;
