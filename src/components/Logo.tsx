import { HStack, Image, Text } from "@chakra-ui/react";
import eHeaderLogo from "../assets/e-header.svg";
import eFooterLogo from "../assets/e-footer.svg";
import headerEllipse from "../assets/ellipse-header.svg";
import footerEllipse from "../assets/ellipse-footer.svg";
import React from "react";

interface LogoProps {
  fontSize: string;
}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <>
      <HStack
        backgroundColor={"brand.secondary"}
        fontFamily={"logo"}
        gap={"0.234rem"}
        width={"fit-content"}
        // alignItems={'flex-end'}
      >
        <Image src={eHeaderLogo} alt="E-Logo" />
        <Text fontWeight={"bold"} color={"brand.text"} fontSize={'46.739px'} lineHeight={1.12}>
          du
          <Text fontWeight={"normal"} display={"inline"}>
            desks
          </Text>
        </Text>
        <Image src={headerEllipse} alt="Logo-Ellipse" />
      </HStack>
      <HStack
        backgroundColor={"brand.secondary"}
        fontFamily={"logo"}
        gap={"0.234rem"}
        width={"fit-content"}
        marginTop={'16'}
      >
        <Image src={eFooterLogo} alt="E-Logo" />
        <Text fontWeight={"bold"} color={"brand.text"} fontSize={'50px'} lineHeight={1}>
          du
          <Text fontWeight={"normal"} display={"inline"}>
            desks
          </Text>
        </Text>
        <Image src={footerEllipse} alt="Logo-Ellipse" />
      </HStack>
    </>
  );
};

export default Logo;
