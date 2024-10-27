import { Box, Button, Icon, Image, Text, VStack } from "@chakra-ui/react";
import avatar1 from "../assets/avatar-1.svg";
import avatar2 from "../assets/avatar-2.svg";
import avatar3 from "../assets/avatar-3.svg";
import { BsArrowRight } from "react-icons/bs";

const FaqCard = () => {
  return (
    <>
      <VStack
        backgroundColor={"brand.primary"}
        gap={"2.375rem"}
        paddingBlock={"3.1875rem"}
        paddingInline={8}
        width={"fit-content"}
        borderRadius={"2xl"}
        alignItems={"center"}
      >
        {/* ======== image container ======== */}
        <Box display={"flex"} alignItems={"center"}>
          <Image marginInlineEnd={"-1.25rem"} src={avatar1} alt="avatar-1" />
          <Image src={avatar2} alt="avatar-2" zIndex={999} />
          <Image marginInlineStart={"-1.25rem"} src={avatar3} alt="avatar-3" />
        </Box>
        {/* ======== still have questions ======== */}
        <VStack
          fontFamily={"Inter"}
          color={"brand.text"}
          textAlign={"center"}
          maxWidth={"23.4375rem"}
        >
          <Text
            fontSize={"1.25rem"}
            fontWeight={"medium"}
            lineHeight={"1.875rem"}
          >
            Still have questions?
          </Text>
          <Text fontSize={"large"} lineHeight={"1.75rem"}>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </Text>
        </VStack>
        <Button
          display={"flex"}
          gap={2.5}
          borderRadius={"1.375rem"}
          paddingBlock={"0.6125em"}
          paddingInline={"0.625rem"}
          width={"15.125rem"}
          alignItems={"center"}
          backgroundColor={"brand.text"}
          color={"brand.primary"}
          _hover={{
            backgroundColor: "brand.primary",
            color: "brand.text",
            transform: "scale(1.05)",
            borderColor: "brand.text",
            borderWidth: "1px",
          }}
        >
          <Text
            fontSize={"large"}
            fontWeight={"bold"}
            lineHeight={"1.5rem"}
            textOverflow={"ellipsis"}
          >
            Get in touch
          </Text>
          <Icon>
            <BsArrowRight />
          </Icon>
        </Button>
      </VStack>
    </>
  );
};

export default FaqCard;
