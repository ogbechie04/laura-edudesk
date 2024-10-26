import { Box, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import circularText from "../assets/circular-text.svg";
import incomeReport from "../assets/income-report.svg";

const IncomeReportSection = () => {
  return (
    <HStack
      fontFamily={"Open Sans"}
      gap={"7.6875rem"}
      justifyContent={"space-between"}
    >
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
          Manage School Finances More Efficiently With Edudesks
        </Heading>
        <Text
          textAlign={"left"}
          color={"brand.grey"}
          fontSize={"xl"}
          lineHeight={"1.875rem"}
        >
          EduDesks is your comprehensive solution for seamless school financial
          management. Designed to simplify budgeting, tracking expenses, and
          managing payments, with features like automated fee collection,
          detailed financial reports, and real-time analytics, you can gain
          better control over your institution's finances
        </Text>
      </VStack>
      <HStack>
        <Box alignSelf={"flex-end"} marginBlockEnd={"-1.3rem"}>
          <Image src={circularText} alt="" />
        </Box>
        <Box
          backgroundColor={"brand.primary"}
          paddingBlockStart={"2.1731rem"}
          paddingBlockEnd={"2.1206rem"}
          paddingInlineStart={"2.1731rem"}
          paddingInlineEnd={"1.59rem"}
          borderRadius={"full"}
          marginInlineStart={"-2.5rem"}
        >
          <Image src={incomeReport} alt="" />
        </Box>
      </HStack>
    </HStack>
  );
};

export default IncomeReportSection;
