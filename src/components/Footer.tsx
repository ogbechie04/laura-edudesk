import {
  HStack,
  VStack,
  Text,
  Link,
  Separator,
  Image,
} from "@chakra-ui/react";
import Logo from "./Logo";
import instagram from "../assets/instagram-logo.svg";
import linkedIn from "../assets/linkedIn-logo.svg";
import twitter from "../assets/twitter-logo.svg";

const Footer = () => {
  return (
    <>
      <VStack
        width={"100%"}
        backgroundColor={"brand.secondary"}
        paddingBlock={"2.3125rem"}
        paddingInline={"5.5rem"}
        gap={"2.8125rem"}
      >
        <VStack gap={"1.6875rem"}>
          <Logo headerLogoDisplay={"none"} footerLogoDisplay={"flex"} />
          {/* ======== stack for nav links ======== */}
          <HStack fontSize={"large"} gap={"1.875rem"} lineHeight={"normal"}>
            {/* ======== home link ======== */}
            <Link _hover={{ textDecoration: "none" }} color={"brand.text"}>
              Home
            </Link>
            {/* ======== features link ======== */}
            <Link _hover={{ textDecoration: "none" }} color={"brand.text"}>
              Features
            </Link>
            {/* ======== pricing link ======== */}
            <Link _hover={{ textDecoration: "none" }} color={"brand.text"}>
              Pricing
            </Link>
            {/* ======== contact us link ======== */}
            <Link _hover={{ textDecoration: "none" }} color={"brand.text"}>
              Contact us
            </Link>
            {/* ======== terns of service link ======== */}
            <Link _hover={{ textDecoration: "none" }} color={"brand.text"}>
              Terms of service
            </Link>
            {/* ======== privacy police link ======== */}
            <Link _hover={{ textDecoration: "none" }} color={"brand.text"}>
              Privacy Policy
            </Link>
          </HStack>
        </VStack>
        <VStack width={"100%"} gap={'1.875rem'}>
          <Separator />
          <HStack alignItems={"flex-end"} justifyContent={"space-between"} width={'100%'}>
            <Text color={"brand.text"}>
              © 2024 Edudesks. All rights reserved
            </Text>
            <HStack gap={3.5}>
              <Link
                padding={1.5}
                backgroundColor={"brand.primary"}
                borderRadius={"full"}
              >
                <Image src={instagram} alt="link to instagram" />
              </Link>
              <Link
                padding={1.5}
                backgroundColor={"brand.primary"}
                borderRadius={"full"}
              >
                <Image src={linkedIn} alt="link to linkedIn" />
              </Link>
              <Link
                padding={1.5}
                backgroundColor={"brand.primary"}
                borderRadius={"full"}
              >
                <Image src={twitter} alt="link to twitter" />
              </Link>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Footer;
