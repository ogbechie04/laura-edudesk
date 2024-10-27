import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import dashboard from "../assets/hero-dashboard.svg";

const HeroSection = () => {
  return (
    <>
      <VStack
        backgroundColor={"brand.primary"}
        maxWidth={"78.875rem"}
        paddingInlineStart={"9.25rem"}
        paddingBlockStart={"7.75rem"}
        paddingInlineEnd={"9.3475rem"}
        borderRadius={"1.25rem"}
        gap={"5.5rem"}
      >
        {/* ======== heading plus button section ======== */}
        <VStack gap={"2.875rem"}>
          {/* ======== heading alone section ======== */}
          <VStack color={"brand.text"} gap={2.5}>
            <Box
              padding={"2.5"}
              borderRadius={"0.625rem"}
              backgroundColor={"rgba(64, 135, 173, 0.30)"}
              backdropFilter={"blur(2px)"}
              borderWidth={"1px"}
              borderStyle={"solid"}
              borderColor={"brand.primary"}
            >
              <Text fontSize={"0.875rem"} lineHeight={"normal"}>
                Start Managing Your School Finances Today
              </Text>
            </Box>
            <VStack textAlign={"center"} gap={"1.0625rem"}>
              <Heading
                fontFamily={"Open Sans"}
                fontSize={"3.125rem"}
                fontWeight={"bold"}
                lineHeight={"normal"}
              >
                Simplify School Finances With Our All-In-One Management
                Platform.
              </Heading>
              <Text
                fontSize={"1.25rem"}
                fontWeight={"semibold"}
                lineHeight={"normal"}
                maxWidth={"52.0625rem"}
              >
                Gain full control over income and expenses processes - all from
                one seamless platform designed for schools
              </Text>
            </VStack>
          </VStack>
          <Button
            display={"flex"}
            gap={2.5}
            borderRadius={"2.0625rem"}
            paddingBlock={"0.9375rem"}
            paddingInline={"0.625rem"}
            width={"20.5625rem"}
            alignItems={"center"}
            backgroundColor={"brand.text"}
            color={"brand.primary"}
            height={"3.25rem"}
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
              Start 30-DAYS free trial
            </Text>
            <Icon>
              <BsArrowRight />
            </Icon>
          </Button>
        </VStack>
        <Box
          backgroundColor={"#718E9F"}
          padding={"0.9044rem"}
          borderTopRadius={"1.3124rem"}
          paddingBottom={0}
          // boxShadow={"0px 4.2px 4.2px 0px rgba(0, 0, 0, 0.25)"}
        >
          <Image src={dashboard} />
        </Box>
      </VStack>
    </>
  );
};

export default HeroSection;
