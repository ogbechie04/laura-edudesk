import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import HowItWorksSteps from "../components/HowItWorksSteps";

const HowItWorksSection = () => {
  return (
    <VStack width={'100%'} alignContent={'stretch'} gap={'3.75rem'}>
      <VStack width={'100%'}>
        <VStack textAlign={"center"} gap={"0.9375rem"}>
          <Heading
            fontFamily={"Open Sans"}
            color={"brand.secondary"}
            fontSize={"4xl"}
            fontWeight={"bold"}
            lineHeight={"3.0625rem"}
            width={"55.625rem"}
          >
            How It Works
          </Heading>
          <Text color={"brand.text1"} lineHeight={"normal"} fontSize={"xl"}>
            Manage Your School’s Income And Expenses In Just A Few Simple Steps
          </Text>
        </VStack>
      </VStack>
      <Box width={'100%'}>
        <HowItWorksSteps />
      </Box>
    </VStack>
  );
};

export default HowItWorksSection;
