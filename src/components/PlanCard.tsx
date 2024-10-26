import {
  Heading,
  VStack,
  Text,
  HStack,
  Box,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const PlanCard = () => {
  return (
    <>
      <HStack alignItems={"center"}>
        {/* ======== card 1 ======== */}
        <VStack
          backgroundColor={"brand.background"}
          paddingBlock={"2.0625rem"}
          paddingInline={"1.4375rem"}
          alignItems={"flex-start"}
          color={"brand.text1"}
          gap={16}
          borderRadius={"1.25rem"}
          borderWidth={"1px"}
          borderStyle={"solid"}
          borderColor={"brand.border"}
        >
          {/* ======== top section and amount ======== */}
          <VStack
            alignItems={"flex-start"}
            gap={"1.4375rem"}
            maxWidth={"20.5rem"}
          >
            {/* ======== title and description */}
            <VStack alignItems={"flex-start"} gap={4.5}>
              <Heading
                fontFamily={"Open Sans"}
                lineHeight={"normal"}
                fontSize={"1.875rem"}
              >
                Monthly Plan
              </Heading>
              <Text fontSize={"1.25rem"} lineHeight={"normal"}>
                Perfect for small school or short-term needs
              </Text>
            </VStack>
            {/* ======== amount per period ======== */}
            <Text
              fontSize={"2rem"}
              fontWeight={"semibold"}
              lineHeight={"normal"}
            >
              <Text as={"span"} textDecoration={"line-through"}>
                N
              </Text>
              &nbsp;5000
              <Text
                as={"span"}
                lineHeight={"normal"}
                fontWeight={"normal"}
                fontSize={"medium"}
                alignSelf={"flex-end"}
              >
                &nbsp;per month
              </Text>
            </Text>
          </VStack>
          <Button
            display={"flex"}
            gap={2.5}
            borderRadius={"2.0625rem"}
            paddingBlock={"0.8125rem"}
            paddingInline={"0.625rem"}
            height={"fit-content"}
            width={"100%"}
            alignItems={"center"}
            backgroundColor={"brand.primary"}
            _hover={{
              backgroundColor: "brand.text",
              color: "brand.primary",
              transform: "scale(1.0)",
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
        </VStack>

        {/* ======== card 2 ======== */}
        <Flex
          className="plan-cards"
          gap="15px"
          height={"25.375rem"}
          width={"23.275rem"}

        >
          {/* ======== card details ======== */}
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="1.25rem"
            backgroundColor="brand.primary"
            padding="1.5625rem"
            width={"100%"}

          >
            {/* ======== card content ======== */}
            <Box color="brand.text" lineHeight={"normal"} width={"15.875rem"}>
              <Heading
                as="h4"
                fontSize="1.875rem"
                fontWeight="semibold"
                color="brand.text"
                fontFamily={"Open Sans"}
                lineHeight={"normal"}
              >
                Quarterly plan
              </Heading>
              <Text fontSize="1.25rem" marginBlockStart={"1.125rem"}>
                Opt for termly billing to save more.
              </Text>
              <Flex alignItems="flex-end" marginBlockStart="1.4375rem">
                {/* ======== amount per period ======== */}
                <Text
                  fontSize={"2rem"}
                  fontWeight={"semibold"}
                  lineHeight={"normal"}
                >
                  <Text as={"span"} textDecoration={"line-through"}>
                    N
                  </Text>
                  &nbsp;30000
                  <Text
                    as={"span"}
                    lineHeight={"normal"}
                    fontWeight={"normal"}
                    fontSize={"medium"}
                    alignSelf={"flex-end"}
                  >
                    &nbsp;Quaterly
                  </Text>
                </Text>
              </Flex>
            </Box>

            {/* ======== bottom curve ======== */}
            <Box
              position="absolute"
              backgroundColor="brand.border"
              top="58%"
              left="50%"
              transform="translateX(-50%)"
              borderRadius="50%"
              height="500px"
              width="500px"
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              flexDirection="column"
              paddingBlockStart="1.5625rem"
              gap="10"
            >
              <Box
                display={"flex"}
                color={"brand.primary"}
                backgroundColor={"brand.text"}
                paddingBlock={"0.3125rem"}
                paddingInlineStart={"0.6875rem"}
                paddingInlineEnd={2}
                borderRadius={"0.625rem"}
              >
                <Text
                  fontFamily={"Inter"}
                  fontWeight={"semibold"}
                  lineHeight={"1.875rem"}
                  fontSize={"small"}
                >
                  Save 20% a year
                </Text>
              </Box>
              <Button
                display={"flex"}
                gap={2.5}
                borderRadius={"2.0625rem"}
                paddingBlock={"0.8125rem"}
                paddingInline={"0.625rem"}
                height={"fit-content"}
                width={"20.5rem"}
                alignItems={"center"}
                backgroundColor={"brand.primary"}
                _hover={{
                  backgroundColor: "brand.text",
                  color: "brand.primary",
                  transform: "scale(1.0)",
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
            </Box>
          </Box>
        </Flex>

        {/* ======== card 3 ======== */}
        <VStack
          backgroundColor={"brand.background"}
          paddingBlock={"2.0625rem"}
          paddingInline={"1.4375rem"}
          alignItems={"flex-start"}
          color={"brand.text1"}
          gap={16}
          borderRadius={"1.25rem"}
          borderWidth={"1px"}
          borderStyle={"solid"}
          borderColor={"brand.border"}
        >
          {/* ======== top section and amount ======== */}
          <VStack
            alignItems={"flex-start"}
            gap={"1.4375rem"}
            maxWidth={"20.5rem"}
          >
            {/* ======== title and description */}
            <VStack alignItems={"flex-start"} gap={4.5}>
              <Heading
                fontFamily={"Open Sans"}
                lineHeight={"normal"}
                fontSize={"1.875rem"}
              >
                Yearly Plan
              </Heading>
              <Text fontSize={"1.25rem"} lineHeight={"normal"}>
                Our best value for schools looking for long term solutions
              </Text>
            </VStack>
            {/* ======== amount per period ======== */}
            <Text
              fontSize={"2rem"}
              fontWeight={"semibold"}
              lineHeight={"normal"}
            >
              <Text as={"span"} textDecoration={"line-through"}>
                N
              </Text>
              &nbsp;60000
              <Text
                as={"span"}
                lineHeight={"normal"}
                fontWeight={"normal"}
                fontSize={"medium"}
                alignSelf={"flex-end"}
              >
                &nbsp;per month
              </Text>
            </Text>
          </VStack>
          <Button
            display={"flex"}
            gap={2.5}
            borderRadius={"2.0625rem"}
            paddingBlock={"0.8125rem"}
            paddingInline={"0.625rem"}
            height={"fit-content"}
            width={"100%"}
            alignItems={"center"}
            backgroundColor={"brand.primary"}
            _hover={{
              backgroundColor: "brand.text",
              color: "brand.primary",
              transform: "scale(1.0)",
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
        </VStack>
      </HStack>
    </>
  );
};

export default PlanCard;

//   <Box display="flex" gap="1.8125rem" alignItems="center">
//     {plans.map((plan, index) => (
//       <VStack
//         key={index}
//         paddingY={index === 1 ? "0" : "2.0625rem"}
//         backgroundColor={index === 1 ? "brand.primary" : "brand.text"}
//         width="23.375rem"
//         gap={index === 1 ? 4 : 8}
//         borderRadius="1.25rem"
//         paddingX="1.4375rem"
//         position="relative"
//       >
//         {/* Semi-circle background for the middle card */}
//         {index === 1 && (
//           <Box
//             position="absolute"
//             top="-2rem"
//             left="50%"
//             transform="translateX(-50%)"
//             backgroundColor="white"
//             width="150%"
//             height="100px"
//             borderBottomRadius="100%"
//             boxShadow="md"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Text
//               fontSize="small"
//               fontWeight="semibold"
//               color="brand.primary"
//             >
//               {plan.saveLabel}
//             </Text>
//           </Box>
//         )}

//         {/* Plan Details */}
//         <VStack
//           color={index === 1 ? "white" : "brand.text"}
//           alignItems="flex-start"
//           width="100%"
//           textAlign={index === 1 ? "center" : "left"}
//         >
//           <Heading fontSize="1.875rem">{plan.heading}</Heading>
//           <Text fontSize="1.25rem" maxWidth="18.0625rem">
//             {plan.description}
//           </Text>
//           <HStack>
//             <Text fontSize="2rem" fontWeight="semibold">
//               <Text as="span" textDecoration="line-through">
//                 N
//               </Text>{" "}
//               {plan.price}
//               <Text as="span" fontSize="medium" fontWeight="normal">
//                 &nbsp;{plan.period}
//               </Text>
//             </Text>
//           </HStack>
//         </VStack>

//         {/* Action Button */}
//         <Button
//           display="flex"
//           gap={2.5}
//           borderRadius="2.0625rem"
//           paddingY="0.9375rem"
//           width="100%"
//           alignItems="center"
//           backgroundColor={index === 1 ? "brand.text" : "brand.primary"}
//           _hover={{
//             backgroundColor: index === 1 ? "brand.primary" : "brand.text",
//             color: index === 1 ? "white" : "brand.primary",
//             transform: "scale(1.05)",
//             borderColor: "brand.primary",
//             borderWidth: "1px",
//           }}
//         >
//           <Text fontSize="large" fontWeight="bold">
//             Start 30 days free trial
//           </Text>
//           <Icon as={BsArrowRight} />
//         </Button>
//       </VStack>
//     ))}
//   </Box>
