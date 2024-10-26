import { Grid, Heading, GridItem, Text, VStack } from "@chakra-ui/react";
import FeatureCard from "../components/FeatureCard";
import walletManagementImage from "../assets/wallet-management-image.svg";
import expenseTrackingImage from "../assets/expense-tracking-image.svg";
import schoolFeesTrackingImage from "../assets/school-fees-tracking-image.svg";
import incomeTrackingImage from "../assets/income-tracking-image.svg";
import overallPerformanceImage from "../assets/overall-performance-image.svg";

const FeaturesSection = () => {
  return (
    <VStack fontFamily={"Open Sans"}>
      {/* ======== features heading and description ======== */}
      <VStack textAlign={"center"} gap={"0.9375rem"}>
        <Heading
          fontFamily={"Open Sans"}
          color={"brand.secondary"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          lineHeight={"3.0625rem"}
          width={"55.625rem"}
        >
          Comprehensive Features To Manage Your School’s Finances
        </Heading>
        <Text
          color={"brand.grey"}
          lineHeight={"normal"}
          maxWidth={"38.625rem"}
          fontSize={"xl"}
        >
          Streamline Your School's Financial Operations By Efficiently Managing
          Salary Payments And Expenses.
        </Text>
      </VStack>
      {/* ======== feature cards display ======== */}
      <Grid templateColumns={'repeat(3, 1fr)'} columnGap={3.5}>
        {/* ======== secured walet management ======== */}
        <GridItem>
            <FeatureCard featureHeading={"Secured Wallet Management"} featureDescription={"Access a secure wallet to handle payments for salaries and expenses without any hassle"} featurePreview={walletManagementImage} maxWidth="25.625rem" />
        </GridItem>
        {/* ======== expense tracking ======== */}
        <GridItem>
            <FeatureCard featureHeading={"Expense Tracking Made Simple"} featureDescription={"Monitor and track all school-related expenses with a streamlined payment system"} featurePreview={expenseTrackingImage} maxWidth="25.625rem" />
        </GridItem>
        {/* ======== school fees tracking ======== */}
        <GridItem>
            <FeatureCard featureHeading={"Effortless School fees tracking"} featureDescription={"With our platform, schools can effortlessly monitor fee payments."} featurePreview={schoolFeesTrackingImage} maxWidth="25.625rem" />
        </GridItem>
      </Grid>
      <Grid templateColumns={'repeat(2, 1fr)'} columnGap={'1.375rem'} marginBlockStart={'1.625rem'}>
        {/* ======== income tracking ======== */}
        <GridItem >
            <FeatureCard featureHeading={"Effortless Income tracking"} featureDescription={"Our platform provides a clear and detailed view of your earnings, helping you monitor every income stream effortlessly."} featurePreview={incomeTrackingImage} maxWidth="38.75rem" />
        </GridItem>
        {/* ======== overall performance ======== */}
        <GridItem>
            <FeatureCard featureHeading={"Monitor Overall performance"} featureDescription={"Edudesk helps you turn data into actionable information, helping you track performance."} featurePreview={overallPerformanceImage} maxWidth="38.75rem" />
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default FeaturesSection;
