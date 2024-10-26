import { Box, Image, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import confirmationPopUp from "../assets/confirmation-pop-up.svg";
import AngledCard from "../components/AngledCard";

const SalaryPaymentsSection = () => {
  return (
    <>
      <HStack justifyContent={'space-between'}>
        {/* ======== payment snippet ======== */}
        <Box
          paddingInlineStart={20}
          paddingBlockStart={"6.5rem"}
          paddingInlineEnd={"4.9375rem"}
          paddingBlockEnd={"4.25rem"}
          position={"relative"}
          backgroundColor={"brand.primary"}
          width={"fit-content"}
          borderRadius={"full"}
        >
          {/* ======== angled card 1 ======== */}
          <Box position={"absolute"} top={"-2rem"} right={"50%"}>
            <AngledCard
              title={"Total Outstanding"}
              value={"46,456"}
              percentage={"-5.76%"}
              progressWidth={"3.8366rem"}
              progressColor={"brand.warning"}
              rotateAngle={"4.034deg"}
              percentageColor={"brand.danger"}
              percentageContainerColor={"rgba(233, 8, 8, 0.13)"}
            />
          </Box>
          {/* ======== confirmation pop-up image ======== */}
          <Image src={confirmationPopUp} />
          {/* ======== angled card 2 ======== */}
          <Box
            position={"absolute"}
            right={"-29%"}
            bottom={"50%"}
            transform={"translateY(50%)"}
          >
            <AngledCard
              title={"Total Payout"}
              value={"456,456"}
              percentage={"+2.76%"}
              progressWidth={"8.5628rem"}
              progressColor={"brand.success"}
              rotateAngle={"-5.374deg"}
              percentageColor={"brand.success"}
              percentageContainerColor={"rgba(8, 192, 116, 0.13)"}
            />
          </Box>
        </Box>
        <VStack
          maxWidth={"37.5625rem"}
          alignItems={"flex-start"}
          gap={"1.8125rem"}
        >
          <Heading
            fontFamily={"Open Sans"}
            textAlign={"left"}
            color={"brand.text1"}
            fontWeight={"bold"}
            fontSize={"4xl"}
            lineHeight={"3.0625rem"}
          >
            Effortless Salary Payments Made Simple
          </Heading>
          <Text
            textAlign={"left"}
            color={"brand.text1"}
            fontSize={"xl"}
            lineHeight={"1.875rem"}
          >
            Streamline your school's payroll process with our secure wallet system that allows for quick and easy salary payments. With just a few clicks, you can reduce administrative workload, eliminate errors, and ensure that your staff are paid accurately and on time, allowing you to focus more on what truly matters—educating and supporting your students
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default SalaryPaymentsSection;
