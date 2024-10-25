import { HStack, Image, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import eHeaderLogo from "../assets/e-header.svg";
import eFooterLogo from "../assets/e-footer.svg";
import headerEllipse from "../assets/ellipse-header.svg";
import footerEllipse from "../assets/ellipse-footer.svg";
import React from "react";

/**
 * TODO: Add Link for Logo on click to take you home
 */

interface LogoProps {
  headerLogoDisplay: string;
  footerLogoDisplay: string;
}

const Logo: React.FC<LogoProps> = ({headerLogoDisplay = 'flex', footerLogoDisplay = 'flex'}) => {
  return (
    <>
    {/* Header Logo */}
    {/* <Link as={ReactRouterLink} to="/"> */}
      <HStack
        fontFamily={"logo"}
        gap={"0.234rem"}
        width={"fit-content"}
        alignItems={'center'}
        display={headerLogoDisplay}
      >
        <Image src={eHeaderLogo} alt="E-Logo" />
        <Text fontWeight={"bold"} color={"brand.text"} fontSize={'46.739px'} lineHeight={1.12}>
          du
          <Text fontWeight={"normal"} display={"inline"}>
            desks
          </Text>
        </Text>
        <Image src={headerEllipse} alt="Logo-Ellipse" verticalAlign={'baseline'} marginTop={'1.5rem'} />
      </HStack>
      {/* </Link> */}
      {/* Footer Logo */}
      <HStack
        fontFamily={"logo"}
        gap={"0.25rem"}
        width={"fit-content"}
        alignItems={'center'}
        display={footerLogoDisplay}
      >
        <Image src={eFooterLogo} alt="E-Logo" />
        <Text fontWeight={"bold"} color={"brand.text"} fontSize={'50px'} lineHeight={'1.12'}>
          du
          <Text as={'span'} fontWeight={"normal"} display={"inline"}>
            desks
          </Text>
        </Text>
        <Image src={footerEllipse} alt="Logo-Ellipse" marginTop={'1.6rem'} />
      </HStack>
    </>
  );
};

export default Logo;
