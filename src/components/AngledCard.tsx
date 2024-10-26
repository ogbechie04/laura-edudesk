import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface AngledCardProps {
  title: string;
  value: string;
  percentage: string;
  progressWidth: string;
  progressColor: string;
  rotateAngle: string
}

const AngledCard: React.FC<AngledCardProps> = ({
  title = "Total Outstanding",
  value = "46,456",
  percentage = "-5.76%",
  progressWidth = "3.837rem",
  progressColor = "brand.warning",
  rotateAngle
}) => {
  return (
    <Box
      width={"fit-content"}
      backgroundColor={"brand.background"}
      paddingInlineStart={"0.5031rem"}
      paddingBlockStart={"0.6288rem"}
      paddingInlineEnd={"3.1025rem"}
      paddingBlockEnd={"1.2669rem"}
      transform={`rotate(${rotateAngle})`}
      borderRadius={'0.6934rem'}
    >
      <Text color={"brand.text1"} fontSize={"0.8331rem"} lineHeight={"normal"}>
        {title}
      </Text>
      <HStack marginBlockStart={"0.7394rem"}>
        <Text
          color={"brand.text1"}
          fontSize={"1.2943rem"}
          fontWeight={"semibold"}
          lineHeight={"1.5088rem"}
        >
          <Text as={"span"} textDecoration={"line-through"}>
            N
          </Text>
          {value}&nbsp;
        </Text>
        <Box
          padding={"0.185rem"}
          backgroundColor={"rgba(233, 8, 8, 0.13)"}
          borderRadius={'0.65rem'}
          maxHeight={'1.0631rem'}
          display={'flex'}
          alignItems={'center'}
        >
          <Text color={"brand.danger"} opacity={'initial'} paddingInline={'0.4313rem'} fontWeight={'light'} fontSize={'0.4623rem'} lineHeight={'1.156rem'}>
            {percentage}
          </Text>
        </Box>
      </HStack>
      <Box
        height={"0.2311rem"}
        width={"9.7199rem"}
        backgroundColor={"brand.border"}
        borderRadius={"0.138rem"}
        marginBlockStart={'1.1094rem'}
      >
        <Box
          width={progressWidth}
          backgroundColor={progressColor}
          height={"100%"}
          borderLeftRadius={"inherit"}
        ></Box>
      </Box>
    </Box>
  );
};

export default AngledCard;
