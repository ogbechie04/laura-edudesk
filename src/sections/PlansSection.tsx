import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import PlanCard from "../components/PlanCard";

const PlansSection = () => {
  return (
    <>
      <VStack width={"100%"} alignContent={"stretch"} gap={"3.75rem"}>
        <VStack width={"100%"}>
          <VStack textAlign={"center"} gap={"0.9375rem"}>
            <Heading
              fontFamily={"Open Sans"}
              color={"brand.secondary"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              lineHeight={"3.0625rem"}
              width={"55.625rem"}
            >
              Affordable plans for school’s needs
            </Heading>
            <Text color={"brand.text1"} lineHeight={"normal"} fontSize={"xl"}>
              Choose the best plan for your school’s needs and budget
            </Text>
          </VStack>
        </VStack>
        <Box>
          <PlanCard />
        </Box>
      </VStack>
    </>
  );
};

export default PlansSection;
