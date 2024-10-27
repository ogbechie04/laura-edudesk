import { Icon, Text, HStack, Button, Link } from "@chakra-ui/react";
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
      // justifyContent={"space-between"}
    >
      {/* ======== stack of logo, links and login ======== */}
      <HStack width={"100%"} gap={"4.5625rem"} justifyContent={"space-between"}>
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
            <Link fontWeight={"semibold"} color={"brand.text"} _hover={{textDecoration: 'none'}}>
              Home
            </Link>
          </HStack>
          {/* ======== features link ======== */}
          <HStack gap={"1"} alignItems={"center"} paddingInline={"0.90625rem"}>
            <Icon width={1} height={1} display={"none"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={"unset"}
              >
                <circle cx="2" cy="2" r="2" fill="#F8FBFD" />
              </svg>
            </Icon>
            <Link color={"brand.text"} _hover={{textDecoration: 'none'}}>Features</Link>
          </HStack>
          {/* ======== pricing link ======== */}
          <HStack gap={"1"} alignItems={"center"}>
            <Icon width={1} height={1} display={"none"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={"unset"}
              >
                <circle cx="2" cy="2" r="2" fill="#F8FBFD" />
              </svg>
            </Icon>
            <Link color={"brand.text"} _hover={{textDecoration: 'none'}}>Pricing</Link>
          </HStack>
          {/* ======== contact us link ======== */}
          <HStack gap={"1"} alignItems={"center"}>
            <Icon width={1} height={1} display={"none"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={"unset"}
              >
                <circle cx="2" cy="2" r="2" fill="#F8FBFD" />
              </svg>
            </Icon>
            <Link color={"brand.text"} _hover={{textDecoration: 'none'}}>Contact us</Link>
          </HStack>
        </HStack>
        {/* ======== log in ======== */}
        <Link _hover={{textDecoration: 'none'}}>
          <HStack
            gap={2.5}
            justifyContent={"center"}
            alignItems={"center"}
            color={"brand.text"}
          >
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
        </Link>
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
