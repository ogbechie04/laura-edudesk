import { Box, HStack, Text, Link, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import HeroSection from "../sections/HeroSection";
import TrustedSection from "../sections/TrustedSection";
import IncomeReportSection from "../sections/IncomeReportSection";
import FeaturesSection from "../sections/FeaturesSection";
import SalaryPaymentsSection from "../sections/SalaryPaymentsSection";
import PlansSection from "../sections/PlansSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import FaqSection from "../sections/FaqSection";
import TakeControlSection from "../sections/TakeControlSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Box
        backgroundColor={"brand.border"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {/* <Box width={'100%'} alignItems={'center'}> */}
        <HStack
          gap={3.5}
          fontSize={"large"}
          fontWeight={"semibold"}
          lineHeight={"normal"}
          paddingBlock={4}
        >
          <Text color={"brand.secondary"}>Buy Now And Save 20% Off Plan </Text>
          <Link
            color={"brand.primary"}
            textDecoration={"underline"}
            _hover={{ textUnderlineOffset: "unset" }}
          >
            See plans and pricing
          </Link>
        </HStack>
        {/* ======== navbar ======== */}
        <Box width={"100%"} zIndex={99999} position={'sticky'} top={0}>
          <NavBar />
        </Box>
        {/* </Box> */}
        {/* ======== all sections except footer ======== */}
        <VStack
          paddingInlineStart={"5.625rem"}
          paddingInlineEnd={"5.5rem"}
          gap={"10.875rem"}
        >
          {/* ======== hero and trusted sections ======== */}
          <VStack gap={"4.125rem"} paddingBlockStart={"2.0625rem"}>
            {/* ======== hero section ======== */}
            <Box width={"100%"}>
              <HeroSection />
            </Box>
            {/* ======== trusted section ======== */}
            <Box width={"100%"}>
              <TrustedSection />
            </Box>
          </VStack>
          {/* ======== income report section ======== */}
          <Box width={"100%"}>
            <IncomeReportSection />
          </Box>
          {/* ======== features section ======== */}
          <Box width={"100%"}>
            <FeaturesSection />
          </Box>
          {/* ======== salary payment section ======== */}
          <Box width={"100%"}>
            <SalaryPaymentsSection />
          </Box>
          {/* ======== plans section ======== */}
          <Box width={"100%"}>
            <PlansSection />
          </Box>
          {/* ======== how it works section ======== */}
          <Box width={"100%"}>
            <HowItWorksSection />
          </Box>
          {/* ======== faq section ======== */}
          <Box width={"100%"}>
            <FaqSection />
          </Box>
          {/* ======== take control section ======== */}
          <Box width={"100%"}>
            <TakeControlSection />
          </Box>
        </VStack>
        {/* ======== footer section ======== */}
        <Box width={"100%"} marginBlockStart={'3.3125rem'}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
