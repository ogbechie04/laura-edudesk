import { Icon, Text, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ellipse from "../assets/ellipse-header.svg";
import Logo from "./Logo";
import { BsArrowRight } from "react-icons/bs";

/**
 *
 * TODO: Add Link for Logo on click to take you home
 * TODO: Add Link for each nav item
 * TODO: Add active state for each nav item
 */

const NavBar = () => {
  return (
    <HStack
      backgroundColor={"brand.secondary"}
      color={"brand.text"}
      paddingInline={"6.125rem"}
      paddingBlock={2}
      gap={"1.9375rem"}
      justifyContent={"space-between"}
    >
      {/* ======== stack of logo, links and login ======== */}
      <HStack gap={"4.5625rem"}>
        <Logo headerLogoDisplay="flex" footerLogoDisplay="none" />
        {/* ======== stack for nav links ======== */}
        <HStack gap={"3.4375rem"}>
          {/* ======== home link ======== */}
          <HStack gap={"1"} alignItems={"center"}>
            <Icon width={1} height={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={"unset"}
              >
                <circle cx="2" cy="2" r="2" fill="#F8FBFD" />
              </svg>
            </Icon>
            <Text fontWeight={"semibold"}>Home</Text>
          </HStack>
          {/* ======== features link ======== */}
          <HStack gap={"1"} alignItems={"center"} paddingInline={"0.90625rem"}>
            <Icon width={1} height={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={"unset"}
              >
                <circle cx="2" cy="2" r="2" fill="#F8FBFD" />
              </svg>
            </Icon>
            <Text fontWeight={"semibold"}>Features</Text>
          </HStack>
          {/* ======== pricing link ======== */}
          <HStack gap={"1"} alignItems={"center"}>
            <Icon width={1} height={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={"unset"}
              >
                <circle cx="2" cy="2" r="2" fill="#F8FBFD" />
              </svg>
            </Icon>
            <Text fontWeight={"semibold"}>Pricing</Text>
          </HStack>
          {/* ======== contact us link ======== */}
          <HStack gap={"1"} alignItems={"center"}>
            <Icon width={1} height={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={"unset"}
              >
                <circle cx="2" cy="2" r="2" fill="#F8FBFD" />
              </svg>
            </Icon>
            <Text fontWeight={"semibold"}>Contact us</Text>
          </HStack>
        </HStack>
        {/* ======== log in ======== */}
        <HStack gap={2.5} justifyContent={"center"} alignItems={"center"}>
          <Text
            fontSize={"large"}
            fontWeight={"bold"}
            lineHeight={"moderate"}
            textOverflow={"ellipsis"}
          >
            Log in
          </Text>
          <Icon width={6} height={6}>
            <BsArrowRight />
          </Icon>
        </HStack>
      </HStack>
      {/* ======== cta button ======== */}
      <Button
        display={"flex"}
        gap={2.5}
        borderRadius={"2.0625rem"}
        paddingBlock={"0.9375rem"}
        paddingInline={"0.625rem"}
        height={"fit-content"}
        width={"17.25rem"}
        alignItems={"center"}
        backgroundColor={"brand.primary"}
        _hover={{
          backgroundColor: "brand.text",
          color: "brand.primary",
          transform: "scale(1.05)",
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
    </HStack>
  );
};

export default NavBar;
