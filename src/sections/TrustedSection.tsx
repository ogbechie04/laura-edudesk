import { VStack, Text, HStack, Image } from "@chakra-ui/react";
import calebLogo from "../assets/caleb-logo.svg";
import crownsLogo from "../assets/crown-logo.svg";
import legacyLogo from "../assets/legacy-logo.svg";
import anitaLogo from "../assets/anita-logo.svg";

const TrustedSection = () => {
  const schools = [
    {
      id: 1,
      name: "Caleb International School",
      logo: calebLogo,
    },
    {
      id: 2,
      name: "Crowns Gate School",
      logo: crownsLogo,
    },
    {
      id: 3,
      name: "Legacy Schools",
      logo: legacyLogo,
    },
    {
      id: 4,
      name: "Anita College",
      logo: anitaLogo,
    },
  ];

  return (
    <>
      <VStack gap={"1.4375rem"}>
        <Text
          fontSize={"1.25rem"}
          textAlign={"center"}
          fontWeight={"semibold"}
          lineHeight={"normal"}
          color={'brand.text1'}
        >
          Trusted by over 20 Schools
        </Text>
        <HStack gap={'3.25rem'}>
            {schools.map((school, index) => (
                <HStack gap={'0.5625rem'} key={index} alignItems={'center'}>
                    <Image src={school.logo} />
                    <Text whiteSpace={'nowrap'} color={'brand.grey'} fontSize={'x-large'} lineHeight={'normal'} fontWeight={'semibold'}>{school.name}</Text>
                </HStack>
            ))}
        </HStack>
      </VStack>
    </>
  );
};

export default TrustedSection;
