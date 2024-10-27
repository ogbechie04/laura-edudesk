import { Box, Circle, Text, VStack } from "@chakra-ui/react";

const HowItWorksSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Set Up Your Account",
      description:
        "Quickly sign up, input your school's basic details and pay subscription to get started with our financial management tool.",
      bg: "blue.900",
    },
    {
      number: 2,
      title: "Profile Setup",
      description:
        "Complete additional profile information, such as uploading a school logo, inputting basic details and school fees details.",
      bg: "blue.600",
    },
    {
      number: 3,
      title: "Add Necessary Details",
      description:
        "Enter student information, class information and staff information; including payment schedules and bank details.",
      bg: "blue.900",
    },
    {
      number: 4,
      title: "Fund Your Wallet",
      description:
        "Deposit the necessary funds into the secure platform wallet to cover salary payments.",
      bg: "blue.600",
    },
  ];

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        {steps.map((step, index) => (
          <VStack
            alignItems={"flex-start"}
            gap={"1.375rem"}
            key={index}
            marginBlockStart={step.number % 2 === 0 ? 10 : 0}
            position={"relative"}
            _after={
              index < steps.length - 1
                ? {
                    content: `""`,
                    position: "absolute",
                    top: `${index % 2 === 0 ? "20%" : "9%"}`,
                    left: "0%",
                    width: "24rem",
                    height: "2px",
                    backgroundColor: "brand.text",
                    transform: `translateY(-50%) rotate(${
                      index % 2 === 0 ? "6deg" : "-5deg"
                    })`,
                    zIndex: 1,
                  }
                : {}
            }
          >
            <Circle
              padding={"2.5"}
              backgroundColor={
                step.number % 2 === 0 ? "brand.secondary" : "brand.primary"
              }
              borderRadius={"full"}
              borderWidth={"1px"}
              borderColor={"brand.text"}
              zIndex={9999}
            >
              <Text
                fontSize={"2.5rem"}
                fontWeight={"semibold"}
                color={"brand.text"}
                lineHeight={1}
                fontFamily={"static"}
                paddingInline={"0.4688rem"}
              >
                {step.number}
              </Text>
            </Circle>
            <VStack
              alignItems={"flex-start"}
              gap={1.5}
              color={"brand.text1"}
              maxWidth={"15.8125rem"}
            >
              <Text
                fontWeight="semibold"
                fontSize={"xl"}
                lineHeight={"moderate"}
              >
                {step.title}
              </Text>
              <Text lineHeight={"1.875rem"}>{step.description}</Text>
            </VStack>
          </VStack>
        ))}
      </Box>
    </>
  );
};

export default HowItWorksSteps;
